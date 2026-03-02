import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import styles from './LiquidAuth.module.css';

// Base URL for API – adjust if needed
const API_URL = 'http://localhost:5000/api';

const LiquidAuth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setError(''); // clear error on toggle
  };

  const handleSubmit = async (formData) => {
    setLoading(true);
    setError('');

    try {
      const endpoint = isLogin ? '/login' : '/signup';
      const response = await axios.post(`${API_URL}${endpoint}`, formData);

      // Store token and user data
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));

      // Redirect to dashboard (you can use useNavigate from react-router-dom)
      window.location.href = '/Home'; // or use navigate()
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.whiteBg} />
      <motion.div
        className={styles.liquidPanel}
        variants={panelVariants}
        animate={isLogin ? 'login' : 'signup'}
        initial={false}
      />
      <div className={styles.formArea}>
        <AnimatePresence mode="wait">
          {isLogin ? (
            <LoginForm
              key="login"
              toggleMode={toggleMode}
              onSubmit={handleSubmit}
              loading={loading}
              error={error}
            />
          ) : (
            <SignupForm
              key="signup"
              toggleMode={toggleMode}
              onSubmit={handleSubmit}
              loading={loading}
              error={error}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

// Panel variants (same as before)
const panelVariants = {
  login: {
    left: '50%',
    borderRadius: '80px 0 0 80px / 50%',
    scale: 1,
    rotate: 0,
    y: 0,
    transition: {
      type: 'tween',
      ease: [0.65, 0, 0.35, 1],
      duration: 0.8,
    },
  },
  signup: {
    left: '0%',
    borderRadius: '0 80px 80px 0 / 50%',
    scale: [1, 1.02, 1],
    rotate: [0, 1, 0],
    y: [0, -5, 0],
    transition: {
      type: 'tween',
      ease: [0.65, 0, 0.35, 1],
      duration: 0.8,
      times: [0, 0.5, 1],
    },
  },
};

// ----- Login Form -----
const LoginForm = ({ toggleMode, onSubmit, loading, error }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <motion.div
      className={styles.form}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      <h2 className={styles.title}>Welcome Back</h2>
      {error && <div className={styles.error}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <FloatingInput
            type="email"
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputGroup}>
          <FloatingInput
            type="password"
            label="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <motion.button
          type="submit"
          className={styles.submitBtn}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Log In'}
        </motion.button>
      </form>
      <p className={styles.switchText}>
        Don't have an account?{' '}
        <button type="button" onClick={toggleMode} className={styles.switchBtn}>
          Sign Up
        </button>
      </p>
    </motion.div>
  );
};

// ----- Signup Form -----
const SignupForm = ({ toggleMode, onSubmit, loading, error }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Remove confirmPassword before sending
    const { confirmPassword, ...data } = formData;
    onSubmit(data);
  };

  return (
    <motion.div
      className={styles.form}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      <h2 className={styles.title}>Create Account</h2>
      {error && <div className={styles.error}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <FloatingInput
            type="text"
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputGroup}>
          <FloatingInput
            type="email"
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputGroup}>
          <FloatingInput
            type="password"
            label="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputGroup}>
          <FloatingInput
            type="password"
            label="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <motion.button
          type="submit"
          className={styles.submitBtn}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={loading}
        >
          {loading ? 'Creating...' : 'Sign Up'}
        </motion.button>
      </form>
      <p className={styles.switchText}>
        Already have an account?{' '}
        <button type="button" onClick={toggleMode} className={styles.switchBtn}>
          Log In
        </button>
      </p>
    </motion.div>
  );
};

// ----- Floating Input (updated to accept value/onChange) -----
const FloatingInput = ({ type, label, name, value, onChange }) => {
  const [focused, setFocused] = useState(false);

  return (
    <motion.div
      className={styles.inputWrapper}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(value !== '')}
        className={styles.input}
        id={name}
        placeholder=" "
      />
      <label
        htmlFor={name}
        className={`${styles.floatingLabel} ${focused || value ? styles.active : ''}`}
      >
        {label}
      </label>
    </motion.div>
  );
};

export default LiquidAuth;
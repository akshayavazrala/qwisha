import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './LoginSignup.module.css'

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true)

  const toggleMode = () => setIsLogin(!isLogin)

  return (
    <div className={styles.page}>
      {/* Animated gradient background */}
      <div className={styles.gradientBg} />

      {/* Floating blobs */}
      <div className={styles.blobContainer}>
        <div className={styles.blob1} />
        <div className={styles.blob2} />
        <div className={styles.blob3} />
      </div>

      {/* Particle sparkles */}
      <div className={styles.particles}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={styles.particle}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
            }}
          />
        ))}
      </div>

      {/* Glassmorphism card */}
      <motion.div
        className={styles.card}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className={styles.logo}>Qwisha 🎉</div>

        {/* Toggle buttons */}
        <div className={styles.toggleContainer}>
          <button
            className={`${styles.toggleBtn} ${isLogin ? styles.active : ''}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`${styles.toggleBtn} ${!isLogin ? styles.active : ''}`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        {/* Animated form area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={isLogin ? 'login' : 'signup'}
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -30, scale: 0.95 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className={styles.formWrapper}
          >
            {isLogin ? <LoginForm /> : <SignupForm />}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

// ----- Login Form -----
const LoginForm = () => {
  return (
    <form className={styles.form}>
      <FloatingInput type="email" label="Email" name="email" />
      <FloatingInput type="password" label="Password" name="password" />
      <ActionButton text="Sign In" />
    </form>
  )
}

// ----- Signup Form -----
const SignupForm = () => {
  return (
    <form className={styles.form}>
      <FloatingInput type="text" label="Full Name" name="name" />
      <FloatingInput type="email" label="Email" name="email" />
      <FloatingInput type="password" label="Password" name="password" />
      <FloatingInput type="password" label="Confirm Password" name="confirmPassword" />
      <ActionButton text="Create Account" />
    </form>
  )
}

// ----- Reusable Floating Input with staggered animation -----
const FloatingInput = ({ type, label, name }) => {
  const [focused, setFocused] = useState(false)
  const [value, setValue] = useState('')

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
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(value !== '')}
        className={styles.input}
        id={name}
      />
      <label
        htmlFor={name}
        className={`${styles.floatingLabel} ${focused || value ? styles.active : ''}`}
      >
        {label}
      </label>
    </motion.div>
  )
}

// ----- Gradient Button with bounce & scale effects -----
const ActionButton = ({ text }) => {
  return (
    <motion.button
      className={styles.submitBtn}
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
    >
      <span>{text}</span>
      <div className={styles.shimmer} />
    </motion.button>
  )
}

export default LoginSignup
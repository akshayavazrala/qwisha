import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <Link to="/" className={styles.logo}>Qwisha 🎉</Link>
        <ul className={styles.navLinks}>
          <li><Link to="/#features">Features</Link></li>
          <li><Link to="/#how-it-works">How It Works</Link></li>
          <li><Link to="/#pricing">Pricing</Link></li>
          <li><Link to="/auth">Login</Link></li>
        </ul>
        <button className={styles.ctaButton}>Create Surprise</button>
      </div>
    </nav>
  )
}

export default Navbar
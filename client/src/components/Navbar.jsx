import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <div className={styles.logo}>Qwisha 🎉</div>
        <ul className={styles.navLinks}>
          <li><a href="#">Features</a></li>
          <li><a href="#">How It Works</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Login</a></li>
        </ul>
        <button className={styles.ctaButton}>Create Surprise</button>
      </div>
    </nav>
  )
}

export default Navbar
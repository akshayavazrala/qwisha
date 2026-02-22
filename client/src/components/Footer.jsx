import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerLeft}>
          <div className={styles.logo}>Qwisha 🎉</div>
          <p className={styles.description}>
            Creating magical birthday moments, one QR at a time.
          </p>
        </div>
        <div className={styles.footerLinks}>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
      </div>
      <div className={`container ${styles.copyright}`}>
        © 2025 Qwisha. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
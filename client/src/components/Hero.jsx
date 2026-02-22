import React from 'react'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroContent}>
          <h1 className={styles.headline}>
            Turn Birthdays Into Magical QR Surprises
          </h1>
          <p className={styles.subheadline}>
            Create a personalized digital birthday experience. Share a QR code. Watch the surprise unfold.
          </p>
          <div className={styles.buttonGroup}>
            <button className={styles.primaryButton}>Get Started</button>
            <button className={styles.secondaryButton}>See Demo</button>
          </div>
        </div>
        <div className={styles.heroIllustration}>
          <div className={styles.illustrationBox}>
            <span>✨ Surprise Inside ✨</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
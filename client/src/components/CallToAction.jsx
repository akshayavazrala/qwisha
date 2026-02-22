import React from 'react'
import styles from './CallToAction.module.css'

const CallToAction = () => {
  return (
    <section className={styles.cta}>
      <div className="container">
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Make Someone Smile Today</h2>
          <button className={styles.ctaButton}>Start Creating</button>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
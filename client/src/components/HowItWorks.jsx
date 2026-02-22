import React from 'react'
import styles from './HowItWorks.module.css'

const steps = [
  { step: '1', title: 'Create', desc: 'Build your surprise page in minutes.' },
  { step: '2', title: 'Share', desc: 'Share the QR code with friends & family.' },
  { step: '3', title: 'Surprise', desc: 'They scan and the magic unfolds.' },
]

const HowItWorks = () => {
  return (
    <section className={styles.howItWorks}>
      <div className="container">
        <h2 className={styles.sectionTitle}>How It Works</h2>
        <div className={styles.stepsGrid}>
          {steps.map((s, i) => (
            <div key={i} className={styles.stepCard}>
              <div className={styles.stepNumber}>{s.step}</div>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
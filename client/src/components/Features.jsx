import React from 'react'
import styles from './Features.module.css'

const featuresData = [
  {
    icon: '✨',
    title: 'Create Custom Surprise Page',
    desc: 'Design a beautiful page with photos, videos, and heartfelt messages.',
  },
  {
    icon: '📲',
    title: 'Share QR Code Instantly',
    desc: 'Generate a unique QR code to print or share digitally.',
  },
  {
    icon: '🎬',
    title: 'Emotional Animated Reveal',
    desc: 'Friends scan and see animations, confetti, and surprise messages.',
  },
]

const Features = () => {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Why Qwisha?</h2>
        <div className={styles.cardGrid}>
          {featuresData.map((feat, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.icon}>{feat.icon}</div>
              <h3 className={styles.cardTitle}>{feat.title}</h3>
              <p className={styles.cardDesc}>{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
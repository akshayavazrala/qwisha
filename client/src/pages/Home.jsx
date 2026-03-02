import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import CallToAction from '../components/CallToAction'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <section id="features"><Features /></section>
      <section id="how-it-works"><HowItWorks /></section>
      <section id="pricing"><CallToAction /></section> {/* or a separate Pricing component if needed */}
      <Footer />
    </>
  )
}

export default Home
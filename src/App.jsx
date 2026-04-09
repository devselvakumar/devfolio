import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Achievements from './components/Achievements'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import TechStack from './components/TechStack'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      {/* Noise overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Achievements />
        <Portfolio />
        <Services />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

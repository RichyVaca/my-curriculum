import { About } from './components/About'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { MetricsBand } from './components/MetricsBand'
import { Navbar } from './components/Navbar'
import { PrintHeader } from './components/PrintHeader'
import { SocialProof } from './components/SocialProof'

function App() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>

      <Navbar />

      <main id="contenido" tabIndex={-1} className="focus:outline-none">
        <PrintHeader />
        <Hero />
        <MetricsBand />
        <About />
        <Experience />
        <SocialProof />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App

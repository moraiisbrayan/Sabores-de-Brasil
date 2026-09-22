import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Sabores from './components/Sabores'
import Experience from './components/Experience'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import Instagram from './components/Instagram'
import Location from './components/Location'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import MobileCTA from './components/MobileCTA'
import { useLang } from './i18n'

export default function App() {
  const { t } = useLang()
  return (
    <>
      <a href="#nosotros" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-cream focus:px-4 focus:py-2">
        {t.common.skip}
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Sabores />
        <Experience />
        <Gallery />
        <Reviews />
        <Instagram />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
      <MobileCTA />
    </>
  )
}

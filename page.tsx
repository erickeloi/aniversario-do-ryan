import Hero from './components/Hero'
import EventHighlights from './components/EventHighlights'
import VisualStory from './components/VisualStory'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Hero />
      <EventHighlights />
      <VisualStory />
      <Gallery />
      <Testimonials />
      <Footer />
    </main>
  )
}


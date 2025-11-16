import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Menu from './components/Menu'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_left,rgba(255,237,213,0.5),rgba(254,226,226,0.5)_40%,transparent_60%)]">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Menu />
        <CTA />
        <footer id="contact" className="py-12 border-t border-gray-200/70">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
              <p>© {new Date().getFullYear()} Lekker Eet. All rights reserved.</p>
              <div className="flex items-center gap-6">
                <a href="#menu" className="hover:text-gray-900">Menu</a>
                <a href="#about" className="hover:text-gray-900">About</a>
                <a href="#order" className="hover:text-gray-900">Order</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App

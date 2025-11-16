import { useState } from 'react'
import { Menu, UtensilsCrossed, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border border-white/40 shadow-lg rounded-2xl">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#" className="flex items-center gap-2" onClick={close}>
              <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-amber-500 to-red-500 grid place-items-center text-white shadow">
                <UtensilsCrossed size={18} />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-gray-900">Lekker Eet</span>
            </a>
            <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
              <a href="#menu" className="hover:text-gray-900 transition-colors">Menu</a>
              <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
              <a href="#gallery" className="hover:text-gray-900 transition-colors">Gallery</a>
              <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
            </nav>
            <div className="flex items-center gap-3">
              <a href="#order" className="hidden sm:inline-flex bg-gradient-to-r from-amber-500 to-red-500 text-white font-medium px-4 py-2 rounded-xl shadow hover:shadow-md transition-shadow">Order Now</a>
              <button
                aria-label="Toggle menu"
                className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border border-gray-200 text-gray-700 bg-white/70"
                onClick={() => setOpen(v => !v)}
              >
                {open ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>

          {/* Mobile dropdown */}
          {open && (
            <div className="md:hidden border-t border-white/50 px-4 py-3 sm:px-6 bg-white/80 backdrop-blur animate-in fade-in slide-in-from-top-2">
              <div className="flex flex-col gap-2 text-gray-800">
                <a href="#menu" onClick={close} className="rounded-xl px-3 py-2 hover:bg-gray-100">Menu</a>
                <a href="#about" onClick={close} className="rounded-xl px-3 py-2 hover:bg-gray-100">About</a>
                <a href="#gallery" onClick={close} className="rounded-xl px-3 py-2 hover:bg-gray-100">Gallery</a>
                <a href="#contact" onClick={close} className="rounded-xl px-3 py-2 hover:bg-gray-100">Contact</a>
                <a href="#order" onClick={close} className="mt-2 inline-flex justify-center rounded-xl bg-gradient-to-r from-amber-500 to-red-500 text-white font-semibold px-4 py-2 shadow">Order Now</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

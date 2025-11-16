import { Menu, UtensilsCrossed } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border border-white/40 shadow-lg rounded-2xl">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-amber-500 to-red-500 grid place-items-center text-white shadow">
                <UtensilsCrossed size={18} />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-gray-900">Lekker Eet</span>
            </a>
            <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
              <a href="#menu" className="hover:text-gray-900 transition-colors">Menu</a>
              <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
              <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
            </nav>
            <div className="flex items-center gap-3">
              <a href="#order" className="hidden sm:inline-flex bg-gradient-to-r from-amber-500 to-red-500 text-white font-medium px-4 py-2 rounded-xl shadow hover:shadow-md transition-shadow">Order Now</a>
              <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border border-gray-200 text-gray-700">
                <Menu size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

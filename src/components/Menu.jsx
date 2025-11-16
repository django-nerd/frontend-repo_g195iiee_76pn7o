import { BadgeCheck } from 'lucide-react'

const burgers = [
  {
    name: 'Smash Classic',
    price: 'R79',
    desc: 'Double smash patty, cheddar, pickles, onion, house sauce.'
  },
  {
    name: 'Big Lekker',
    price: 'R109',
    desc: 'Two patties, caramelized onions, crispy bacon, cheesy melt.'
  },
  {
    name: 'Chilli Cheez',
    price: 'R95',
    desc: 'Jalapeños, pepperjack, hot honey, chipotle mayo heat.'
  },
  {
    name: 'Green Garden',
    price: 'R89',
    desc: 'Crispy chickpea patty, avo, greens, herby yogurt.'
  }
]

export default function Menu() {
  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-white to-amber-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Our Favourites</h2>
            <p className="text-gray-600 mt-2">Crafted with love, smashed with flavor.</p>
          </div>
          <span className="hidden sm:inline-flex items-center gap-2 text-amber-700 bg-amber-100 border border-amber-200 px-3 py-1 rounded-full text-sm">
            <BadgeCheck size={16} /> Best Sellers
          </span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {burgers.map((b) => (
            <div key={b.name} className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow">
              <img src={`https://source.unsplash.com/600x400/?burger&sig=${b.name}`} alt={b.name} className="h-40 w-full object-cover" />
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">{b.name}</h3>
                  <span className="font-bold text-amber-700">{b.price}</span>
                </div>
                <p className="mt-2 text-sm text-gray-600">{b.desc}</p>
                <a href="#order" className="mt-4 inline-flex w-full justify-center rounded-xl bg-gray-900 text-white py-2 hover:bg-black">Add to Order</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { BadgeCheck } from 'lucide-react'
import { StaggerContainer, StaggerItem, Reveal } from './Reveal'
import SafeImage from './SafeImage'

const burgers = [
  {
    name: 'Smash Classic',
    price: 'R79',
    desc: 'Double smash patty, cheddar, pickles, onion, house sauce.',
    imgUrl:
      'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop'
  },
  {
    name: 'Big Lekker',
    price: 'R109',
    desc: 'Two patties, caramelized onions, crispy bacon, cheesy melt.',
    imgUrl:
      'https://images.unsplash.com/photo-1551782450-17144c3a95f7?q=80&w=1200&auto=format&fit=crop'
  },
  {
    name: 'Chilli Cheez',
    price: 'R95',
    desc: 'Jalapeños, pepperjack, hot honey, chipotle mayo heat.',
    imgUrl:
      'https://images.unsplash.com/photo-1606756790138-261d2b21cd75?q=80&w=1200&auto=format&fit=crop'
  },
  {
    name: 'Green Garden',
    price: 'R89',
    desc: 'Crispy chickpea patty, avo, greens, herby yogurt.',
    imgUrl:
      'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1200&auto=format&fit=crop'
  }
]

export default function Menu() {
  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-white to-amber-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <Reveal y={14}>
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Our Favourites</h2>
              <p className="text-gray-600 mt-2">Crafted with love, smashed with flavor.</p>
            </div>
          </Reveal>
          <Reveal y={14} delay={0.1}>
            <span className="hidden sm:inline-flex items-center gap-2 text-amber-700 bg-amber-100 border border-amber-200 px-3 py-1 rounded-full text-sm">
              <BadgeCheck size={16} /> Best Sellers
            </span>
          </Reveal>
        </div>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.06}>
          {burgers.map((b, i) => (
            <StaggerItem key={b.name} direction={i % 2 === 0 ? 'left' : 'right'} distance={26} y={0}>
              <a href="#order" className="group rounded-2xl overflow-hidden border border-gray-200 bg-white shadow focus:outline-none focus:ring-2 focus:ring-amber-500/40">
                <div className="overflow-hidden">
                  <SafeImage
                    src={b.imgUrl}
                    alt={b.name}
                    className="h-40 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    width={1200}
                    height={800}
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">{b.name}</h3>
                    <span className="font-bold text-amber-700">{b.price}</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">{b.desc}</p>
                  <span className="mt-4 inline-flex w-full justify-center rounded-xl bg-gray-900 text-white py-2 group-hover:bg-black transition-colors">Add to Order</span>
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

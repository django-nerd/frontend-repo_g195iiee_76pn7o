import { Flame, UtensilsCrossed, Star, Leaf } from 'lucide-react'
import { StaggerContainer, StaggerItem, Reveal } from './Reveal'

export default function Features() {
  const items = [
    { icon: Flame, title: 'Flame-Grilled', desc: 'Smoky, juicy, and seared to perfection on open flames.' },
    { icon: UtensilsCrossed, title: 'Signature Stacks', desc: 'From Smash Classic to Big Lekker — stacked and saucy.' },
    { icon: Star, title: 'Hand-Cut Fries', desc: 'Crispy-golden fries with house seasoning and dips.' },
    { icon: Leaf, title: 'Fresh & Local', desc: 'Locally sourced produce and daily baked buns.' },
  ]

  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal as="div" y={18} duration={0.6}>
          <h2 className="sr-only">Why people love us</h2>
        </Reveal>
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.08}>
          {items.map(({ icon: Icon, title, desc }, i) => (
            <StaggerItem key={title} direction={i % 2 === 0 ? 'left' : 'right'} distance={28} y={0} duration={0.5}>
              <div className="rounded-2xl border border-gray-200 bg-white/70 backdrop-blur p-6 shadow hover:shadow-md transition">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-tr from-amber-500 to-red-500 grid place-items-center text-white shadow mb-4">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 text-sm text-gray-600">{desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

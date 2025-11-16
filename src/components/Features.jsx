import { StaggerContainer, StaggerItem, Reveal } from './Reveal'
import SafeImage from './SafeImage'

export default function Features() {
  const items = [
    {
      title: 'Flame-Grilled',
      desc: 'Smoky, juicy, and seared to perfection on open flames.',
      imgUrl:
        'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1600&auto=format&fit=crop',
      alt: 'Burger patties flame-grilling over open fire',
    },
    {
      title: 'Signature Stacks',
      desc: 'From Smash Classic to Big Lekker — stacked and saucy.',
      imgUrl:
        'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1600&auto=format&fit=crop',
      alt: 'Tall stacked cheeseburger with sauce dripping',
    },
    {
      title: 'Hand-Cut Fries',
      desc: 'Crispy-golden fries with house seasoning and dips.',
      imgUrl:
        'https://images.unsplash.com/photo-1541599188778-cdc73298e8f8?q=80&w=1600&auto=format&fit=crop',
      alt: 'Close-up of golden crispy fries in a bowl',
    },
    {
      title: 'Fresh & Local',
      desc: 'Locally sourced produce and daily baked buns.',
      imgUrl:
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1600&auto=format&fit=crop',
      alt: 'Fresh vegetables like lettuce and tomatoes on a board',
    },
  ]

  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal as="div" y={18} duration={0.6}>
          <h2 className="sr-only">Why people love us</h2>
        </Reveal>
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.08}>
          {items.map(({ title, desc, imgUrl, alt }, i) => (
            <StaggerItem key={title} direction={i % 2 === 0 ? 'left' : 'right'} distance={28} y={0} duration={0.5}>
              <div className="rounded-2xl border border-gray-200 bg-white/70 backdrop-blur overflow-hidden shadow hover:shadow-md transition">
                <SafeImage
                  src={imgUrl}
                  alt={alt}
                  className="w-full h-auto object-contain block"
                  width={800}
                  height={400}
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{desc}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

import { StaggerContainer, StaggerItem, Reveal } from './Reveal'
import { Star } from 'lucide-react'
import SafeImage from './SafeImage'

const testimonials = [
  {
    name: 'Aisha M.',
    avatar: 'https://i.pravatar.cc/96?img=32',
    quote: 'Hands-down the juiciest smash in town. The sauce? Unreal. I\'m hooked.',
    rating: 5,
  },
  {
    name: 'Thabo K.',
    avatar: 'https://i.pravatar.cc/96?img=15',
    quote: 'Crispy fries, perfect buns, and flavours that slap. Lekker indeed!',
    rating: 5,
  },
  {
    name: 'Zoe P.',
    avatar: 'https://i.pravatar.cc/96?img=49',
    quote: 'Fast pickup and always fresh. The Big Lekker is my weekly treat.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-amber-50/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <Reveal y={14}>
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Loved by food lovers</h2>
              <p className="text-gray-600 mt-2">Real words from real regulars. Pull through and taste why.</p>
            </div>
          </Reveal>
        </div>

        <StaggerContainer className="grid md:grid-cols-3 gap-6" stagger={0.06}>
          {testimonials.map((t) => (
            <StaggerItem key={t.name} y={14} duration={0.45}>
              <div className="relative rounded-2xl border border-gray-200 bg-white/80 backdrop-blur p-6 shadow hover:shadow-md transition">
                <div className="flex items-center gap-4">
                  <SafeImage src={t.avatar} alt={t.name} className="h-12 w-12 rounded-full ring-2 ring-white" width={96} height={96} />
                  <div>
                    <p className="font-semibold text-gray-900">{t.name}</p>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star key={idx} size={16} className={idx < t.rating ? 'text-amber-500' : 'text-gray-300'} fill={idx < t.rating ? 'currentColor' : 'none'} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-gray-700">“{t.quote}”</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

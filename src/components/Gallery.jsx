import { StaggerContainer, StaggerItem, Reveal } from './Reveal'
import SafeImage from './SafeImage'

const images = [
  'https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1601050690597-9dca6c45a1ab?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1561758033-d89a9ad46330?q=80&w=1600&auto=format&fit=crop'
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-amber-50/40 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <Reveal y={14}>
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">A taste of the vibe</h2>
              <p className="text-gray-600 mt-2">Sizzles, stacks, and saucy drips — straight from our grill.</p>
            </div>
          </Reveal>
        </div>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-4" stagger={0.05}>
          {images.map((src, i) => (
            <StaggerItem key={src} direction={i % 2 === 0 ? 'up' : 'down'} distance={20} x={0} duration={0.45}>
              <div
                className={`relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow ${i % 3 === 0 ? 'md:row-span-2' : ''}`}
              >
                <div className={`relative bg-white flex items-center justify-center ${i % 3 === 0 ? 'h-80 md:h-full md:min-h-[16rem]' : 'h-44 sm:h-52 md:h-56'}`}>
                  <SafeImage
                    src={src}
                    alt="Lekker Eet gallery"
                    className="max-h-full max-w-full object-contain block"
                    width={1200}
                    height={900}
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"/>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

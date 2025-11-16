import { motion } from 'framer-motion'
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
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">A taste of the vibe</h2>
            <p className="text-gray-600 mt-2">Sizzles, stacks, and saucy drips — straight from our grill.</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20% 0px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow ${i % 3 === 0 ? 'md:row-span-2' : ''}`}
            >
              <SafeImage
                src={src}
                alt="Lekker Eet gallery"
                className="h-full w-full object-cover aspect-[4/3] md:aspect-auto"
                width={1200}
                height={900}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"/>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

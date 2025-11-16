import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Reveal } from './Reveal'
import SafeImage from './SafeImage'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  // Parallax transforms
  const yBg1 = useTransform(scrollYProgress, [0, 1], [0, -120])
  const yBg2 = useTransform(scrollYProgress, [0, 1], [0, 100])
  const yCard = useTransform(scrollYProgress, [0, 1], [0, -60])

  useEffect(() => {
    // noop to ensure hook runs in browser only
  }, [])

  return (
    <section ref={ref} className="relative overflow-hidden pt-36 pb-20">
      {/* Parallax glow blobs */}
      <motion.div style={{ y: yBg1 }} className="pointer-events-none absolute -top-40 -right-32 h-96 w-96 rounded-full bg-amber-400/30 blur-3xl -z-10" />
      <motion.div style={{ y: yBg2 }} className="pointer-events-none absolute -bottom-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-red-500/20 blur-3xl -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <Reveal y={20} duration={0.6}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
                Bite into joy at
                <span className="block bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent"> Lekker Eet</span>
              </h1>
            </Reveal>
            <Reveal y={20} delay={0.1} duration={0.7}>
              <p className="mt-6 text-lg text-gray-700 max-w-xl">
                Flame-grilled burgers, hand-cut fries, and sauces that slap. Freshly made, locally loved, and always lekker.
              </p>
            </Reveal>
            <Reveal y={20} delay={0.2} duration={0.8}>
              <div className="mt-8 flex items-center gap-4">
                <a href="#order" className="inline-flex bg-gradient-to-r from-amber-500 to-red-500 text-white font-semibold px-6 py-3 rounded-xl shadow hover:shadow-lg transition">Order Now</a>
                <a href="#menu" className="inline-flex px-6 py-3 rounded-xl border border-gray-300 text-gray-800 bg-white hover:bg-gray-50">View Menu</a>
              </div>
            </Reveal>

            <Reveal y={16} delay={0.25}>
              <div className="mt-10 flex items-center gap-6 text-sm text-gray-600">
                <div className="flex -space-x-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <SafeImage key={i} src={`https://i.pravatar.cc/64?img=${i+10}`} alt="customer" className="h-8 w-8 rounded-full ring-2 ring-white" width={64} height={64} />
                  ))}
                </div>
                <p><span className="font-semibold text-gray-900">2,500+</span> happy customers this month</p>
              </div>
            </Reveal>
          </div>

          <div className="relative">
            <motion.div
              style={{ y: yCard }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative mx-auto w-full max-w-lg"
            >
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-amber-500 to-red-500 blur-2xl opacity-30" />
              <div className="relative rounded-[2rem] bg-white/80 backdrop-blur border border-white/50 p-4 shadow-xl">
                <SafeImage src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1600&auto=format&fit=crop" alt="Burger" className="rounded-2xl" width={1200} height={900} />
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-6 py-3 rounded-xl shadow-lg text-sm">
                  Smash Classic • R79
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

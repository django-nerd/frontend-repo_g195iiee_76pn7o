export default function CTA() {
  return (
    <section id="order" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden bg-gradient-to-tr from-gray-900 via-gray-800 to-black p-1 shadow-xl">
          <div className="rounded-3xl bg-grid-white/[0.05] p-10 md:p-14">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">Order for pickup or delivery</h2>
                <p className="text-white/70 mt-3">Open daily 11:00–22:00 • 123 Tasty Street, Cape Town</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#" className="inline-flex justify-center rounded-xl bg-white text-gray-900 font-semibold px-6 py-3 hover:bg-gray-100">Order on App</a>
                <a href="#contact" className="inline-flex justify-center rounded-xl bg-transparent border border-white/30 text-white font-semibold px-6 py-3 hover:bg-white/10">Call the Store</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

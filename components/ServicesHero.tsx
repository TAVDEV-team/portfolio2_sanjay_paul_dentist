export default function ServicesHero() {
  return (
    <section className="px-4 py-6 md:py-12">
      <div className="max-w-7xl mx-auto">
        <div
          className="bg-cover bg-center flex flex-col justify-end overflow-hidden rounded-xl min-h-[320px] relative"
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2)), url('/interior1.webp')",
          }}
        >
          <div className="p-6 md:p-10">
            <span className="inline-block bg-primary/20 text-white border-b-sky-100 border border-white/30 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Expert Dental Care in MiaBazar
            </span>

            <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight max-w-2xl">
              Professional Dental Services for Your Perfect Smile
            </h2>

            <p className="text-slate-200 mt-4 max-w-lg text-sm md:text-base">
              We provide comprehensive dental treatments using the latest
              technology and care in our Dhaka clinic.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-primary text-white bg-sky-600 px-8 py-3 rounded-lg font-bold">
                Book Now
              </button>

              <button className="bg-white/10 text-white border border-white/20 px-8 py-3 rounded-lg font-bold">
                Call Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default function CoreValues() {
  return (
    <section className="py-16 px-4 bg-sky-50">

      <div className="max-w-md mx-auto">

        <h2 className="text-center text-2xl font-bold text-sky-900 mb-10">
          Why Choose Us?
        </h2>

        <div className="grid gap-8">

          <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border">
            <div className="w-14 h-14 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center mb-4">
              ⭐
            </div>
            <h3 className="text-lg font-bold text-black">Expert Care</h3>
            <p className="text-sm text-slate-600">
              Personalized treatment plans backed by 10+ years experience.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border ">
            <div className="w-14 h-14 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center mb-4">
              ⚙️
            </div>
            <h3 className="text-lg font-bold text-black">Advanced Technology</h3>
            <p className="text-sm text-slate-600">
              Modern digital X-rays and diagnostic tools.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border">
            <div className="w-14 h-14 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center mb-4">
              ❤️
            </div>
            <h3 className="text-lg font-bold text-black">Patient Comfort</h3>
            <p className="text-sm text-slate-600">
              Stress-free environment and painless procedures.
            </p>
          </div>

        </div>

      </div>

    </section>
  )
}
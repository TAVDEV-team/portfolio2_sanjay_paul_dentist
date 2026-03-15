export default function Biography() {
  return (
    <section className="py-20 px-6 bg-white">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE — JOURNEY */}
        <div>

          <div className="flex items-center gap-2 mb-4 text-sky-600 font-bold uppercase tracking-wider text-sm">
            <div className="h-1 w-8 bg-sky-600"></div>
            <span>His Journey</span>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Dedicated to Better Dental Health
          </h2>

          <div className="space-y-5 text-slate-600 leading-relaxed">

            <p>
              Dr. Sanjoy Paul has been providing trusted dental treatment
              for patients across Bangladesh for more than a decade.
            </p>

            <p>
              His mission is to provide modern dental care that is safe,
              comfortable, and affordable for every patient.
            </p>

            <p>
              Through continuous learning and modern equipment,
              he ensures that patients receive the best treatment
              for long-term oral health.
            </p>

            <p className="font-semibold text-sky-700">
              “Healthy smiles build confidence and improve lives.”
            </p>

          </div>

        </div>


        {/* RIGHT SIDE — PROFESSIONAL DETAILS */}
        <div className="bg-sky-50 p-8 rounded-2xl shadow-sm">

          <h3 className="text-xl font-bold text-slate-900 mb-6">
            Professional Details
          </h3>

          <div className="space-y-6">

            <div>
              <p className="text-sm text-gray-500">Qualification</p>
              <p className="font-semibold text-slate-800">
                BDS (Bachelor of Dental Surgery)
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Experience</p>
              <p className="font-semibold text-slate-800">
                10+ Years Clinical Experience
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Specialties</p>
              <p className="font-semibold text-slate-800">
                Root Canal • Tooth Extraction • Dental Cleaning
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Patients Treated</p>
              <p className="font-semibold text-slate-800">
                5000+ Happy Patients
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}
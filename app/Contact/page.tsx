import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function ContactPage() {
  return (
    <main>

      <Navbar />

      {/* HERO */}
      <section className="bg-sky-800 text-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact Our Dental Clinic
          </h1>

          <p className="text-blue-100 text-lg">
            Book your dental appointment or visit our chamber for professional treatment.
          </p>

        </div>
      </section>


      {/* CONTACT INFO */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">

        {/* PHONE */}
        <div className="bg-white p-8 rounded-xl shadow border text-center">

          <h2 className="text-2xl font-bold text-blue-900 mb-6">
            Appointment Phone Number
          </h2>

          <p className="text-4xl font-bold text-sky-600 mb-4">
            01715353165
          </p>

          <p className="text-gray-600">
            Call this number to book an appointment with the dentist.
          </p>

        </div>


        {/* WHATSAPP */}
        <div className="bg-green-50 p-8 rounded-xl shadow border text-center">

          <h2 className="text-2xl font-bold mb-6 text-blue-900">
            WhatsApp Consultation
          </h2>
          <p className="text-4xl font-bold text-sky-600 mb-4">
            01715353165
          </p>

          <p className="text-xl font-semibold text-gray-400 mb-4">
            Chat directly with the doctor
          </p>

          <a
            href="https://wa.me/8801715353165"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold"
          >
            Message on WhatsApp
          </a>

        </div>

      </section>


      {/* CHAMBER INFORMATION */}
      <section className="bg-gray-50 py-16">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-12 text-blue-900">
            Chamber Information
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            {/* LOCATION */}
            <div className="bg-white p-8 rounded-xl shadow border">

              <h3 className="text-xl font-bold mb-4 text-blue-900">
                Chamber Location
              </h3>

              <p className="text-gray-700 leading-relaxed">
                Sanjoy Dental Care <br />
                House 45, Road 12 <br />
                Banani, Dhaka-1213 <br />
                Bangladesh
              </p>

            </div>


            {/* DAYS */}
            <div className="bg-white p-8 rounded-xl shadow border">

              <h3 className="text-xl font-bold mb-4 text-blue-900">
                Chamber Days & Time
              </h3>

              <ul className="space-y-3 text-gray-700">

                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold">10 AM – 8 PM</span>
                </li>

                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold">10 AM – 8 PM</span>
                </li>

                <li className="flex justify-between">
                  <span>Monday</span>
                  <span className="font-semibold">10 AM – 8 PM</span>
                </li>

                <li className="flex justify-between">
                  <span>Tuesday</span>
                  <span className="font-semibold">10 AM – 8 PM</span>
                </li>

                <li className="flex justify-between">
                  <span>Wednesday</span>
                  <span className="font-semibold">10 AM – 8 PM</span>
                </li>

                <li className="flex justify-between">
                  <span>Thursday</span>
                  <span className="font-semibold">10 AM – 8 PM</span>
                </li>

                <li className="flex justify-between text-red-600">
                  <span>Friday</span>
                  <span className="font-semibold">3 PM – 8 PM</span>
                </li>

              </ul>

            </div>

          </div>

        </div>

      </section>


      {/* MAP */}
      <section className="py-16">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold mb-8 text-blue-900">
            Find Our Chamber
          </h2>

          <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">

            <iframe
              src="https://www.google.com/maps?q=banani+dhaka&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
            />

          </div>

        </div>

      </section>


      <Footer />

    </main>
  )
}
export default function ContactCTA() {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-12">
      <div className="grid md:grid-cols-2 gap-8">

        <div className="bg-sky-800 text-white p-20  rounded-xl">
          <h2 className="text-2xl font-bold mb-6">
            Contact Smile Care
          </h2>

          <div className="space-y-4">

            <div>
              <p className="font-bold">Clinic Address</p>
              <p>House #12, Road #4, Dhanmondi, Dhaka</p>
            </div>

            <div>
              <p className="font-bold">Phone Support</p>
              <p>+880 1712 345678</p>
            </div>

            <div>
              <p className="font-bold">Visiting Hours</p>
              <p>Sat - Thu: 4PM - 9PM</p>
            </div>

          </div>
        </div>

        <div className="bg-white border rounded-xl p-8 flex flex-col justify-center">
          <h3 className="text-xl font-bold mb-2 text-black">
            Book Your Visit Today
          </h3>

          <p className="text-slate-500 mb-6">
            Skip the queue and schedule your appointment online for a seamless appointment.
          </p>

          <button className="bg-sky-800 text-white py-3 rounded-lg font-bold">
            Schedule Appointment
          </button>
        </div>

      </div>
    </section>
  )
}
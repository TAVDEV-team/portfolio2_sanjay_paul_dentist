"use client";

const testimonials = [
  {
    name: "Mr. Rahman",
    role: "Dhaka Resident",
    feedback: "The best dental experience I've ever had in Dhaka. The staff is professional and the facility is spotless. My implant surgery was painless!",
  },
  {
    name: "Nadia Islam",
    role: "Marketing Executive",
    feedback: "Finally found a dentist who takes the time to explain everything. My teeth whitening results are amazing. Highly recommend SmileBright.",
  },
  {
    name: "Afzal Hossain",
    role: "Parent",
    feedback: "They are excellent with kids! My 6-year-old was actually excited for her checkup. The pediatric care here is top-notch.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-clinical-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">What Our Patients Say</h2>
          <p className="text-slate-600">The trust of our patients is our greatest achievement.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex gap-1 text-amber-400 mb-4">
                {Array(5).fill("★").map((star, idx) => <span key={idx}>{star}</span>)}
              </div>
              <p className="text-slate-600 italic mb-6">"{t.feedback}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
                <div>
                  <p className="font-bold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-400 uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
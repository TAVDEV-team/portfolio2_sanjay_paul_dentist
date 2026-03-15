import Link from "next/link";
import Services from "./Services";

const services = [
  {
    title: "Extraction",
    slug: "extraction",
    icon: "chip_extraction",
    desc: "Safe removal of damaged or infected teeth under local anesthesia.",
  },
  {
    title: "Scaling",
    slug: "scaling",
    icon: "cleaning_services",
    desc: "Professional cleaning to remove plaque and tartar from teeth surfaces.",
  },
  {
    title: "Polishing",
    slug: "polishing",
    icon: "auto_fix_high",
    desc: "Teeth polishing treatment that improves shine and removes surface stains.",
  },
  {
    title: "Removal Partial Denture",
    slug: "removal_partial_denture",
    icon: "dentistry",
    desc: "Custom removable denture used to replace one or multiple missing teeth.",
  },
  {
    title: "Filling",
    slug: "filling",
    icon: "ink_eraser",
    desc: "Composite fillings used to restore cavities and prevent tooth decay.",
  },
  {
    title: "Complete Denture",
    slug: "complete_denture",
    icon: "health_and_safety",
    desc: "Full denture replacement designed for patients missing all teeth.",
  },
  {
    title: "Root Canal Treatment",
    slug: "root_canal_treatment",
    icon: "pulse_alert",
    desc: "Procedure to treat infected tooth pulp and save the natural tooth.",
  },
  {
    title: "Crown",
    slug: "crown",
    icon: "brightness_5",
    desc: "Dental cap placed over a damaged tooth to restore strength and shape.",
  },
  {
    title: "Pulpotomy & Pulpectomy",
    slug: "pulpotomy_pulpectomy",
    icon: "child_care",
    desc: "Root treatments for infected primary teeth commonly used in children.",
  },
  {
    title: "Operculectomy",
    slug: "operculectomy",
    icon: "content_cut",
    desc: "Minor surgical procedure to remove excess gum covering a tooth.",
  },
  {
    title: "Grinding & Dressing",
    slug: "grinding_dressing",
    icon: "build_circle",
    desc: "Grinding sharp tooth edges and applying medicated dressing for relief.",
  },
  {
    title: "Midline Diastema Closure",
    slug: "midline_diastema_closure",
    icon: "align_center",
    desc: "Cosmetic treatment to close gaps between front teeth.",
  },
];
export default function ServicesGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-black">
          Our Treatment Services
        </h2>
        <h2 className="text-2xl md:text-3xl font-bold text-yellow-600">
        __________
        </h2>
        {/* <p className="text-slate-600 mt-2">
          Comprehensive oral healthcare tailored to your needs.
        </p> */}
        
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="group p-8 rounded-xl border border-slate-200 bg-white hover:border-primary/50 transition"
          >
            <div className="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center text-sky-600 mb-5">
              <span className="material-symbols-outlined bg-sky-50">
                {service.icon}
              </span>
            </div>

            <h3 className="font-bold text-lg mb-2 text-gray-800">{service.title}</h3>

            <p className="text-sm text-slate-500 leading-relaxed">
              {service.desc}
            </p>
            <Link href={`/services/${service.slug}`}>
            <p className="text-xl mt-4 text-sky-900 font-bold leading-relaxed">
              Learn More....
            </p>
          </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
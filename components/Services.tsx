"use client";

export default function Services() {
  const serviceList = [
    {
      title: "Teeth Whitening",
      description: "Brighten your smile with our professional, safe, and effective laser whitening treatments.",
      iconColor: "bg-sky-50 text-sky-600",
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: "Braces & Aligners",
      description: "Straighten your teeth with traditional braces or modern invisible aligners customized for you.",
      iconColor: "bg-emerald-50 text-emerald-600",
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: "Dental Implants",
      description: "Permanent solutions for missing teeth using high-grade biocompatible dental implants.",
      iconColor: "bg-indigo-50 text-indigo-600",
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: "General Checkups",
      description: "Preventive care including cleaning, scaling, and comprehensive oral examinations.",
      iconColor: "bg-sky-50 text-sky-600",
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 bg-slate-50" id="services">
      <div className="container mx-auto px-4 text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Comprehensive Dental Services</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          From routine checkups to complex aesthetic procedures, we provide a wide range of services to keep your smile bright and healthy.
        </p>
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {serviceList.map((service, index) => (
          <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
            <div className={`w-14 h-14 ${service.iconColor} rounded-xl flex items-center justify-center mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors`}>
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
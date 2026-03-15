import { services } from "../../lib/servicesData";

interface ServicePageProps {
  params: { slug: string };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params; // unwrap promise if needed

  const service = services.find((s) => s.slug === slug);

  if (!service) return <div className="p-10 text-xl">Service not found</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <div
        className="w-full h-[300px] bg-cover bg-center"
        style={{ backgroundImage: `url(${service.img || ""})` }}
      />
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-sky-900">{service.title}</h1>
        <p className="text-blue-600 font-medium mt-1">Professional Oral Care</p>

        <div className="mt-6 p-5 rounded-xl border bg-blue-50">
          <p className="text-sm uppercase text-gray-500 mb-2">Prices</p>
          <div className="space-y-1">
            {service.prices.map((p, idx) => (
              <p key={idx} className="text-lg font-bold text-blue-600">
                {p.name}: {typeof p.price === "number" ? `৳ ${p.price}` : p.price}
              </p>
            ))}
          </div>
        </div>

        {service.duration && (
          <div className="mt-4 p-5 rounded-xl border bg-blue-50">
            <p className="text-sm uppercase text-gray-500">Duration</p>
            <p className="text-2xl font-bold text-blue-700">{service.duration}</p>
          </div>
        )}

        <div className="mt-8">
          <h2 className="text-xl font-bold mb-3 text-sky-900">About the Service</h2>
          {service.desc1 && <p className="text-gray-600 mb-3">{service.desc1}</p>}
          {service.desc2 && <p className="text-gray-600">{service.desc2}</p>}
        </div>
      </div>
    </div>
  );
}
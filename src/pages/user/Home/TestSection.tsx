const services = [
  {
    title: "Vehicle Repair",
    description:
      "Our experts are skilled to handle any major mechanical repair. We are armed with the best of tools...",
    img: "https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d", // replace with your image
  },
  {
    title: "Vehicle Servicing",
    description:
      "Our experts are skilled to handle any major mechanical repair. We are armed with the best of tools...",
    img: "https://images.unsplash.com/photo-1589739906089-426d4a2162a4", // replace with your image
  },
  {
    title: "Collision Repair",
    description:
      "We rebuilt your vehicle to the original condition with the cutting edge technology we used in our...",
    img: "https://images.unsplash.com/photo-1605100804763-247f0b0d1b3a", // replace with your image
  },
];

const TestSection = () => {
  return (
<section className="py-12 px-6 md:px-12 bg-white">
      {/* Section Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our Services
        </h2>
        <div className="w-24 h-1 bg-red-600 mx-auto mt-2"></div>
      </div>

      {/* Services Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:-translate-y-2"
          >
            {/* Image */}
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-56 object-cover"
            />

            {/* Content */}
            <div className="p-5 border-t-4 border-blue-900">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <div className="w-16 h-0.5 bg-red-600 mb-3"></div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition">
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}





export default TestSection

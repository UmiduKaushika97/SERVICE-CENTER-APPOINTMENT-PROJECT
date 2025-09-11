import NavigationBar from '../NavigationBar/NavigationBar';

const AboutUs = () => (
    <>
    <NavigationBar/>
  <div className="bg-gray-50 text-gray-900 font-sans">
    {/* Hero Section */}
    <section className="bg-red-700 text-white py-20 px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold">About CARE POINT</h1>
      <p className="mt-4 text-xl md:text-2xl max-w-3xl mx-auto">
        Sri Lanka’s most trusted auto service Center — your one-stop station for total vehicle care.
      </p>
    </section>

    {/* History Section */}
    <section className="py-16 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold text-blue-900">Our Story</h2>
      <p className="mt-4 text-lg leading-relaxed">
        Established in 200, Care Point was built on the principle of delivering the finest total auto care solutions
        to Sri Lankan vehicle owners. Over the years, we’ve grown into the island’s most comprehensive auto service
        provider, trusted by drivers nationwide.
      </p>
    </section>

    {/* Core Services */}
    <section className="bg-white py-16 px-6">
      <h2 className="text-3xl font-semibold text-blue-900 text-center">Our Services</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          "Car Wash & Detailing",
          "Body Shop & Painting",
          "Workshop & Repairs",
          "Inspection Reports & Pre-Purchase Advice",
          "Accident Repairs",
          "Routine Maintenance"
        ].map((service, idx) => (
          <div key={idx} className="p-6 bg-gray-100 rounded-lg shadow hover:bg-gray-200 transition">
            <h3 className="text-xl font-medium">{service}</h3>
            <p className="mt-2 text-gray-700 text-sm">
              {/* Optional brief description */}
            </p>
          </div>
        ))}
      </div>
    </section>

    {/* Specialized Branches */}
    <section className="py-16 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold text-blue-900 text-center">Our Specialized Divisions</h2>
      <div className="mt-12 space-y-12">
        {/* Premier */}
        <div className="md:flex md:items-center">
          <div className="md:w-1/3">
            <h3 className="text-2xl font-semibold text-blue-800">Auto Miraj Premier</h3>
          </div>
          <div className="md:w-2/3 mt-4 md:mt-0 text-gray-700">
            Located in the heart of Colombo, Auto Miraj Premier caters to VIP vehicle servicing with premium care
            and convenience. :contentReference[oaicite:6]
            {/* {index=6} */}
          </div>
        </div>

        {/* Ramdis */}
        <div className="md:flex md:items-center">
          <div className="md:w-1/3">
            <h3 className="text-2xl font-semibold text-blue-800">Auto Miraj Ramdis</h3>
          </div>
          <div className="md:w-2/3 mt-4 md:mt-0 text-gray-700">
            Founded in 2019, Ramdis is the innovative hub of the Auto Miraj family—bringing creative automotive ideas
            to life. :contentReference[oaicite:7]
            {/* {index=7} */}
          </div>
        </div>

        {/* VROOM */}
        <div className="md:flex md:items-center">
          <div className="md:w-1/3">
            <h3 className="text-2xl font-semibold text-blue-800">Auto Miraj VROOM</h3>
          </div>
          <div className="md:w-2/3 mt-4 md:mt-0 text-gray-700">
            VROOM supplies high-quality running repair materials, imported and tailored specifically for Sri Lankan
            conditions. :contentReference[oaicite:8]
            {/* {index=8} */}
          </div>
        </div>
      </div>
    </section>

    {/* Conclusion */}
    <section className="bg-blue-900 text-white py-16 px-6 text-center">
      <h2 className="text-3xl font-semibold">Our Promise</h2>
      <p className="mt-4 text-lg max-w-3xl mx-auto">
        At Auto Miraj, we're not just servicing cars — we’re caring for your journey. Trust, quality, and innovation
        drive us forward.
      </p>
    </section>
  </div>
  </>
);

export default AboutUs;

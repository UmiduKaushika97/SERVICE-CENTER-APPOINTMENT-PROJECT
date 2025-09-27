import NavigationBar from "../NavigationBar/NavigationBar";

const ServicePackages = () => {
  return (
    <>
    <NavigationBar/>

    <div className="bg-gray-50 text-gray-800">
      {/* Header / Hero */}
      <header className="bg-red-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
                Car Vehicle Service Packages
              </h1>
              <p className="mt-4 text-lg md:text-xl opacity-90">
                We now offer 6 exclusive service packages covering all
                requirements from the entry level car up to Hybrid and even
                bespoke European brands.
              </p>
              <div className="mt-6 flex gap-3">
                <a
                  href="#packages"
                  className="inline-block bg-white text-black font-semibold px-5 py-3 rounded shadow hover:opacity-95"
                >
                  View Packages
                </a>
                <a
                  href="#contact"
                  className="inline-block border bg-black border-white/30 text-white px-5 py-3 rounded hover:bg-black"
                >
                  Book a Service
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder"
                alt="car service"
                className="rounded-lg shadow-lg w-full object-cover h-56 md:h-48"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Packages grid */}
      <main className="-mt-10">
        <section id="packages" className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Sidebar / intro card */}
            <aside className="bg-white/60 backdrop-blur-md p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold">Choose the right package</h3>
              <p className="mt-3 text-sm">
                Packages are tailored to match usage, vehicle type and brand.
                Pick economy for basic upkeep or Euro Total Plus for premium
                European servicing.
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>✔ Oil & filter change</li>
                <li>✔ Preventive maintenance</li>
                <li>✔ Wash & vacuum / valet</li>
                <li>✔ Specialized European care available</li>
              </ul>
              <a
                href="#contact"
                className="mt-6 inline-block bg-black text-white px-4 py-2 rounded"
              >
                Contact Us
              </a>
            </aside>

            {/* Packages list */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Card: Econo Plus */}
                <article className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-lg font-semibold">Econo Plus</h4>
                      <p className="text-sm text-gray-500">
                        Basic maintenance for city & economy cars
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold"></div>
                      <div className="text-xs text-gray-400"></div>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li>• Oil & filter change</li>
                    <li>• Safety inspection</li>
                    <li>• Wash & vacuum</li>
                    <li>• Basic fluid top-up</li>
                  </ul>
                  <div className="mt-4 flex gap-3">
                    {/* <button className="px-4 py-2 rounded border border-indigo-600 text-indigo-600">
                      Details
                    </button>
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded">
                      Book Now
                    </button> */}
                  </div>
                </article>

                {/* Card: Auto Service Plus */}
                <article className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-lg font-semibold">Auto Service Plus</h4>
                      <p className="text-sm text-gray-500">
                        Enhanced servicing for regular drivers
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold"></div>
                      <div className="text-xs text-gray-400"></div>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li>• Everything in Econo Plus</li>
                    <li>• Engine degrease & inspection</li>
                    <li>• Mini valet & wax</li>
                    <li>• Brake inspection</li>
                  </ul>
                  <div className="mt-4 flex gap-3">
                    {/* <button className="px-4 py-2 rounded border border-indigo-600 text-indigo-600">
                      Details
                    </button>
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded">
                      Book Now
                    </button> */}
                  </div>
                </article>

                {/* Card: Euro Total Plus */}
                <article className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-lg font-semibold">Euro Total Plus</h4>
                      <p className="text-sm text-gray-500">
                        Premium servicing for European & luxury vehicles
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold"></div>
                      <div className="text-xs text-gray-400"></div>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li>• All Auto Service Plus items</li>
                    <li>• Specialized diagnostics</li>
                    <li>• OEM parts inspection</li>
                    <li>• Full valet & hand wax</li>
                  </ul>
                  <div className="mt-4 flex gap-3">
                    {/* <button className="px-4 py-2 rounded border border-indigo-600 text-indigo-600">
                      Details
                    </button>
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded">
                      Book Now
                    </button> */}
                  </div>
                </article>

                {/* Card: Grand One */}
                <article className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-lg font-semibold">Grand One</h4>
                      <p className="text-sm text-gray-500">
                        Full service & detailing package
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold"></div>
                      <div className="text-xs text-gray-400"></div>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li>• Oil & filter change</li>
                    <li>• Full valet + machine polish</li>
                    <li>• Dent & scratch assessment</li>
                    <li>• Full mechanical inspection</li>
                  </ul>
                  <div className="mt-4 flex gap-3">
                    {/* <button className="px-4 py-2 rounded border border-indigo-600 text-indigo-600">
                      Details
                    </button>
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded">
                      Book Now
                    </button> */}
                  </div>
                </article>

                {/* Card: Total Care Plus */}
                <article className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-lg font-semibold">Total Care Plus</h4>
                      <p className="text-sm text-gray-500">
                        Comprehensive care for high-mileage vehicles
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold"></div>
                      <div className="text-xs text-gray-400"></div>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li>• All Auto Service Plus items</li>
                    <li>• Major systems check</li>
                    <li>• Battery & charging system test</li>
                    <li>• Extended warranty inspection</li>
                  </ul>
                  <div className="mt-4 flex gap-3">
                    {/* <button className="px-4 py-2 rounded border border-indigo-600 text-indigo-600">
                      Details
                    </button>
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded">
                      Book Now
                    </button> */}
                  </div>
                </article>



                {/* Card: Total Care Plus */}
                <article className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-lg font-semibold">Total Care Plus</h4>
                      <p className="text-sm text-gray-500">
                        Comprehensive care for high-mileage vehicles
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold"></div>
                      <div className="text-xs text-gray-400"></div>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li>• Hybrid system diagnostics</li>
                    <li>• Preventive maintenance</li>
                    <li>• Battery health check</li>
                    <li>• Specialized hybrid fluids</li>
                  </ul>
                  <div className="mt-4 flex gap-3">
                    {/* <button className="px-4 py-2 rounded border border-indigo-600 text-indigo-600">
                      Details
                    </button>
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded">
                      Book Now
                    </button> */}
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* CTA / Contact */}
        <section
          id="contact"
          className="max-w-6xl mx-auto px-6 mt-10 mb-24"
        >
          <div className="bg-black rounded-lg shadow p-6 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white">Ready to book your service?</h3>
              <p className="mt-2 text-sm text-white ">
                Call us or send a message and we'll schedule a convenient time
                for your vehicle.
              </p>
              <ul className="mt-3 text-sm">
                <li className="text-white">📞 0777 234 637</li>
                <li className="text-white">📍 Colombo, Sri Lanka</li>
              </ul>
            </div>
            <div>
              <a
                href="tel:0777234637"
                className="inline-block bg-red-700 text-white px-5 py-3 rounded"
              >
                Call Now
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 mt-8">
        <div className="max-w-6xl mx-auto px-6 text-sm text-gray-600 flex items-center justify-between">
          <div>© Auto Miraj — All rights reserved</div>
          <div>Designed with ♥ using Tailwind CSS</div>
        </div>
      </footer>
    </div>
    </>
  );
};

export default ServicePackages;

// ContactPage.tsx
// React + TypeScript component styled with Tailwind CSS
// - Fully responsive
// - Contact form (client-side validation + example POST to /api/contact)
// - Contact info block
// - Map placeholder (replace with Google Maps iframe or component later)

import NavigationBar from "../NavigationBar/NavigationBar";







const Contactus = () => {
  

  

  return (
    <>
    <NavigationBar/>
     <div className="w-full">
      {/* Header Section */}
      <div className="relative bg-red-600 text-white rounded-b-3xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
          alt="car interior"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative py-30 px-6 md:px-20 lg:px-32">
          <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
        </div>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col md:flex-row justify-between gap-10 px-6 md:px-20 lg:px-32 py-16">
        {/* Left Side - Info */}
        <div className="md:w-1/2 space-y-6">
          <p className="uppercase text-sm tracking-widest text-gray-500">
            Send us a message
          </p>
          <h2 className="text-3xl font-bold">
            Find <span className="text-red-600">Us</span>
          </h2>

          <div className="space-y-6">
            {/* Hotline */}
            <div className="flex items-center space-x-4">
              <div className="bg-red-100 p-4 rounded-xl">
                <i className="fa-solid fa-headset text-red-600 text-2xl"></i>
              </div>
              <div>
                <p className="text-sm font-semibold text-red-600">HOTLINE</p>
                <p className="font-medium text-gray-800">011 2 640 640</p>
              </div>
            </div>

            {/* Sales */}
            <div className="flex items-center space-x-4">
              <div className="bg-red-100 p-4 rounded-xl">
                <i className="fa-solid fa-phone text-red-600 text-2xl"></i>
              </div>
              <div>
                <p className="text-sm font-semibold text-red-600">SALES</p>
                <p className="font-medium text-gray-800">011 2 640 640</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-4">
              <div className="bg-red-100 p-4 rounded-xl">
                <i className="fa-solid fa-envelope text-red-600 text-2xl"></i>
              </div>
              <div>
                <p className="text-sm font-semibold text-red-600">EMAIL</p>
                <p className="font-medium text-gray-800">info@carepoint.lk</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        {/* <div className="md:w-1/2 bg-white rounded-2xl shadow-lg p-8 space-y-6">
          <form className="space-y-5"> */}
            {/* Name */}
            {/* <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="First"
                  className="w-1/2 border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Last"
                  className="w-1/2 border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
                />
              </div>
            </div> */}

            {/* Email */}
            {/* <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="example@mail.com"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
            </div> */}

            {/* Message */}
            {/* <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Comment or Message
              </label>
              <textarea
                rows={5}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
                placeholder="Your message here..."
              ></textarea>
            </div> */}

            {/* Button */}
            {/* <button
              type="submit"
              className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-all"
            >
              Send Message
            </button>
          </form> */}
        {/* </div> */}
      </div>
    </div>
    </>
  );
}

export default Contactus;

/*
Usage notes:
- This file is a self-contained React component (TypeScript). You can place it at src/pages/ContactPage.tsx (or inside your route in React Router / Next.js page file).
- Tailwind CSS is required. Ensure your project has Tailwind configured and the styles imported (usually in index.css).
- To add a Google Map later, replace the "Map placeholder" div with an iframe like:

  <iframe
    src={`https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE`}
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen={false}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />

  Or install a map library (react-google-maps/api, leaflet, etc.) and use a map component.

- The form posts to /api/contact as an example. Replace with your actual endpoint or use a serverless function.
*/

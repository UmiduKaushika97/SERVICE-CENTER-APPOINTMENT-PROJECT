import NavigationBar from "../NavigationBar/NavigationBar"

const Appointments = () => {
  return (
    <>
      <NavigationBar />

       {/* <div className="pt-16">
        <h1 className="text-[100px]">Responsive Navbar Example</h1>
      </div> */}

       <div className="min-h-screen flex flex-col items-center">
      {/* Header */}
      <div className="w-full bg-gray-50 h-30 flex items-center justify-center">
        <h1 className="text-3xl">
          Appointment Reservation
        </h1>
        </div>
      {/* <div className="text-center mb-8">
        <h1 className="text-3xl font-serif italic font-semibold">
          Appointment Reservation
        </h1>
        <p className="text-sm text-gray-500 mt-2">
          Home <span className="mx-2">{">"}</span> Appointment Reservation
        </p>
        
      </div> */}

      {/* Form */}
      <div className="bg-white  rounded-xl p-8 w-full max-w-6xl">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-2 mt-1">
              <input
                type="text"
                placeholder="First"
                className="w-1/2 border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="text"
                placeholder="Last"
                className="w-1/2 border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <div className="flex items-center mt-1 border rounded-md px-3 py-2">
              <span className="mr-2">🇱🇰</span>
              <input
                type="tel"
                placeholder="071 234 5678"
                className="w-full text-sm focus:outline-none"
              />
            </div>
          </div>

          {/* Vehicle Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Vehicle Type
            </label>
            <input
              type="text"
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Vehicle Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Vehicle Number
            </label>
            <input
              type="text"
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Services */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-4">
            {/* Column 1 */}
            <div>
              <h3 className="font-semibold mb-2">Select services</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <label className="flex items-center gap-2">
                  <input type="checkbox" /> Wash and Grooming
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" /> Lube Services
                </label>
              </div>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="font-semibold mb-2">Select services</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <label className="flex items-center gap-2">
                  <input type="checkbox" /> Undercarriage Degreasing
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" /> Windscreen Treatments
                </label>
              </div>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="font-semibold mb-2">Select services</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <label className="flex items-center gap-2">
                  <input type="checkbox" /> Hybrid Services
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" /> Wheel Alignment
                </label>
              </div>
            </div>

            {/* Column 4 */}
            <div>
              <h3 className="font-semibold mb-2">Select services</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <label className="flex items-center gap-2">
                  <input type="checkbox" /> Mechanical
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" /> Detailing
                </label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-end mt-6">
            <button
              type="submit"
              className="px-6 py-2 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 transition"
            >
              Reserve Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Appointments

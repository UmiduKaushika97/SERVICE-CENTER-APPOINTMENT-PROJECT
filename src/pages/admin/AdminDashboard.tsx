
// import Adduser from './Adduser'

// import { useState } from "react"
// import Sidebar from "../../components/Sidebar/Sidebar";
// import Header from "../../components/Header/Header";



const AdminDashboard = () => {
  // const [darkMode, setDarkMode] = useState(true);

  // const [isOpen, setIsOpen] = useState(true);

  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  // }

  // const toggleSiderbar = () => {
  //   setIsOpen(!isOpen);
  // }
  return (
    <>
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  {/* <!-- Card 1 --> */}
  <div className="bg-black text-white rounded-lg shadow-md p-5 flex flex-col justify-between hover:scale-105 transition-transform duration-300">
    <div className="flex items-center justify-between">
      <h2 className="text-sm text-gray-400">Total Earning</h2>
      <div className="bg-teal-500 p-3 rounded-full">
        💰
      </div>
    </div>
    <p className="text-2xl font-bold mt-3">$2200.00</p>
  </div>

  {/* <!-- Card 2 --> */}
  <div className="bg-black text-white rounded-lg shadow-md p-5 flex flex-col justify-between hover:scale-105 transition-transform duration-300">
    <div className="flex items-center justify-between">
      <h2 className="text-sm text-gray-400">Total Expenses</h2>
      <div className="bg-teal-500 p-3 rounded-full">
        💸
      </div>
    </div>
    <p className="text-2xl font-bold mt-3">$1200.00</p>
  </div>

  {/* <!-- Card 3 --> */}
  <div className="bg-black text-white rounded-lg shadow-md p-5 flex flex-col justify-between hover:scale-105 transition-transform duration-300">
    <div className="flex items-center justify-between">
      <h2 className="text-sm text-gray-400">New Users</h2>
      <div className="bg-teal-500 p-3 rounded-full">
        👤
      </div>
    </div>
    <p className="text-2xl font-bold mt-3">150</p>
  </div>

  {/* <!-- Card 4 --> */}
  <div className="bg-black text-white rounded-lg shadow-md p-5 flex flex-col justify-between hover:scale-105 transition-transform duration-300">
    <div className="flex items-center justify-between">
      <h2 className="text-sm text-gray-400">Total Sales</h2>
      <div className="bg-teal-500 p-3 rounded-full">
        🛒
      </div>
    </div>
    <p className="text-2xl font-bold mt-3">320</p>
  </div>
</div>

    </>
    
  )
}

export default AdminDashboard

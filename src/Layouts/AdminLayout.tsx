import Sidebar from "../components/Sidebar/Sidebar";
import { useState } from 'react';
import Header from '../components/Header/Header';
import { Outlet } from "react-router-dom";


const AdminLayout = () => {
  // const [darkMode, setDarkMode] = useState(true);
  //     setDarkMode(!darkMode);

  const [isOpen, setIsOpen] = useState(true);

  const toggleSiderbar = () => {
    setIsOpen(!isOpen);
  }

  return (
    
    // <div className="flex min-h-screen">
    //   {/* Sidebar */}
    //   <aside className="w-64 bg-gray-800 text-white">
    //     <div className="p-4 text-xl font-bold border-b border-gray-600">Admin Panel</div>
    //     <nav className="p-4 space-y-2">

      //     <NavLink
      //       to="/admin/dashboard"
      //       className={({ isActive }) =>
      //         `block px-4 py-2 rounded hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`
      //       }
      //     >
      //       Home
      //     </NavLink>


      //     <NavLink
      //       to="/admin/add-user"
      //       className={({ isActive }) =>
      //         `block px-4 py-2 rounded hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`
      //       }
      //     >
      //       Add User
      //     </NavLink>
      //     <NavLink
      //       to="/admin/add-product"
      //       className={({ isActive }) =>
      //         `block px-4 py-2 rounded hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`
      //       }
      //     >
      //       Add Product
      //     </NavLink>
      //   </nav>
      // </aside>

      // {/* Content */}
    //   <main className="flex-1 bg-gray-100 p-6">
    //     <Outlet />
    //   </main>
    // </div>

    // <div className='w-full flex'>
    //   This is the Admin Dashboard
    // </div>
    <>
    {/* <div>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSiderbar}/>
    </div> */}
    <div className="flex font-Montserrat bg-white"> 
    <Sidebar isOpen={isOpen} toggleSidebar={toggleSiderbar}/>

    <div className={`flex-1 bg-slate-200 ${isOpen ? "md:ml-44" : "ml-16"} 
    transition-all duration-300`}>
    <Header />

    <main className="p-4 bg-white">
      <Outlet />
    </main>
    </div>

    </div>
    
</>
    // <div>jhgkjhn</div>
  )
}

export default AdminLayout

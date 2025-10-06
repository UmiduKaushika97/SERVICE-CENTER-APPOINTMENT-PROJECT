import React from 'react'
import { LuLayoutDashboard } from 'react-icons/lu';
import UserMenuItem from './UserMenuItem';
import { RiArrowLeftWideFill, RiArrowRightWideFill } from 'react-icons/ri';
import { usermenuItems } from '../constant';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

interface SidebarProps {
  isOpen?: boolean;
  toggleSidebar?: () => void;
}

const UserSiderbar:React.FC<SidebarProps> = ({isOpen, toggleSidebar}) => {
  const auth = getAuth();
      const navigate = useNavigate();

      const handleLogout = async () => {
      
          try {
            await signOut(auth);
            localStorage.removeItem("authUser");
      
            navigate("/"); 
          } catch (error) {
            console.error("Logout failed:", error);
          }
        };

  return (
    <div>
      <div className={`fixed left-0 top-0 h-full bg-black
     text-white transition-all z-50 flex flex-col duration-300  dark:bg-black
     ${isOpen ? "w-44" : "w-16 items-center"}`}>

      <div className='flex items-center justify-center py-4'>
        <LuLayoutDashboard className={`text-2xl text-teal-700 
        transition-all ${
        isOpen ? "w-12" : "w-8"
        }`}
          />
      </div>

      <div className="mt-6 flex-1">
        {
          usermenuItems.map((item, index) => (
            <UserMenuItem 
            key={index} 
            Icon={item.icon} 
            name={item.name}
            path={item.path}
            isOpen={isOpen ?? false}
            isLogout={item.isLogout}
            onLogout={handleLogout}
            />
          ))
        }

{/* <NavLink
            to="/admin/add-user"
            className={({ isActive }) =>
              `block px-4 py-2 rounded hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/admin/add-product"
            className={({ isActive }) =>
              `block px-4 py-2 rounded hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`
            }
          >
            Add Product
          </NavLink>

          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) =>
              `block px-4 py-2 rounded hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`
            }
          >
            Dashboard
          </NavLink> */}

      </div>

      <button onClick={toggleSidebar}
      className='m-2 flex items-center justify-center 
      rounded-md bg-red-900 p-3 text-2xl font-bold
      hover:bg-red-700 duration-300'>
        {isOpen ? <RiArrowLeftWideFill/> : 
        <RiArrowRightWideFill /> }
      </button>


        {/* <Outlet /> */}
      
    </div>
    </div>
  )
}

export default UserSiderbar





// import React from 'react'
// import { LuLayoutDashboard } from "react-icons/lu"
// import MenuItem from './MenuItem'
// import { RiArrowLeftWideFill, RiArrowRightWideFill } from 'react-icons/ri'
// import { menuItems } from '../../constants'



// const Sidebar:  = () => {
//   return (
    
//   )
// }

// export default Sidebar


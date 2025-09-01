import { useState } from 'react'
import NavigationBar from '../pages/user/NavigationBar/NavigationBar';
import UserSiderbar from '../pages/user/UserSidebar/UserSiderbar';
import { Outlet } from 'react-router-dom';

const UserLayout = () => {
    const [isOpen, setIsOpen] = useState(true);
    
      const toggleSiderbar = () => {
        setIsOpen(!isOpen);
      }
  return (
    <>
<div className="flex font-Montserrat bg-white"> 
    <UserSiderbar isOpen={isOpen} toggleSidebar={toggleSiderbar}/>

    <div className={`flex-1 bg-slate-200 ${isOpen ? "md:ml-44" : "ml-16"} 
    transition-all duration-300`}>
    <NavigationBar/>

        <main className="p-4 bg-white">
      <Outlet />
    </main>
    </div>
    </div>
    </>
  )
}

export default UserLayout


// import Adduser from './Adduser'

import { useState } from "react"
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";



const AdminDashboard = () => {
  const [darkMode, setDarkMode] = useState(true);

  const [isOpen, setIsOpen] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  const toggleSiderbar = () => {
    setIsOpen(!isOpen);
  }
  return (
    // <div style={{ padding: 20 }}>
    //   <h1>Admin Dashboard</h1>
    //   <p>Welcome, Admin!</p>
    //   {/* <Adduser/> */}
    // </div>





    // <div className={`flex font-Montserrat bg-slate-700 ${darkMode && "dark"}`}> 
    // <Sidebar isOpen={isOpen} toggleSidebar={toggleSiderbar}/>
    // <div className={`flex-1 bg-slate-200 ${isOpen ? "md:ml-44" : "ml-10"} 
    // transition-all duration-300`}>
    // <Header />
    // </div>
    // </div>
    <div>
      <h1 >umidujjjjk</h1>
    </div>
    
  )
}

export default AdminDashboard

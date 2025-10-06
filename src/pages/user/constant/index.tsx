import {
  // FaHome,
  FaUser,
  FaCog,
  FaEnvelope,
  // FaChartLine,
  FaSignOutAlt,
} from "react-icons/fa";

// Menu Items
export const usermenuItems = [
  // {
  //   icon: FaHome,
  //   name: "Home",
  //   path: "/admin/dashboard"
  // },
  {
    icon: FaUser,
    name: "Profile",
    path: "/UserLayout/UserProfile"
  },
  {
    icon: FaEnvelope,
    name: "Bookings",
    path: "/UserLayout/Appointment"
  },
  {
    icon: FaCog,
    name: "My Bookings",
    path: "/UserLayout/UserBookings"
  },
  
  // {
  //   icon: FaChartLine,
  //   name: "Analytics",
  // },
  {
    icon: FaSignOutAlt,
    name: "Logout",
    isLogout: true,
  },
];

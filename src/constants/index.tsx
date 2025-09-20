import {
  FaHome,
  FaUser,
  FaCog,
  FaEnvelope,
  FaChartLine,
  FaSignOutAlt,
} from "react-icons/fa";

// Menu Items
export const menuItems = [
  {
    icon: FaHome,
    name: "Home",
    path: "/adminLayout/dashboard"
  },
  {
    icon: FaUser,
    name: "Profile",
    path: "/adminLayout/all-users"
  },
  {
    icon: FaCog,
    name: "Settings",
    path: "/adminLayout/vehicalType"
  },
  {
    icon: FaEnvelope,
    name: "Messages",
    path: "/adminLayout/today-booking"
  },
  {
    icon: FaChartLine,
    name: "Analytics",
  },
  {
    icon: FaSignOutAlt,
    name: "Logout",
    isLogout: true,
  },
];

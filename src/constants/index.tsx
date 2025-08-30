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
    path: "/admin/dashboard"
  },
  {
    icon: FaUser,
    name: "Profile",
    path: "/admin/add-user"
  },
  {
    icon: FaCog,
    name: "Settings",
  },
  {
    icon: FaEnvelope,
    name: "Messages",
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

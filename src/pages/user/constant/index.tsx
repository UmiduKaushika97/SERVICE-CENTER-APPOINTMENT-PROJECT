import {
  FaHome,
  FaUser,
  FaCog,
  FaEnvelope,
  FaChartLine,
  FaSignOutAlt,
} from "react-icons/fa";

// Menu Items
export const usermenuItems = [
  {
    icon: FaHome,
    name: "Home",
    path: "/admin/dashboard"
  },
  {
    icon: FaUser,
    name: "Profile",
    path: "/UserLayout/UserProfile"
  },
  {
    icon: FaCog,
    name: "Settings",
    path: "/UserLayout/UserBookings"
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

import { useEffect, useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import { getAuth, onAuthStateChanged, signOut, type User } from "firebase/auth";
import { FaUserCircle } from "react-icons/fa";



const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const auth = getAuth();
  const navigate = useNavigate();

// profile icon section start
  const [user, setUser] = useState<User | null>(null); // Firebase user
  const [profileDropdown, setProfileDropdown] = useState(false);

  // Listen to auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // user becomes null when logged out
    });
    return () => unsubscribe();
  }, [auth]);

  const handleLogout = async () => {
    await signOut(auth);
    setProfileDropdown(false); // close dropdown
    // profile icon disappears automatically
    navigate("/");
  };
// profile icone section end

  const handleClick = () => {
  const user = auth.currentUser;
  if (!user) {
      // user not logged in -> redirect to login page
      navigate("/UserLogin");
    } else {
      // user logged in -> redirect to booking page
      navigate("/appointment"); 
    // navigate('/Appointment')
  }
}

//user ref for Usericon drop down menu
const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setProfileDropdown(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);
  

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-2xl font-bold tracking-wider">
                CARE <span className="text-red-600">POINT</span>
                <span className="text-red-600">//</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-black font-semibold hover:text-red-600">
                HOME
               </Link>
              {/* <a
                href="/Aboutus"
                className="text-black font-semibold hover:text-red-600"
              >
                ABOUT US
              </a> */}

               <Link to="/Aboutus" className="text-black font-semibold hover:text-red-600">
                ABOUT US
               </Link>
              <a
                href="#"
                className="text-black font-semibold hover:text-red-600"
              >
                SERVICES
              </a>
              {/* <a
                href="#"
                className="text-black font-semibold hover:text-red-600"
              >
                BRANCHES
              </a> */}
              {/* <a
                href="#"
                className="text-black font-semibold hover:text-red-600"
              >
                PACKAGES
              </a> */}
              {/* <a
                href="#"
                className="text-black font-semibold hover:text-red-600"
              >
                NEWS
              </a> */}
              <a
                href="#"
                className="text-black font-semibold hover:text-red-600"
              >
                CONTACT
              </a>
            </div>

            {/* Book Now Button (desktop) */}
            <div className="hidden md:block">
              {/* <a
                href="#"
                className="bg-red-600 text-white font-bold px-4 py-2 rounded hover:bg-red-700"
              >
                BOOK NOW
              </a> */}

              <Button type="submit" className='bg-red-600 text-white font-bold px-4 py-2 rounded hover:bg-red-700' width='full'
            label='BOOK NOW'
            onClick={handleClick}
          />
</div>
{/* Profile Icon only shows if user logged in */}
          {user && (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setProfileDropdown(!profileDropdown)}
                className="text-3xl text-gray-700 hover:text-red-600 mt-2"
              >
                <FaUserCircle />
                
              </button>
              {profileDropdown && (
                <div className="absolute right-0 mt-2 w-30 bg-white border shadow-lg rounded-md py-2">
                  <button
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={() => navigate("/UserLayout")}
                  >
                    Profile
                  </button>
                  <button
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}












            

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="flex flex-col space-y-4 p-4">
              <a href="#" className="text-red-600 font-bold hover:text-red-700">
                HOME
              </a>
              <a
                href="#"
                className="text-black font-semibold hover:text-red-600"
              >
                ABOUT US
              </a>
              <a
                href="#"
                className="text-black font-semibold hover:text-red-600"
              >
                SERVICES
              </a>
              <a
                href="#"
                className="text-black font-semibold hover:text-red-600"
              >
                BRANCHES
              </a>
              <a
                href="#"
                className="text-black font-semibold hover:text-red-600"
              >
                PACKAGES
              </a>
              <a
                href="#"
                className="text-black font-semibold hover:text-red-600"
              >
                NEWS
              </a>
              <a
                href="#"
                className="text-black font-semibold hover:text-red-600"
              >
                CONTACT
              </a>
              {/* <a
                href="#"
                className="bg-red-600 text-white font-bold px-4 py-2 rounded hover:bg-red-700 text-center"
              >
                BOOK NOW
              </a> */}

<Button type="submit" className='bg-red-600 text-white font-bold px-4 py-2 rounded hover:bg-red-700' width='full'
            label='BOOK NOW'
            onClick={handleClick}
          />

              {/* <Link
            to="/ForgotPassword"
            className="text-sm font-medium text-brightColor hover:underline transition-colors"
            > Forgot Password?</Link> */}
            </div>
          </div>
        )}
      </nav>

      {/* Page content padding */}
      {/* <div className="pt-16">
        <h1 className="text-[100px]">Responsive Navbar Example</h1>
      </div> */}

      <div className="pt-16">
        {/* <UserRegistration/> */}
        {/* <UserSignIn/> */}
        {/* <UserLogin/> */}
      </div>
    </>
  );
};

export default NavigationBar;

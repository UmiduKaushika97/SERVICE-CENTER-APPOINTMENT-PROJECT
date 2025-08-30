import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Appointment')
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-2xl font-bold tracking-wider">
                AUTO <span className="text-red-600">MiRAJ</span>
                <span className="text-red-600">//</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
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

<Button type="submit" className='hover:bg-black hover:text-white' width='full'
            label='BOOK NOW'
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

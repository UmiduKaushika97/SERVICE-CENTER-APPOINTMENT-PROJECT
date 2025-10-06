import image from "../../../assets/images/service1.jpg"
import servicelist2 from "../../../assets/images/Servicelist2.jpg"
import servicelist3 from "../../../assets/images/Servicelist3.jpg"
import servicelist4 from "../../../assets/images/Servicelist4.jpg"
import servicelist5 from "../../../assets/images/Servicelist5.jpg"
import servicelist6 from "../../../assets/images/Servicelist6.jpg"
import ThreePillers from "../../../assets/images/Three-pillars.png"
import Carimg from "../../../assets/images/car-service.jpg"
import NavigationBar from "../NavigationBar/NavigationBar";
import HeroSection from "../HeroSection/HeroSection";
import LogoCarousel from "../LogoCarousel/LogoCarousel";
import TestSection from "./TestSection";

//           {/* Logo */}
//           <div className="flex items-center">
//             <span className="text-2xl font-bold tracking-wider">
//               AUTO <span className="text-red-600">MiRAJ</span>
//               <span className="text-red-600">//</span>
//             </span>
//           </div>

//           {/* Menu Items */}
//           <div className="hidden md:flex space-x-8">
//             <a href="#" className="text-red-600 font-bold hover:text-red-700">
//               HOME
//             </a>
//             <a href="#" className="text-black font-semibold hover:text-red-600">
//               ABOUT US
//             </a>
//             <a href="#" className="text-black font-semibold hover:text-red-600">
//               SERVICES
//             </a>
//             <a href="#" className="text-black font-semibold hover:text-red-600">
//               BRANCHES
//             </a>
//             <a href="#" className="text-black font-semibold hover:text-red-600">
//               PACKAGES
//             </a>
//             <a href="#" className="text-black font-semibold hover:text-red-600">
//               NEWS
//             </a>
//             <a href="#" className="text-black font-semibold hover:text-red-600">
//               CONTACT
//             </a>
//           </div>

//           {/* Book Now Button */}
//           <div>
//             <a
//               href="#"
//               className="bg-red-600 text-white font-bold px-4 py-2 rounded hover:bg-red-700"
//             >
//               BOOK NOW
//             </a>
//           </div>
//         </div>
//       </div>
//     </nav>

//     <div>
//       <h1 style={{fontSize:"800px"}}>jhgjh</h1>
//     </div>

//     </>
//   )
// }

// export default UsersHome


const UsersHome = () => {


  return (
    <>
     <NavigationBar/>
     <HeroSection/>



{/* <!-- Section 1 --> */}
{/* <div 
  className="h-screen bg-fixed bg-center bg-cover flex items-center justify-center" 
  style={{backgroundImage: `url(${image})`}}
>
  <h1 className="text-5xl font-bold text-white drop-shadow-lg">
    Car Service Center
  </h1>
</div> */}

{/* <!-- Section 2 --> */}
{/* items-center */}
<div className="py-12 px-6 md:px-12 bg-white">
      {/* Section Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
         ABOUT US
        </h2>
        <div className="w-24 h-1 bg-red-600 mx-auto mt-2"></div>
      </div>


<section className="bg-gray-50 py-12 px-6 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Over <span className="text-red-600">10 Years</span> of Excellence in
            the automotive service industry
          </h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Care Point being Sri Lanka’s largest and the best auto service
            network; has the most diverse service portfolio. Care Point is your
            one stop station for all of your maintenance, repairs, and services.
            <span className="font-semibold">
              {" "}
              Care Point Family drives to success based on three main pillars
              which are, Promptness, Respect & Oneness.
            </span>
          </p>

          {/* Images + Labels */}
          <div className="mt-6 space-y-6">
            <div className="flex items-center gap-4">
              <img
                src={ThreePillers}
                alt="Promptness"
                className="w-120"
                // className="rounded-lg shadow-md"
              />
              {/* <span className="bg-red-600 text-white font-bold px-6 py-2 rounded-md rotate-[-5deg]">
                PROMPTNESS
              </span> */}
            </div>
            {/* <div className="flex items-center gap-4">
              <img
                src="https://via.placeholder.com/200x120"
                alt="Respect"
                className="rounded-lg shadow-md"
              />
              <span className="bg-black text-white font-bold px-6 py-2 rounded-md rotate-[2deg]">
                RESPECT
              </span>
            </div> */}
            {/* <div className="flex items-center gap-4">
              <img
                src="https://via.placeholder.com/200x120"
                alt="Oneness"
                className="rounded-lg shadow-md"
              />
              <span className="bg-red-600 text-white font-bold px-6 py-2 rounded-md rotate-[5deg]">
                ONENESS
              </span>
            </div> */}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <h3 className="text-xl lg:text-2xl font-bold text-gray-900 uppercase">
            <span className="text-red-600">Our Network</span>
          </h3>
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-2">
            Over <span className="text-red-600">40 State of the Art</span>{" "}
            Facilities to serve across the country
          </h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Our island wide network covers a vast range of services empowered by
            modern and latest technologies.
          </p>

          {/* Service List */}
          <div className="mt-6 space-y-5">
            {[
              {
                logo: image,
                text: "Located in Colombo to offer your vehicle a VIP Service.",
              },
              {
                logo: servicelist2,
                text: "From car wash to body shop & workshop, all under one roof.",
              },
              {
                logo: servicelist3,
                text: "European/other Manufacturer Repairs & Maintenance.",
              },
              {
                logo: servicelist4,
                text: "Quick detailing services with latest steam wash facilities.",
              },
              {
                logo: servicelist5,
                text: "Extreme off-roading experience in Auto Miraj’s sports rigs.",
              },
              {
                logo: servicelist6,
                text: "Your trusted partner in all automotive repair materials.",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <img
                  src={item.logo}
                  alt="service logo"
                  className="w-40 h-auto object-contain"
                />
                <p className="text-gray-600 text-sm">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <button className="bg-red-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-red-700 transition">
              About us
            </button>
            <button className="bg-black text-white px-6 py-2 rounded-md font-semibold hover:bg-gray-800 transition">
              Branch Network
            </button>
          </div>
        </div>
      </div>
    </section>






      </div>





{/* <section className="h-screen bg-white flex justify-center">
  <div className="max-w-2xl text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-4">
      About Our Services
    </h2>
    <p className="text-gray-600">
      We provide high-quality car repair, maintenance, and detailing services 
      with expert mechanics ready to help you anytime.
    </p>
  </div>
</section> */}

{/* <!-- Section 3 (Parallax again) --> */}
 <section 
  className="w-100% h-110 bg-fixed bg-center bg-cover flex items-center justify-center" 
  style={{backgroundImage: `url(${Carimg})`}}
>
  <h1 className="text-5xl font-bold text-white drop-shadow-lg">
    Professional Mechanics
  </h1>
</section>
<TestSection/>


      {/* Page content padding */}
      {/* <div className="pt-16">
        <h1 className="text-[100px]">Responsive Navbar Example</h1>
      </div> */}

      
        
        <LogoCarousel/>
        
      
    </>
  );
};

export default UsersHome;


import React from 'react'
import Logo3m from "../../../assets/Logoes/3m.png"
import castrol from "../../../assets/Logoes/castrol-logo.png"
import causeway from "../../../assets/Logoes/causeway.png"
import debeer from "../../../assets/Logoes/DeBeer.png"
import gyeon from "../../../assets/Logoes/Gyeon.png"
import mobile from "../../../assets/Logoes/Mobile1.png"
import nippon from "../../../assets/Logoes/Nipponpaint.png"
import premier from "../../../assets/Logoes/Premier.png"
import saas from "../../../assets/Logoes/cropped-saas.png"
import sikkens from "../../../assets/Logoes/Sikkens.png"
import toyota from "../../../assets/Logoes/toyota-logo.png"
import wilita from "../../../assets/Logoes/Wilita.png"
import wuerth from "../../../assets/Logoes/wuerth_logo.png"
import Lukoil from "../../../assets/Logoes/Lukoil.png"

const logos: string[] = [Logo3m, castrol, causeway, debeer, gyeon, mobile , nippon, premier,saas, sikkens, toyota, wilita, wuerth, Lukoil];

const LogoCarousel = () => {
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-3">
  <div className="col-span-1 bg-red-600 p-4 flex items-center justify-center">
        <h2 className="text-white font-bold text-sm uppercase">
          Premium Autocare Service Provider
        </h2>
  </div>

  <div className="col-span-2">
    <div className="relative w-full overflow-hidden bg-gray-100 py-3">
      {/* Wrapper (double set for seamless loop) */}
      <div className="flex animate-scroll space-x-12">
        {[...logos].map((logo, index) => (
          <div key={index} className="flex-shrink-0">
            <img
              src={logo}
              alt={`Logo ${index}`}
              className="h-16 w-auto object-contain"
            />
          </div>
        ))}
    
      </div>
    </div>
  </div>
</div>

     {/* <div className="relative w-full overflow-hidden bg-gray-100 py-6">
      {/* Wrapper (double set for seamless loop) */}
      {/* <div className="flex animate-scroll space-x-12">
        {[...logos].map((logo, index) => (
          <div key={index} className="flex-shrink-0">
            <img
              src={logo}
              alt={`Logo ${index}`}
              className="h-16 w-auto object-contain"
            />
          </div>
        ))}
    
      </div> */}
    {/* </div>  */}
    </>
  )
}

export default LogoCarousel

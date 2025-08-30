import HeroImg from "../../../assets/images/Herogif.gif"

const HeroSection = () => {
  return (
    // <div className="container font-bold">
    //     <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
    //         {/* text content section */}
    //         <div className="space-y-5 flex flex-col 
    //         justify-center items-center text-center 
    //        md:text-left py-20 px-10 md:pr-24 md:py-0 md:px-0
    //        md:items-start">
    //             <h1 className='text-4xl xl:text-5xl 
    //             font-bold'>
    //                 Reliable Service, Trusted Care – Your One-Stop
    //                 <span className='text-gray-400 
    //                 underline'> Service Center</span>
    //             </h1>
    //             <p>
    //                 jfjyfvjhfvuyjhvhyj{" "}
    //             </p>
    //             <button className='bg-gray-900'>
    //                 More News
    //             </button>
    //         </div>
    //         {/* Hero Image section */}
    //         <div className='flex justify-center 
    //         items-center '>
    //             <img 
    //             src={HeroImg} 
    //             alt="" 
    //             className='w-[80%] md:w-[550px] xl:w-[600px]'/>
    //         </div>
    //     </div>
    // </div>

        // <div className='p-4 grid grid-cols-1 md:grid-cols-2'>
        // <div>
        //     <h1 className='font-bold text-blue-600 text-[18px]'>Hello</h1>
        //     <h1 className='font-extrabold text-[45px]'>
        //     professional<br/>
        //     Full stack web<br/>
        //     <span className='bg-clip-text
        //     text-transparent
        //     bg-gradient-to-r from-blue-600 to-purple-600'>Developer</span>
        //     </h1>
            
        //     <h1 className='text-orange-500 mt-4'>Welcome to my site</h1>
        // </div>

        // <div>
        //     <img 
        //     src={HeroImg} 
        //     className='w-[400px] lg:w-[500px]'/>
        // </div>
        // </div>


         <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Unlock a Passion, <br className="hidden sm:block" />
            Side Hustle, or New <br className="hidden sm:block" />
            <span className="text-gray-600 underline decoration-4 decoration-gray-400">
              Profession
            </span>
          </h1>

          <p className="mt-6 text-gray-600 max-w-md mx-auto lg:mx-0 text-sm sm:text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dignissimos eligendi mollitia.
          </p>

          <div className="mt-6">
            <button className="px-6 py-3 bg-gray-900 text-white rounded-md shadow hover:bg-gray-800 transition">
              More News
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={HeroImg} // replace with your image path
            alt="Hero Illustration"
            className="w-64 sm:w-80 lg:w-[420px] object-contain"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection

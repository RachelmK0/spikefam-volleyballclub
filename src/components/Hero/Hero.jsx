import React from 'react'
import hamep6 from "../../assets/hamep6.jpg"

const Hero = () => {
  return (
    <>
        <section 
        style={{ backgroundImage: `url(${hamep6})` }}
        className="bg-cover bg-center">
            <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
                {/*club info */}
                <div className="flex flex-col justify-center py-14 md:py-0 font-playfair">
                    <div className="text-center md:text-left space-y-6">
                        <h1 className="text-5xl text-white lg:text-6xl font-bold leading-relaxed xl:leading-normal"> Where <span className="text-yellow-500">Passion</span> Meets the <span className="text-yellow-500">Court</span>{''}</h1>
                        <p className="text-gray-600 xl:max-w-[500px]" >Our adult volleyball club is where competition meets
                         community. Join us to play, connect, and share the 
                        love of the game—no matter your skill level.</p>
                        {/*button */}
                        <div className="flex justify-center justify-center gap-8 md:justify-start">
                            <button className="bg-yellow-500 font-semibold text-white px-6 py-3 rounded-md text-lg hover:!scale-110 duration-300 flex items-center gap-2 mt-4">Register Now</button>
                            <button className="bg-white font-semibold hover:text-white hover:bg-black text-black px-6 py-3 rounded-md text-lg hover:!scale-110 duration-300 flex items-center gap-2 mt-4">Our Programs</button>
                        </div>

                    </div>
                    
                </div>
                {/*club info */}
                
                
            </div>
        </section>
    </>
  )
}

export default Hero
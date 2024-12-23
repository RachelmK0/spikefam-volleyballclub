import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IoIosArrowDown } from 'react-icons/io';
const ResponsiveMenu = ({open}) => {
  return(
  <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full h-screen z-20"
        >
          <div className="text-xl font-semibold uppercase bg-yellow-500 text-white py-10 m-6 rounded-3xl">
            <ul className="flex flex-col justify-center items-center gap-10">
              <li className="block px-3 py-2 hover:bg-gray-100 hover:text-yellow-500"> 
                <a href="/">Home</a>
              </li>
              <li className="block px-3 py-2 hover:bg-gray-100 hover:text-yellow-500">
                <a href="/">Our Team</a>
              </li>
              <li className="relative group">
                <div className="flex cursor-pointer items-center gap-2 hover:text-black rounded-full font-semibold">
                    Programs <IoIosArrowDown className="text-sm" />
                </div>
                {/* Submenu */}
                <ul
                    className="absolute top-full left-1/2 transform -translate-x-1/2 hidden text-center group-hover:block w-50 bg-yellow-500 p-1 py-4 shadow-md whitespace-nowrap rounded-3xl">
                        <li className="border-b last:border-b-0">
                            <a
                                href="/yearly-tournaments"
                                className="block px-3 py-2 hover:bg-gray-400 hover:text-white "
                            >
                                Yearly Tournamentss
                            </a>
                        </li>
                        <li className="border-b last:border-b-0">
                            <a
                                href="/team-registration"
                                className="block px-3 py-2 hover:bg-gray-400 hover:text-white "
                            >
                                Team Registration
                            </a>
                        </li>
                        <li>
                            <a
                                href="/court-reservation"
                                className="block px-3 py-2 hover:bg-gray-400 hover:text-white "
                            >
                            Court Reservation
                            </a>
                        </li>
                </ul>
                            

              </li>
              <li className="block px-3 py-2 hover:bg-gray-100 hover:text-yellow-500">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
  
}

export default ResponsiveMenu
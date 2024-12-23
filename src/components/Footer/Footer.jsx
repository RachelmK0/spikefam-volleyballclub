import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-800 px-4 md:px-14 lg:px-28 text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
            
            <div>
                <h2 className="text-lg font-bold mb-4 text-white"> QUICK LINKS</h2>
                <ul className="text-gray-300">
                    <li><a href="" className="hover:underline ">Home</a></li>
                    <li><a href="" className="hover:underline ">Our Team</a></li>
                    <li><a href="" className="hover:underline ">Programs</a></li>
                    <li><a href="" className="hover:underline ">Yearly Tournament</a></li>
                    <li><a href="" className="hover:underline ">Team Registratio</a></li>
                    <li><a href="" className="hover:underline ">Court Reservation</a></li>
                    <li><a href="" className="hover:underline ">Contact</a></li>
            
                </ul>
            </div>
            <div>
                <h2 className="text-lg font-bold mb-4 text-white"> HOURS OF OPERATION</h2>
                <p className="text-gray-300">
                Mon - Fri 4pm - Close *
                <br />
                Saturday 2pm - Close *
                <br />
                Sunday 11:30am - 5pm
                </p>
                <p className="italic text-sm mt-6">*Closing time may vary based on scheduled events.</p>
            </div>
            <div>
                <h2 className="text-lg font-bold mb-4 text-white"> CONTACT US</h2>
                <p className="text-gray-300">
                    201 Spikeball Drive
                    <br/>
                    Spike Valley Arena
                    <br/>
                    Ottawa, ON
                    <br/>
                    XXX XXX
                </p>
                <div className='mt-4 text-gray-300'>
                    Phone: 819.XXX.XXXX
                </div>
                <h3 className="text-lg font-semibold text-gray-300">Email:</h3>
                <p className="text-blue-600 hover:underline">
                    <a href="mailto:info@spikefamvclubclub.com">info@spikefamvclubclub.com</a>
                </p>
                
            </div>
                <h2 className="text-lg font-bold mb-3 text-white">FOLLOW US</h2>

                <ul className="flex space-x-4">
                    <li> <FaFacebookF className="text-blue-500"/><a href="" className="hover:underline ">Facebook</a></li>
                    <li><FaTwitter className="text-sky-500"/><a href="" className="hover:underline ">Twitter</a></li>
                    <li><FaInstagram className="text-orange-500"/><a href="" className="hover:underline ">Instagram</a></li>
                </ul>
            <div>

            </div>
        </div>

        <div className="border-t border-gray-600 p-4 text-gray-300 text-center mt-4">  © 2024 SpikeFam Volleyball Club. Building Community Through Volleyball.
        </div>
        
    </footer>
  )
}

export default Footer
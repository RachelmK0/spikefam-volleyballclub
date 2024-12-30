import React from 'react';
import slogo from '../../assets/slogo.png';
import { MdMenu } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io';
import ResponsiveMenu from './ResponsiveMenu';

const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <nav>
                <div className="container flex justify-between items-center py-2">
                    {/* Logo section */}
                    <div className="items-center">
                        <img src={slogo} alt="Logo" style={{ height: '120px', width: 'auto' }} />
                    </div>

                    {/* Menu section */}
                    <div className="hidden md:block font-playfair text-lg">
                        <ul className="flex items-center gap-6 text-gray-600">
                            {/* Home Link */}
                            <li>
                                <a href="/" className="inline-block py-1 px-3 hover:text-yellow-500 rounded-full font-semibold">
                                    Home
                                </a>
                            </li>
                            {/* Our Team Link */}
                            <li>
                                <a href="/team" className="inline-block py-1 px-3 hover:text-yellow-500 rounded-full font-semibold">
                                    Our Team
                                </a>
                            </li>
                            {/* Programs Link with Submenu */}
                            <li className="relative group">
                                <div className="flex cursor-pointer items-center gap-2 hover:text-yellow-500 rounded-full font-semibold">
                                    Programs <IoIosArrowDown className="text-sm" />
                                </div>

                                {/* Submenu */}
                                <ul
                                    className="absolute top-full left-1/2 transform -translate-x-1/2 hidden text-center group-hover:block w-50 bg-white p-1 shadow-md whitespace-nowrap"
                                >
                                    <li className="border-b last:border-b-0">
                                        <a
                                            href="/yearly-tournaments"
                                            className="block px-3 py-2 hover:bg-gray-100 hover:text-yellow-500 "
                                        >
                                            Yearly Tournaments
                                        </a>
                                    </li>
                                    <li className="border-b last:border-b-0">
                                        <a
                                            href="/team-registration"
                                            className="block px-3 py-2 hover:bg-gray-100 hover:text-yellow-500 "
                                        >
                                            Team Registration
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/court-reservation"
                                            className="block px-3 py-2 hover:bg-gray-100 hover:text-yellow-500 "
                                        >
                                            Court Reservation
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            {/* Contact Link */}
                            <li>
                                <a
                                    href="/contact"
                                    className="inline-block py-1 px-3 hover:text-yellow-500 rounded-full font-semibold"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Register Now Button */}
                    <div>
                        <button className="hover:bg-yellow-500 text-yellow-500 font-semibold hover:text-white rounded-md border-2 border-yellow-500 px-6 py-2 duration-200 font-playfair">
                            REGISTER NOW
                        </button>
                    </div>
                    

                    {/* Mobile Hamburger Menu */}
                    <div className="md:hidden" onClick={() => setOpen(!open)}>
                        <MdMenu className="text-3xl" />
                    </div>
                </div>
            </nav>
            {/* Sidebar */}
            <ResponsiveMenu open={open}/>
        </>
    );
};

export default Navbar;

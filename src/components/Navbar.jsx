import { useLocation } from "react-router-dom";
import './NavLink.css'
import { FaBars } from "react-icons/fa6";

import { Link, NavLink } from "react-router-dom";
import './NavHome.css'
import { useContext, useEffect, useState } from "react";
import { getStoredCartList, getStoredWishList } from './utility/addToDb';
import NavItems from "./NavItems";

const Navbar = () => {
    const location = useLocation();

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/statistics">Statistics</NavLink></li>
        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
    </>

    return (
        <>
            {
                location.pathname==="/"?
                (
                <div className="bg-[#9538E2] lg:mx-10 lg:mt-10 lg:rounded-ss-xl lg:rounded-se-xl">
                    <div className="max-w-screen-2xl mx-auto flex justify-between items-center px-5 py-5 lg:py-8 text-white">
                        
                        <div className="block lg:hidden mr-2">
                            <ul className="flex items-center gap-10 text-base">
                                <FaBars className="text-3xl"/>
                            </ul>
                        </div>

                        <Link to='/'><h1 className="text-xl lg:text-2xl text-center lg:text-left font-bold">Gadget Heaven</h1></Link>
                        <div className=" hidden lg:block">
                            <ul className="flex items-center gap-10 text-base">
                                {links}
                            </ul>
                        </div>
                        <NavItems></NavItems>
                    </div>
                </div>):
                (
                <div className="bg-white">
                    <div className="max-w-screen-2xl mx-auto flex justify-between items-center py-5 lg:py-8 px-5 lg:px-0">
                    
                        <div className="block lg:hidden mr-2">
                            <ul className="flex items-center gap-10 text-base">
                                <FaBars className="text-3xl"/>
                            </ul>
                        </div>

                        <Link to='/'><h1 className="text-xl lg:text-2xl font-bold">Gadget Heaven</h1></Link>
                        <div className="hidden lg:block">
                            <ul className="flex items-center gap-10 text-base">
                                {links}
                            </ul>
                        </div>
                        <NavItems></NavItems>
                    </div>
                </div>
                )
            }
        </>
    );
};

export default Navbar;
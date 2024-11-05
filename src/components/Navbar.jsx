import { useLocation } from "react-router-dom";
import './NavLink.css'

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
                <div className="bg-[#9538E2] mx-10 mt-10 rounded-ss-xl rounded-se-xl">
                    <div className="max-w-screen-2xl mx-auto flex justify-between items-center py-8 text-white">
                        <Link to='/'><h1 className="text-2xl font-bold">Gadget Heaven</h1></Link>
                        <div>
                            <ul className="flex items-center gap-10 text-base">
                                {links}
                            </ul>
                        </div>
                        <NavItems></NavItems>
                    </div>
                </div>):
                (
                <div className="bg-white">
                    <div className="max-w-screen-2xl mx-auto flex justify-between items-center py-8">
                        <Link to='/'><h1 className="text-2xl font-bold">Gadget Heaven</h1></Link>
                        <div>
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
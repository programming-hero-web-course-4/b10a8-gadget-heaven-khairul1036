import { LuShoppingCart } from "react-icons/lu";
import { IoIosHeartEmpty } from "react-icons/io";
import { NavLink } from "react-router-dom";
import './NavLink.css'
import { useContext, useEffect, useState } from "react";
import { getStoredCartList } from './utility/addToDb';

const Navbar = ({cartCount=0}) => {
    
console.log(cartCount);

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/statistics">Statistics</NavLink></li>
        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
    </>

    // const [storageAddtoCartLength, setStorageAddtoCartLength] = useState(0);

    // useEffect(()=>{
    //     const storedCartList = getStoredCartList();
    //     setStorageAddtoCartLength(storedCartList.length);
    // },[])


    return (
        <>
        <div className="bg-white">
            <div className="max-w-screen-2xl mx-auto flex justify-between items-center py-8">
                <h1 className="text-2xl font-bold">Gadget Heaven</h1>
                <div>
                    <ul className="flex items-center gap-10 text-base">
                        {links}
                    </ul>
                </div>
                <div className="flex items-center gap-5">
                    <div className="border p-2 rounded-full text-xl"><LuShoppingCart /> {cartCount}</div>
                    <div className="border p-2 rounded-full text-xl"><IoIosHeartEmpty /></div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Navbar;
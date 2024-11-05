import React from 'react';
import { LuShoppingCart } from "react-icons/lu";
import { IoIosHeartEmpty } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import './NavLink.css'
import { useContext, useEffect, useState } from "react";
import { getStoredCartList, getStoredWishList } from './utility/addToDb';

const NavItems = () => {

    const [storageAddtoCartLength, setStorageAddtoCartLength] = useState(0);

    useEffect(()=>{
        const storedCartList = getStoredCartList();
        setStorageAddtoCartLength(storedCartList.length);
    },[])

    const [wishLength, setWishLength] = useState(0);

    useEffect(()=>{
        const wishLength = getStoredWishList();
        setWishLength(wishLength.length);
    },[])
    return (
        <>
        <div className="flex items-center gap-5">
            <div className="">
                <div className="border p-2 rounded-full text-xl"><LuShoppingCart /></div>
                <span className="text-black bg-white font-semibold relative bottom-12 left-10 px-[2px] rounded-full">{storageAddtoCartLength}</span>
            </div>
            <div className="">
                <div className="border p-2 rounded-full text-xl"><IoIosHeartEmpty /></div>
                <span className="text-black bg-white font-semibold relative bottom-12 left-10 px-[2px] rounded-full">{wishLength}</span>
            </div>
        </div>
        </>
    );
};

export default NavItems;
import React, { useEffect, useState } from 'react';
import CartList from './CartList';
import WishList from './WishList';
import useDocumentTitle from './Hooks/Hook';

const Dashboard = () => {
    useDocumentTitle("Dashboard | Gadget Heaven");

    const [toggleBtn,setToggleBtn] = useState(true);
    
    return (
        <>
        <div className="bg-[#9538E2] text-center py-16">
            <div className="w-2/3 mx-auto text-white space-y-5">
                <h1 className="text-5xl font-bold">Dashboard</h1>
                <p className="px-60">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className='flex items-center justify-center gap-5'>
                    <button id='cartBtn' onClick={()=> setToggleBtn(true)} className={`btn rounded-full px-10 ${toggleBtn===true?'bg-white text-[#9538E2]':'bg-transparent text-white'}`}>Cart</button>
                    <button id='wishBtn' onClick={()=> setToggleBtn(false)} className={`btn rounded-full px-10 ${toggleBtn===false?'bg-white text-[#9538E2]':'bg-transparent text-white'}`}>Wishlist</button>
                </div>
            </div>
        </div>
        {
            toggleBtn?(<CartList></CartList>):(<WishList></WishList>)
        }
        </>
    );
};

export default Dashboard;
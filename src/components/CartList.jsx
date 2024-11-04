import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredCartList } from './utility/addToDb';
import { FaSort } from "react-icons/fa";
import SingleCart from './SingleCart';


const CartList = () => {
    const products = useLoaderData();
    const [cartItems, setCartItems] = useState([]);

    useEffect(()=>{
        const storedCartList = getStoredCartList();
        const cartList = products.filter(product => storedCartList.includes(product.product_id))
        setCartItems(cartList);
    },[])

    // calculate total price 
    const totalPrice = cartItems.reduce((sum, cartItems) => sum + cartItems.price, 0);
    
    // Sort by price descending
    const sortByPrice = () => {
        const sortedProducts = [...cartItems].sort((a, b) => b.price - a.price);
        setCartItems(sortedProducts);
    };

    return (
        <>
        <div className='max-w-screen-2xl mx-auto flex justify-between items-center py-10'>
            <h1 className='text-2xl font-bold'>Cart</h1>
            <div className='flex justify-between items-center gap-8'>
                <h1 className='text-2xl font-bold'>Total cost: {totalPrice.toFixed(2)}</h1>
                <div className='flex justify-between items-center border border-[#9538E2] text-[#9538E2] px-5 py-2 rounded-full'>
                    <button onClick={sortByPrice}>Sort by Price</button>
                    <div><FaSort /></div>
                </div>
                <button className='bg-[#9538E2] text-white px-5 py-2 rounded-full'>Purchase</button>
            </div>
        </div>
        <div className='max-w-screen-2xl mx-auto '>
            {
                cartItems.map(cartItem=> <SingleCart key={cartItem.product_id} cartItem={cartItem}></SingleCart>)
            }
        </div>
        </>
    );
};

export default CartList;
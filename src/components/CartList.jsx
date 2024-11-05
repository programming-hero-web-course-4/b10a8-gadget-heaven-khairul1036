import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useLocation } from 'react-router-dom';
import { clearCart, getStoredCartList, updateCartList } from './utility/addToDb';
import { FaSort } from "react-icons/fa";
import SingleCart from './SingleCart';
import Empty from './Empty';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcOk } from "react-icons/fc";


const CartList = () => {
    const [products, setProducts] = useState([]);

    const [cartItems, setCartItems] = useState([]);

    useEffect(()=>{
        fetch('../../products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);

    useEffect(()=>{
        const storedCartList = getStoredCartList();
        const cartList = products.filter(product => storedCartList.includes(product.product_id))
        setCartItems(cartList);
    },[products])

    // calculate total price 
    const totalPrice = cartItems.reduce((sum, cartItems) => sum + cartItems.price, 0);
    
    // Sort by price descending
    const sortByPrice = () => {
        const sortedProducts = [...cartItems].sort((a, b) => b.price - a.price);
        setCartItems(sortedProducts);
    };

    const handleDeleteCartListItem = (product_id) =>{
        toast.warning('Cart item Deleted')
        const storedCartList = getStoredCartList();
        const updatedCartList = storedCartList.filter(id => id !== product_id);
        updateCartList(updatedCartList)
        const remainingCartItems = cartItems.filter(product => product.product_id !== product_id);
        setCartItems(remainingCartItems);
    }

    const handleClearData = () =>{
        clearCart();
    }

    return (
        <>
        <div className='max-w-screen-2xl mx-auto lg:flex justify-between items-center py-10'>
            <h1 className='text-2xl text-center font-bold lg:text-left'>Cart</h1>
            <div className='lg:flex justify-between items-center gap-8'>
                <h1 className='text-base text-center lg:text-left lg:text-2xl font-bold py-3 lg:py-0'>Total cost: {totalPrice.toFixed(2)}</h1>

                <div className='flex items-center gap-5 justify-center'>
                    <button onClick={sortByPrice} className='flex justify-between items-center border border-[#9538E2] text-[#9538E2] px-5 py-2 rounded-full'>Sort by Price <span><FaSort /></span></button>

                    <button onClick={()=> {
                        handleClearData();
                        document.getElementById('my_modal_1').showModal();
                    }}
                    className='bg-[#9538E2] text-white px-5 py-2 rounded-full' disabled={totalPrice === 0}>Purchase</button>
                </div>

                <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-7xl flex justify-center"><FcOk /></h3>
                    <h3 className="font-bold text-3xl text-center border-b border-gray-300 py-5 mb-5">Payment Successfully</h3>
                    <p className="text-center">Thanks for purchasing.</p>
                    <p className="text-center">Total: {totalPrice.toFixed(2)}</p>
                    <div className="modal-action">
                    <form method="dialog">
                        <Link to='/'><button className="btn">Close</button></Link>
                    </form>
                    </div>
                </div>
                </dialog>
            </div>
        </div>
        <div className='max-w-screen-2xl mx-auto '>
            {
                cartItems.length===0?(<Empty></Empty>):(cartItems.map(cartItem=> <SingleCart key={cartItem.product_id} cartItem={cartItem} handleDeleteCartListItem={handleDeleteCartListItem}></SingleCart>))
            }
        </div>

        <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
        </>
    );
};

export default CartList;
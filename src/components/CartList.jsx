import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { clearCart, getStoredCartList, updateCartList } from './utility/addToDb';
import { FaSort } from "react-icons/fa";
import SingleCart from './SingleCart';
import Empty from './Empty';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcOk } from "react-icons/fc";


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
        <div className='max-w-screen-2xl mx-auto flex justify-between items-center py-10'>
            <h1 className='text-2xl font-bold'>Cart</h1>
            <div className='flex justify-between items-center gap-8'>
                <h1 className='text-2xl font-bold'>Total cost: {totalPrice.toFixed(2)}</h1>
                <div className='flex justify-between items-center border border-[#9538E2] text-[#9538E2] px-5 py-2 rounded-full'>
                    <button onClick={sortByPrice}>Sort by Price</button>
                    <div><FaSort /></div>
                </div>
                <button onClick={()=> {
                    handleClearData();
                    document.getElementById('my_modal_1').showModal();
                }}
                className='bg-[#9538E2] text-white px-5 py-2 rounded-full hover:bg-transparent hover:text-[#9538E2] hover:border hover:border-[#9538E2]'>Purchase</button>

                <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-7xl flex justify-center"><FcOk /></h3>
                    <h3 className="font-bold text-3xl text-center border-b border-gray-300 py-5 mb-5">Payment Successfully</h3>
                    <p className="text-center">Thanks for purchasing.</p>
                    <p className="text-center">Total: {totalPrice.toFixed(2)}</p>
                    <div className="modal-action">
                    <form method="dialog">
                        <button className="btn">Close</button>
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
        autoClose={5000}
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
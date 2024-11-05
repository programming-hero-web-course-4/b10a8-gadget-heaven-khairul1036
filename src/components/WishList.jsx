import React, { useEffect, useState } from 'react';
import { addToStoredWishList, getStoredWishList, updateWishList } from './utility/addToDb';
import { useLoaderData } from 'react-router-dom';
import SingleWishList from './SingleWishList';
import Empty from './Empty';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WishList = () => {
    const [products, setProducts] = useState([]);
    const [wishListItems, setWishListItems] = useState([]);

    useEffect(()=>{
        fetch('../../products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);

    useEffect(()=>{
        const storedWishList = getStoredWishList();
        const wishList = products.filter(product => storedWishList.includes(product.product_id))
        setWishListItems(wishList);
    },[products])

    const handleDeleteWishListItem = (product_id) =>{
        toast.warning('Wish Item Deleted')
        const storedWishList = getStoredWishList();
        const updatedWishList = storedWishList.filter(id => id !== product_id);
        updateWishList(updatedWishList)
        const remainingWishItems = wishListItems.filter(product => product.product_id !== product_id);
        setWishListItems(remainingWishItems);
    }

    return (
        <>
        <div className='max-w-screen-2xl mx-auto flex justify-between items-center py-10'>
            <h1 className='px-5 lg:px-0 text-2xl font-bold'>WishList</h1>
        </div>
        <div className='max-w-screen-2xl mx-auto '>
            {
                wishListItems.length===0?(<Empty></Empty>):(wishListItems.map(wishItem=> <SingleWishList key={wishItem.product_id} wishItem={wishItem} handleDeleteWishListItem={handleDeleteWishListItem}></SingleWishList>))
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

export default WishList;
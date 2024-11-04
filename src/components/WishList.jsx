import React, { useEffect, useState } from 'react';
import { addToStoredWishList, getStoredWishList, updateWishList } from './utility/addToDb';
import { useLoaderData } from 'react-router-dom';
import SingleWishList from './SingleWishList';

const WishList = () => {
    const products = useLoaderData();
    const [wishListItems, setWishListItems] = useState([]);

    useEffect(()=>{
        const storedWishList = getStoredWishList();
        const wishList = products.filter(product => storedWishList.includes(product.product_id))
        setWishListItems(wishList);
    },[])

    const handleDeleteWishListItem = (product_id) =>{
        const storedWishList = getStoredWishList();
        const updatedWishList = storedWishList.filter(id => id !== product_id);
        updateWishList(updatedWishList)
        const remainingWishItems = wishListItems.filter(product => product.product_id !== product_id);
        setWishListItems(remainingWishItems);
    }

    return (
        <>
        <div className='max-w-screen-2xl mx-auto flex justify-between items-center py-10'>
            <h1 className='text-2xl font-bold'>WishList</h1>
        </div>
        <div className='max-w-screen-2xl mx-auto '>
            {
                wishListItems.map(wishItem=> <SingleWishList key={wishItem.product_id} wishItem={wishItem} handleDeleteWishListItem={handleDeleteWishListItem}></SingleWishList>)
            }
        </div>
        </>
    );
};

export default WishList;
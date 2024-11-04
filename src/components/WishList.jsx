import React, { useEffect, useState } from 'react';
import { getStoredWishList } from './utility/addToDb';
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

    return (
        <>
        <div className='max-w-screen-2xl mx-auto flex justify-between items-center py-10'>
            <h1 className='text-2xl font-bold'>WishList</h1>
        </div>
        <div className='max-w-screen-2xl mx-auto '>
            {
                wishListItems.map(wishItem=> <SingleWishList key={wishItem.product_id} wishItem={wishItem}></SingleWishList>)
            }
        </div>
        </>
    );
};

export default WishList;
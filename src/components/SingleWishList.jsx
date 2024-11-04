import React from 'react';
import { RxCross1 } from "react-icons/rx";

const SingleWishList = ({wishItem}) => {
    const {product_image,product_title,description,price} = wishItem;
    return (
        <>
        <div className='bg-white flex justify-between items-center gap-5 rounded-xl p-5 mb-8'>
            <div className='flex items-center gap-5'>
                <div>
                    <img className='w-52' src={product_image} alt="image" />
                </div>
                <div className='space-y-3'>
                    <h1 className='text-2xl font-bold'>{product_title}</h1>
                    <p className='text-gray-600'>{description}</p>
                    <p className='text-lg font-bold'>Price: $ {price}</p>
                </div>
            </div>
            <div className='text-red-600 text-3xl border border-red-600 p-2 rounded-full'><RxCross1 /></div>
        </div>
        </>
    );
};

export default SingleWishList;
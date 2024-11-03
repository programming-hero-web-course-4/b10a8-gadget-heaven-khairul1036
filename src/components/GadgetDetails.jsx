import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { LuShoppingCart } from "react-icons/lu";
import { IoIosHeartEmpty } from "react-icons/io";
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";

const GadgetDetails = () => {
    const {product_id} = useParams();

    const data = useLoaderData();
    
    const products = data.find(product => product.product_id === product_id);

    const {product_title,price,product_image,availability,description,specification,rating} = products;

    return (
        <>
        <div className="bg-[#9538E2] text-center pt-16 pb-72">
            <div className="w-2/3 mx-auto text-white space-y-5">
                <h1 className="text-5xl font-bold">Product Details</h1>
                <p className="px-60">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
        </div>
        <div className="max-w-screen-2xl mx-auto flex gap-20 rounded-xl border-2 border-white bg-white p-5 relative bottom-52">
            <div className='w-1/3'>
                <img src={product_image} alt="image" />
            </div>
            <div className='space-y-5'>
                <h1 className='text-2xl font-bold'>{product_title}</h1>
                <p className="text-gray-600 font-bold pb-5">Price: {price}k</p>
                {
                    availability?(<small className='text-green-600 bg-green-300 bg-opacity-30 px-2 py-1 rounded-full border border-green-500'>In Stock</small>):(<small className='text-red-600 bg-red-300 bg-opacity-30 px-2 py-1 rounded-full border border-red-500'>Stock Out</small>)
                }
                <p className='text-gray-500'>{description}</p>
                <p className='font-bold'>Specification:</p>
                <ol className='text-gray-500 list-inside list-decimal'>
                    {
                        specification.map((details,idx) => <li key={idx}>{details}</li>)
                    }
                </ol>
                <p className='font-bold'>Rating:
                <div className='flex items-center gap-5'>
                    <ReactStars
                            count={5}
                            size={24}
                            activeColor="#ffd700"
                            value={rating}
                    /> 
                    <span className='bg-gray-200 rounded-full px-3 py-1'>{rating}</span>
                </div>
                </p>
                
                <div className='flex items-center gap-5'>
                    <button className='bg-[#9538E2] text-white px-5 py-2 rounded-xl flex items-center justify-between gap-2'>Add To Card <span><LuShoppingCart /></span></button>
                    <button className="border p-2 rounded-full text-xl"><IoIosHeartEmpty /></button>
                </div>
            </div>
        </div>
        </>
    );
};

export default GadgetDetails;
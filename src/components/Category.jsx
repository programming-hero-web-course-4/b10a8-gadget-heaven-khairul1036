import React from 'react';
import './NavLink.css'
import { NavLink } from 'react-router-dom';

const Category = ({categories,handleCategory}) => {
    const {name,category} = categories;

    return (
        <>
        <div onClick={()=>handleCategory(category)} className={`bg-gray-200 my-6 px-5 py-3 rounded-full cursor-pointer hover:bg-[#9538E2] text-gray-600 hover:text-white`}>
            <button>{name}</button>
        </div>
        </>
    );
};

export default Category;
import { useEffect, useState } from "react";
import Product from "./Product";
import Category from "./Category";
import Empty from "./Empty";


const Products = () => {

    const productsCategory = [
        {
            id: 1,
            name: "All Products",
            category: "AllProducts",
        },
        {
          id: 2,
          name: "Smartphones",
          category: "Smartphones",
        },
        {
          id: 3,
          name: "Laptops",
          category: "Laptops",
        },
        {
          id: 4,
          name: "Smartwatches",
          category: "Smartwatches",
        },
        {
          id: 5,
          name: "Accessories",
          category: "Accessories",
        },
        {
          id: 6,
          name: "Power Banks",
          category: "power-banks",
        },
        {
          id: 7,
          name: "Tablets",
          category: "tablets",
        },
      ];
      

    const [products, setProducts] = useState([]);

    const [currProducts, setCurrProducts] = useState([]);
    
    useEffect(()=>{
        setCurrProducts(products)
    },[products]);

    useEffect(()=>{
        fetch('./products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);

    const [activeCategory, setActiveCategory] = useState("AllProducts");

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        if(category==='AllProducts'){
            setCurrProducts(products);
        }
        else{
            const categoryItems = products.filter(product=>product.category===category);
            setCurrProducts(categoryItems);
        }
        // setCurrProducts(newFilteredProducts);
    };

    return (
        <>
        <div className="max-w-screen-2xl mx-auto pb-20">
            <h1 className="font-bold text-3xl text-center pb-10">Explore Cutting-Edge Gadgets</h1>
            <div className="flex gap-10">
                <div className="w-2/12">
                    <div className="bg-white rounded-xl p-5">
                    {productsCategory.map((category) => (
                            <div onClick={() => handleCategoryClick(category.category)} 
                            className={`my-6 px-5 py-3 rounded-full cursor-pointer hover:bg-[#9538E2] text-gray-600 hover:text-white ${activeCategory === category.category ? ' bg-[#9538E2] text-white' : ' bg-gray-200'}`}>
                                <button key={category.id}>{category.name}</button>
                            </div>
                    ))}
                    </div>
                </div>
                <div className="w-10/12 grid grid-cols-3 gap-10">
                {
                    currProducts.length===0?(<Empty></Empty>):(currProducts.map(product=> <Product key={product.product_id} product={product}></Product>))
                }
                </div>
            </div>
        </div>
        </>
    );
};

export default Products;
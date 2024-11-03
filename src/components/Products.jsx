import { useEffect, useState } from "react";
import Product from "./Product";


const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('./products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);

    return (
        <>
        <div className="max-w-screen-2xl mx-auto pb-20">
            <h1 className="font-bold text-3xl text-center pb-10">Explore Cutting-Edge Gadgets</h1>
            <div className="flex gap-10">
                <div className="w-2/12">
                    <div className="bg-white rounded-xl p-5">h</div>
                </div>
                <div className="w-10/12 grid grid-cols-3 gap-10">
                {
                    products.map(product=> <Product key={product.product_id} product={product}></Product>)
                }
                </div>
            </div>
        </div>
        </>
    );
};

export default Products;
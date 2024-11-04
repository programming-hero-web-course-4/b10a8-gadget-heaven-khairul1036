import { Link } from "react-router-dom";

const Product = ({product}) => {
    const {product_id,product_image,product_title,price}=product;

    return (
        <div className="p-5 bg-white rounded-xl space-y-2">
            <img className="rounded-xl" src={product_image} alt="" />
            <h1 className="font-bold text-xl">{product_title}</h1>
            <p className="text-gray-600">Price: {price}k</p>
            <Link to={`/product-details/${product_id}`}><button className="border border-[#9538E2] text-[#9538E2] px-5 py-2 rounded-xl hover:bg-[#9538E2] hover:text-white">View Details</button></Link>
        </div>
    );
};

export default Product;
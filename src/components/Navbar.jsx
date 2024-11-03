import { LuShoppingCart } from "react-icons/lu";
import { IoIosHeartEmpty } from "react-icons/io";

const Navbar = () => {
    return (
        <div className="bg-white">
            <div className="max-w-screen-2xl mx-auto flex justify-between items-center py-8">
            <h1 className="text-2xl font-bold">Gadget Heaven</h1>
            <div>
                <ul className="flex items-center gap-10 text-base">
                    <li>Home</li>
                    <li>Statistics</li>
                    <li>Dashboard</li>
                </ul>
            </div>
            <div className="flex items-center gap-5">
                <div className="border p-2 rounded-full text-xl"><LuShoppingCart /></div>
                <div className="border p-2 rounded-full text-xl"><IoIosHeartEmpty /></div>
            </div>
        </div>
        </div>
    );
};

export default Navbar;
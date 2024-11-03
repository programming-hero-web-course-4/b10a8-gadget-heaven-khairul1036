const Footer = () => {
    return (
       <div className="bg-white">
        <div className="max-w-screen-2xl mx-auto py-20">
        <div className="text-center border-b border-gray-300 pb-8">
            <h1 className="font-bold text-3xl pb-3">Gadget Heaven</h1>
            <p className="text-gray-600">Leading the way in cutting-edge technology and innovation.</p>
        </div>

        <div className="flex justify-evenly items-center text-center">
            <div>
                <p className="font-bold text-xl pt-10 pb-3">Services</p>
                <ul className="text-gray-600 space-y-1">
                    <li>Product Support</li>
                    <li>Order Tracking</li>
                    <li>Shipping & Delivery</li>
                    <li>Returns</li>
                </ul>
            </div>

            <div>
                <p  className="font-bold text-xl pt-10 pb-3">Company</p>
                <ul  className="text-gray-600 space-y-1">
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Contact</li>
                </ul>
            </div>

            <div>
                <p  className="font-bold text-xl pt-10 pb-3">Legal</p>
                <ul  className="text-gray-600 space-y-1">
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                    <li>Cookie Policy</li>
                </ul>
            </div>
        </div>
       </div>
       </div>
    );
};

export default Footer;

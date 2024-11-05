
const Banner = () => {
    return (
        <>
        <div className="bg-[#9538E2] text-center lg:pt-16 pb-32 lg:pb-72 lg:mx-10 rounded-es-xl rounded-ee-xl">
            <div className="lg:w-2/3 mx-auto text-white space-y-5">
                <h1 className="text-2xl lg:text-5xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                <p className="lg:px-60 px-5 text-sm lg:text-base">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <button className="btn rounded-full text-[#9538E2]">Shop Now</button>
            </div>
        </div>
        <div className="lg:w-1/2 mx-5 lg:mx-auto rounded-xl border-2 border-white bg-white bg-opacity-25 p-5 relative bottom-24 lg:bottom-52">
            <img className="rounded-xl" src="src/assets/banner.jpg" alt="banner" />
        </div>
        </>
    );
};

export default Banner;
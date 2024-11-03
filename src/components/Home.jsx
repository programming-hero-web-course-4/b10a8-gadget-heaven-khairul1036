const Home = () => {
    return (
        <>
        <div className="bg-[#9538E2] text-center pt-16 pb-72">
            <div className="w-2/3 mx-auto text-white space-y-5">
                <h1 className="text-5xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                <p className="px-60">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <button className="btn rounded-full text-[#9538E2]">Shop Now</button>
            </div>
        </div>
        <div className="w-1/2 mx-auto rounded-xl border-2 border-white bg-white bg-opacity-25 p-5 relative -top-40">
            <img className="rounded-xl" src="src/assets/banner.jpg" alt="banner" />
        </div>

        <div className="max-w-screen-2xl mx-auto">
            <h1 className="font-bold text-3xl text-center">Explore Cutting-Edge Gadgets</h1>
        </div>
        </>
    );
};

export default Home;
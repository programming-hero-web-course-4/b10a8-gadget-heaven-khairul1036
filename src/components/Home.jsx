import Banner from "./Banner";
import useDocumentTitle from "./Hooks/Hook";
import Products from "./Products";

const Home = () => {

    useDocumentTitle("Gadget Heaven");

    return (
        <>
        <Banner></Banner>
        <Products></Products>
        </>
    );
};

export default Home;
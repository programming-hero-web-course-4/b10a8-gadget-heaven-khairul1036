import { useLocation } from "react-router-dom";
import './NavLink.css'
import NavHome from "./NavHome";
import NavOthers from "./NavOthers";

const Navbar = () => {
    const location = useLocation();
    return (
        <>
            {
                location.pathname==="/"?<NavHome></NavHome>:<NavOthers></NavOthers>
            }
        </>
    );
};

export default Navbar;
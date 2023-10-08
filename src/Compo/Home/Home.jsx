import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import { useContext } from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import { UserContext } from "../UserAuth/UserAuth";

const Home = () => {
    // const { toast } = useContext(UserContext)
    // if (toast) {
    //     toast
    // }
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster></Toaster>
        </div>
    );
};

export default Home;
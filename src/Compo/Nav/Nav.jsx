import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav>

            <h1>DREAM WEDDING</h1>
            <ul>
                <li><NavLink className={"links"} to={"/"}>Home</NavLink></li>
                <li><NavLink className={"links"} to={"/Services"}>Services</NavLink></li>
                <li><NavLink className={"links"} to={"/contact"}>Contact</NavLink></li>
                <li><NavLink className={"links"} to={"/photograps"}>Potographs</NavLink></li>
            </ul>

            <div className="authentication">
                <NavLink to={"/login"} className={"authLinks"}>Log in</NavLink>
                <span>|</span>
                <NavLink to={"/signup"} className={"authLinks"}>Sign up</NavLink>
            </div>
        </nav>


    );
};

export default Nav;
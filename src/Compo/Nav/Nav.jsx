import "./Nav.css";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../UserAuth/UserAuth";

const Nav = () => {
    const { user, loading, signOutUser } = useContext(UserContext)

    const LogOut = () => {
        signOutUser()
    }



    return (
        <nav>

            <h1>DREAM WEDDING</h1>
            <ul>
                <li><NavLink className={"links"} to={"/"}>Home</NavLink></li>
                <li><NavLink className={"links"} to={"/Services"}>Services</NavLink></li>
                <li><NavLink className={"links"} to={"/contact"}>Contact</NavLink></li>
                <li><NavLink className={"links"} to={"/photograps"}>Potographs</NavLink></li>
            </ul>


            {

                loading ?

                    "coming" :

                    user ?



                        <div className="user">
                            <img src={user.photoURL ? user.photoURL : "https://i.ibb.co/yfdJJLc/585e4beacb11b227491c3399.png"} alt="" />
                            <p>{user.displayName ? user.displayName : ""}</p>
                            <button style={{
                                border: "1px solid black",
                                padding: "5px 8px",
                                background: "black",
                                color: "white",
                                cursor: "pointer"
                            }} onClick={LogOut}>LOG OUT</button>
                        </div>

                        :
                        <div className="authentication">
                            <NavLink to={"/login"} className={"authLinks"}>Log in</NavLink>
                            <span>|</span>
                            <NavLink to={"/signup"} className={"authLinks"}>Sign up</NavLink>
                        </div>

            }



        </nav>


    );
};

export default Nav;
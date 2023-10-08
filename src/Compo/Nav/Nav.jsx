import "./Nav.css";
import { useContext, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { Oval } from "react-loader-spinner";
import { NavLink } from "react-router-dom";
import { UserContext } from "../UserAuth/UserAuth";

const Nav = () => {
    const { user, loading, signOutUser } = useContext(UserContext)
    const [click, setClick] = useState(false)

    const LogOut = () => {
        signOutUser()
    }



    return (
        <nav>

            <div className="Xicon" onClick={() => setClick(!click)}>{click ? <RxCross2></RxCross2> : <AiOutlineMenu></AiOutlineMenu>}</div>

            <h1>DREAM WEDDING</h1>
            <ul className="navLinks">
                <li><NavLink className={"links"} to={"/"}>Home</NavLink></li>
                <li><NavLink className={"links"} to={"/shop"}>Our Shop</NavLink></li>
                <li><NavLink className={"links"} to={"/packages"}>Packages</NavLink></li>
                <li><NavLink className={"links"} to={"/contact"}>Contact</NavLink></li>

                <div className="authentication Xsection">
                    <NavLink to={"/login"} className={"authLinks"}>Log in</NavLink>
                    <span>|</span>
                    <NavLink to={"/signup"} className={"authLinks"}>Sign up</NavLink>
                </div>
            </ul>


            {
                click ? <ul className="menubar">
                    <li><NavLink className={"links"} to={"/"}>Home</NavLink></li>
                    <li><NavLink className={"links"} to={"/shop"}>Our Shop</NavLink></li>
                    <li><NavLink className={"links"} to={"/packages"}>Packages</NavLink></li>
                    <li><NavLink className={"links"} to={"/contact"}>Contact</NavLink></li>
                </ul> : ""
            }


            {

                loading ?

                    <Oval
                        height={40}
                        width={40}
                        color="#4fa94d"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        ariaLabel='oval-loading'
                        secondaryColor="#4fa94d"
                        strokeWidth={2}
                        strokeWidthSecondary={2}

                    /> :

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
                        <div className="authentication Ysection">
                            <NavLink to={"/login"} className={"authLinks"}>Log in</NavLink>
                            <span>|</span>
                            <NavLink to={"/signup"} className={"authLinks"}>Sign up</NavLink>
                        </div>

            }



        </nav>


    );
};

export default Nav;
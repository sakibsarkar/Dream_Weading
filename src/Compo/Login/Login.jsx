import "./Login.css";
import Clever from "../CleverUser/Clever";
import SocialSignup from "../SocialSignup/SocialSignup";
import toast, { Toaster } from "react-hot-toast";
import { useContext, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../UserAuth/UserAuth";

const Login = () => {
    const { signInWithEmail, setlocation, user, setToast } = useContext(UserContext)
    const location = useLocation()
    const [eye, SetEye] = useState(false)
    setlocation(location)

    const navigate = useNavigate()
    const handlesubmit = (e) => {

        e.preventDefault()
        const { email, password } = e.target
        signInWithEmail(email.value, password.value)
            .then(res => {
                setToast(toast.success("successfuly singedIn"))
                navigate(location?.state ? location.state : "/")
            })
            .catch(err => toast.error("invalid email or password"))


    }

    return (
        <>

            {
                user ?
                    <Clever></Clever>
                    :
                    <div className="logInCon">
                        <form onSubmit={handlesubmit}>
                            <div className="heading">
                                <h1>
                                    Log In
                                </h1>
                                <p>Welcome to our enchanting world of wedding management! We are committed to making every moment extraordinary </p>
                            </div>
                            <div className="inputCon">
                                <input className="inputs" type="email" placeholder="EMAIL" name="email" />
                                <input className="inputs" type={eye ? "text" : "password"} placeholder="PASSWORD" name="password" />
                                <div className="logEye" onClick={() => SetEye(!eye)}>{eye ? < AiOutlineEye /> : <AiOutlineEyeInvisible />}</div>
                            </div>
                            <button type="submit">Log In</button>
                            <div className="toggle">
                                <h1>New here? go to <Link style={{ color: "#fd457f", textDecoration: "underline" }} to={"/signUp"}>Register</Link></h1>
                            </div>
                        </form>


                        <div className="myMedia">
                            <SocialSignup location={location}></SocialSignup>

                        </div>

                        <Toaster
                            position="top-center"
                            reverseOrder={false}
                        />
                    </div>
            }

        </>
    );
};

export default Login;
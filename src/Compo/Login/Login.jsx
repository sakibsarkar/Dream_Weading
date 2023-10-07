import "./Login.css";
import SocialSignup from "../SocialSignup/SocialSignup";
import toast, { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserAuth/UserAuth";

const Login = () => {
    const { signInWithEmail } = useContext(UserContext)
    const handlesubmit = (e) => {
       
        e.preventDefault()
        const { email, password } = e.target

       

        signInWithEmail(email.value, password.value)
            .then(res => console.log(res))
            .catch(err => toast.error("invalid email or password"))


    }
    return (
        <div className="logInCon">
            <form onSubmit={handlesubmit}>
                <div className="heading">
                    <h1>
                        Login in
                    </h1>
                    <p>Welcome to our enchanting world of wedding management! We are committed to making every moment extraordinary </p>
                </div>
                <div className="inputCon">
                    <input className="inputs" type="email" placeholder="EMAIL" name="email" />
                    <input className="inputs" type="Password" placeholder="PASSWORD" name="password" />
                </div>
                <button type="submit">Log In</button>
                <div className="toggle">
                    <h1>New here? go to <Link style={{ color: "#fd457f", textDecoration: "underline" }} to={"/signUp"}>Sign Up</Link></h1>
                </div>
            </form>


            <div className="myMedia">
                <SocialSignup></SocialSignup>

            </div>

            <Toaster







                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default Login;
import SocialSignup from "../SocialSignup/SocialSignup";
import toast, { Toaster } from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../UserAuth/UserAuth";

const SignUp = () => {
    const { createUserWithEmail, user, setUser, location } = useContext(UserContext)
    const navigate = useNavigate()
    const handleRegister = (e) => {
        e.preventDefault()
        const { email, password, name, confirm } = e.target
        const checkCapital = /[A-Z]/;
        const checkNumber = /\d/
        console.log(password.value)
        if (password.value.length < 6) {
            return toast.error("password should more than 6 charetters")
        }
        if (!checkCapital.test(password.value)) {
            return toast.error("password should conatin atleast one capital latter")
        }

        if (!checkNumber.test(password.value)) {
            return toast.error("password should conatin atleast one number")
        }

        if (password.value !== confirm.value) {
            return toast.error("password didn't matched")
        }

        createUserWithEmail(email.value, password.value)
            .then(res => {
                navigate(location?.state ? location.state : "/")
                updateProfile(res.user, {
                    displayName: name.value
                })

            })
            .catch(err => console.log(err))



    }
    return (
        <div className="logInCon">
            <form onSubmit={handleRegister}>
                <div className="heading">
                    <h1>
                        Sign UP
                    </h1>
                    <p>Welcome to our enchanting world of wedding management! We are committed to making every moment extraordinary </p>
                </div>
                <div className="inputCon">
                    <input className="inputs" required type="text" placeholder="NAME" name="name" />
                    <input className="inputs" required type="email" placeholder="EMAIL" name="email" />
                    <input className="inputs" required type="Password" placeholder="PASSWORD" name="password" />
                    <input className="inputs" required type="Password" placeholder="CONFIRM PASSWORD" name="confirm" />
                </div>
                <button type="submit">Log In</button>
                <div className="toggle">
                    <h1>Already have account? go to <Link style={{ color: "#fd457f", textDecoration: "underline" }} to={"/login"}>Log In</Link></h1>
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

export default SignUp;
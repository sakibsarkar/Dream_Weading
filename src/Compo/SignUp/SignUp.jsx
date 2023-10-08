import Clever from "../CleverUser/Clever";
import SocialSignup from "../SocialSignup/SocialSignup";
import toast, { Toaster } from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../UserAuth/UserAuth";

const SignUp = () => {
    const { createUserWithEmail, user, setUser, location, setWaitForUser } = useContext(UserContext)
    const [eye, SetEye] = useState(false)
    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault()
        const { email, password, name, confirm, picture } = e.target
        const checkCapital = /[A-Z]/;
        const chekSpeacialcharacter = /[\W_]/
        if (password.value.length < 6) {
            return toast.error("password should more than 6 charaters")
        }
        if (!checkCapital.test(password.value)) {
            return toast.error("password should conatin atleast one capital latter")
        }

        if (!chekSpeacialcharacter.test(password.value)) {
            return toast.error("password should conatin atleast one special character")
        }

        if (password.value !== confirm.value) {
            return toast.error("password didn't matched")
        }

        createUserWithEmail(email.value, password.value)
            .then(res => {
                navigate(location?.state ? location.state : "/")
                toast.success("succesfully loged in")

                updateProfile(res.user, {
                    displayName: name.value,
                    photoURL: picture.value
                })
                    .then(res => setWaitForUser(false))



            })
            .catch(err => toast.error(`${err}`))




    }
    return (
        <>
            {
                user ?
                    <Clever></Clever>

                    :

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
                                <input className="inputs" required type="text" placeholder="Your image link" name="picture" />
                                <input className="inputs" required type="email" placeholder="EMAIL" name="email" />
                                <input className="inputs" required type={eye ? "text" : "password"} placeholder="PASSWORD" name="password" />
                                <div className="eye" onClick={() => SetEye(!eye)}>{eye ? < AiOutlineEye /> : <AiOutlineEyeInvisible />}</div>
                                <input className="inputs" required type="password" placeholder="CONFIRM PASSWORD" name="confirm" />
                            </div>
                            <button type="submit">Sign Up</button>
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
            }
        </>
    );
};

export default SignUp;
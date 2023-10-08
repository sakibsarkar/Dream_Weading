import "./SocialSignup.css";
import toast, { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsGoogle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserAuth/UserAuth";

const SocialSignup = ({ location }) => {

    const { googleLogIn, gitHubLogIn, user, setToast } = useContext(UserContext)
    const navigate = useNavigate()


    const socialLogin = (socialMedia) => {
        socialMedia()
            .then(res => {
                setToast(toast.success("successfuly logedIn"))
                navigate(location?.state ? location.state : "/")

            })

            .catch(err => toast.error(`${err}`))
    }

    return (
        <div className="socialCon">
            <div className="socialSite" onClick={() => socialLogin(googleLogIn)}>
                <div >
                    <BsGoogle></BsGoogle> Google
                </div>
            </div>



            <div className="socialSite" onClick={() => socialLogin(gitHubLogIn)}>
                <div>
                    <AiFillGithub></AiFillGithub> GitHub
                </div>
            </div>
            <Toaster></Toaster>
        </div>

    );
};

export default SocialSignup;
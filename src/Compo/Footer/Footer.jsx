import "./Footer.css";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { BiPaperPlane } from "react-icons/bi";
import { ImFacebook } from "react-icons/im";
import { LuPhone } from "react-icons/lu";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            

            <div className="footerHead">
                <h1>DREAM WEDDING</h1>
                <div className="heroItem">
                    <h1>Contact With Us</h1>

                    <div>
                        <p><AiOutlineMail></AiOutlineMail> dreamwedding@gmail.com</p>
                        <p><LuPhone></LuPhone> +880 1234567891</p>
                    </div>
                </div>


                <div className="heroItem">
                    <h1>Visit Us in</h1>

                    <div>
                        <p>Mon-Fri 8:00AM - 6:00PM</p>
                        <p>Closed in Weekend</p>
                    </div>
                </div>


            </div>
            <div className="footerBottom">
                <div className="left">
                    <h2>Book a Request</h2>
                    <p>SinUp and get 10% Discount</p>
                </div>
                <div className="mid">
                    <input type="email" placeholder="Your Email" name="Email" /><button><BiPaperPlane></BiPaperPlane></button>
                </div>

                <div className="right">
                    <Link className="socialLinks"><AiOutlineInstagram></AiOutlineInstagram></Link>
                    <Link className="socialLinks"><AiOutlineTwitter></AiOutlineTwitter></Link>
                    <Link className="socialLinks"><ImFacebook></ImFacebook></Link>
                </div>
            </div>
        </footer>

    );
};

export default Footer;
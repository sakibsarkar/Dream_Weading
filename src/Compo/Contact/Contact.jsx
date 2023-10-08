import "./Contact.css";
import toast from "react-hot-toast";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";

const Contact = () => {
    return (
        <div className="contact">
            <div className="leftSide">
                <h1>Contact Info</h1>
                <div className="infos">
                    <div><BsFillTelephoneFill className="contactIcons"></BsFillTelephoneFill> <p>+880 1234567891</p></div>
                    <div><AiOutlineClockCircle className="contactIcons"></AiOutlineClockCircle><p>Mon-Fri 8:00AM - 6:00PM <br /> losed in Weekend</p></div>
                    <div><IoLocationSharp className="contactIcons"></IoLocationSharp> <p>sonargaon road, r. k. tower (7th floor), hatirpool, 1205</p></div>
                </div>

            </div>

            <div className="rightSide">
                <h1>Book a Sppointment</h1>
                <div className="clientData">
                    <div className="input">
                        <input type="text" placeholder="NAME" />
                        <input type="text" placeholder="EMAIL" />
                    </div>

                    <div className="textArea">
                        <textarea name="" placeholder="YOUR MESSEGE"></textarea>
                    </div>
                </div>
                <button onClick={() => toast.success("Thanks for reaching us")}>SEND</button>
            </div>
        </div>
    );
};

export default Contact;
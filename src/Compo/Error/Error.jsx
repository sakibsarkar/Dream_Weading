import "./Error.css";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="errorCon">
            <div className="fullWidth">
                <h1>Opps! PAGE NOT FOUND</h1>

                <h1 className="error">404</h1>

                <img src="https://i.ibb.co/C0BC6p6/devider-1.png" alt="" />

                <p>We’re sorry, the page you have looked for does not exist! <Link to={"/"} className="goBack">Home</Link></p>
                <Link to={"/"} className="Xbtn goBack">Home</Link>
            </div>
        </div>
    );
};

export default Error;
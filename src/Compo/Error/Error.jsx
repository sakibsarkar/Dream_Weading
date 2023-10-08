import "./Error.css";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="errorCon">
            <img src="https://img.freepik.com/free-vector/404-error-abstract-concept-illustration_335657-2243.jpg" alt="" />
            <h1>OPPS! PAGE NOT FOUND </h1>
            <Link to={"/"}> <button className="goBack">Go Back to Home</button></Link>
        </div>
    );
};

export default Error;
import "./Clever.css";
import { Link } from "react-router-dom";

const Clever = () => {
    return (
        <div className="cleverCon">

            <img src="https://i.ibb.co/NrCRqGH/counter-bg.jpg" alt="" />
            <h1>YOU ARE ALREADY LOGED IN, PLEASE GO BACK TO HOME </h1>
            <Link className="home" to={"/"}>HOME</Link>

        </div>
    );
};

export default Clever;
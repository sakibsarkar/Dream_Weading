import "./Service.css";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
    const { serviceName, icon, image, description } = service ? service : {}
    return (
        <Link>

            <div className="service" data-aos="fade-up">
                <img src={image} alt="" />
                <div className="serviceName">

                    <img src={icon} alt="" />


                    <p>{serviceName}</p>
                </div>

                <div className="btn">
                    <button className="view">View Details</button>
                </div>
            </div>
        </Link>

    );
};

export default Service;
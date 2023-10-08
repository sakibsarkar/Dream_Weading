import "./Service.css";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
    const { serviceName, icon, image, description, id, price } = service ? service : {}
    return (
        <Link to={`/serviceDetail/${id}`}>

            <div className="service" data-aos="fade-up">
                <img src={image} alt="" />
                <div className="serviceName">

                    <img src={icon} alt="" />


                    <p>{serviceName}</p>
                </div>


                <div className="bottomDetails">
                    <h1 className="description">{description}</h1>

                    <div>
                        <p>{price}</p>   <button className="btn">View Details</button>
                    </div>
                </div>


            </div>
        </Link>

    );
};

export default Service;
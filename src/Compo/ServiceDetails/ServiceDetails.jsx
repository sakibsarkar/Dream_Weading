import "./ServiceDetail.css";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {

    const { id } = useParams();
    const serviceData = useLoaderData();
    const currentService = serviceData.find(data => data.id == id)
    const { more_details, image, serviceName, price } = currentService
    return (
        <div className="serviceDetai">

            <div className="theBigImg">
                <img src={image} alt="" />
            </div>

            <div className="info">
                <h1>{serviceName}</h1>
                <p>{more_details}</p>


                <div className="infoBottom">
                    <p>{price}</p>
                    <button onClick={() => toast.success(`${serviceName} service added succesfully`)}>ADD SERVICE</button>
                </div>

            </div>

        </div>
    );
};

export default ServiceDetails;
import "./Services.css";
import Service from "../Service/Service";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserAuth/UserAuth";

const Services = () => {
    const [myservices, setMyServices] = useState([])
    const { user } = useContext(UserContext)
    useEffect(() => {
        fetch("/public/service.json")
            .then(res => res.json())
            .then(data => setMyServices(data))
    }, [])

    return (
        <div className="serviceCon">
            <div className="top">
                <h1>OUR SERVICES</h1>
                <img src="https://i.ibb.co/8rtbkhD/ti.png" alt="" />
            </div>

            <div className="allService">
                {
                    myservices.map(service => <Service key={service.id} service={service}></Service>)
                }


            </div>
        </div>
    );
};

export default Services;
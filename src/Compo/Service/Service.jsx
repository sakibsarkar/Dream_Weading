import "./Service.css";

const Service = ({ service }) => {
    const { serviceName, imageSrc, description } = service ? service : {}
    return (
        <div className="service">
            <img src={imageSrc} alt="" />
            <h2>{serviceName}</h2>
            <p>{description}</p>
            <button>Veiw</button>
        </div>
    );
};

export default Service;
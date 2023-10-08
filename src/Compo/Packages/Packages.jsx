import "./Packages.css";
import { GiVanillaFlower } from "react-icons/gi";

const Packages = () => {
    return (
        <div>
            <div className="priceBanner">
                <h1>Best pakages for You</h1>
                <p>
                    Celebrate the beginning of your forever with our exquisite wedding packages designed to turn your dreams into reality</p>
            </div>

            <div className="packages">
                <div className="package">
                    <div className="picture">
                        <img src="https://i.ibb.co/fNt45Qc/service-grid-4.jpg" alt="" />
                    </div>


                    <div className="packName">
                        <h1>BASIC</h1>
                        <h2>$ 150/Month</h2>
                    </div>


                    <div className="packService">
                        <p>Stylish Makeup for Bride</p>
                        <p>Top Label Arrangement</p>
                        <p>Amazing Meal & Breakfast</p>
                        <p>Manicure & Pedicure</p>
                        <p>Full Body Polish</p>


                    </div>


                    <button className="getPack">GET PACKAGE</button>
                </div>


                <div className="package">
                    <div className="picture">
                        <img src="https://i.ibb.co/4R00hj2/cec1b4eac252e5fef9401a05a708adbe.jpg" alt="" />
                    </div>


                    <div className="packName">
                        <h1>STANDARD</h1>
                        <h2>$ 270/Month</h2>
                    </div>


                    <div className="packService">
                        <p>Beautiful Bridal Makeup</p>
                        <p>Elegant Label Arrangement</p>
                        <p>Delicious Three-Course Meal</p>
                        <p>Classic Manicure & Pedicure</p>
                        <p>Relaxing Full Body Polish</p>


                    </div>


                    <button className="getPack">GET PACKAGE</button>
                </div>




                <div className="package">
                    <div className="picture">
                        <img src="https://i.ibb.co/9bJGQCr/feature-5.jpg" alt="" />
                    </div>


                    <div className="packName">
                        <h1>PREMIUM</h1>
                        <h2>$ 350/Month</h2>
                    </div>


                    <div className="packService">
                        <p>Exquisite Bridal Makeup</p>
                        <p>Luxurious Top Label Arrangement</p>
                        <p>Gourmet Meal & Breakfast Experience</p>
                        <p>VIP Manicure & Pedicure</p>
                        <p>Ultimate Full Body Pampering with Polish</p>


                    </div>


                    <button className="getPack">GET PACKAGE</button>
                </div>

            </div>
        </div>
    );
};

export default Packages;
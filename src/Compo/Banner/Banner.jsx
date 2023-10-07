import "aos/dist/aos.css";
import "./Banner.css";

const Banner = () => {


    return (
        <>
        
        <div className="bannerCon mrY" data-aos="fade-in" data-aos-mirror="true" data-aos-duration="3000" >
            <div className="bannerTxt">

                <div className="welcome" data-aos="fade-right" data-aos-duration="3000" data-aos-easing="ease-out-cubic" data-aos-mirror="true">
                    <img src="https://i.ibb.co/GkqTGdc/IconTREE.png" alt="" />
                    <h2>We Make Your dream Wedding</h2>
                </div>

                

                <div className="txt">
                    <h1 className="bannerTitle" data-aos="zoom-out-left" data-aos-offset="300" data-aos-duration="2000" data-aos-mirror="true"> CRAFTING JOYFUL BEGINNINGS</h1>
                    
                    <p data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom" data-aos-duration="3000" data-aos-easing="ease-in">we believe that every love story deserves a perfect beginning. Our dedicated team of wedding artisans is committed <br /> to turning your dreams into reality</p>
                </div>
            </div>
        </div>



        <div className="bannerCon mrX">
            <div className="bannerTxt">

                <div className="welcome">
                    <img src="https://i.ibb.co/GkqTGdc/IconTREE.png" alt="" />
                    <h2>We Make Your dream Wedding</h2>
                </div>

                

                <div className="txt">
                    <h1 className="bannerTitle"> CRAFTING JOYFUL BEGINNINGS</h1>
                    
                    <p>we believe that every love story deserves a perfect beginning. Our dedicated team of wedding artisans is committed <br /> to turning your dreams into reality</p>
                </div>
            </div>
        </div>
        
        
        
        </>



    );
};

export default Banner;
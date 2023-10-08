import Banner from "../Banner/Banner";
import Packages from "../Packages/Packages";
import Products from "../Products/Products";
import Services from "../Services/Services";

const HomePageContent = () => {
    return (
        <>

            <Banner></Banner>
            <Services></Services>
            <Products></Products>
            <Packages></Packages>
        </>
    );
};

export default HomePageContent;
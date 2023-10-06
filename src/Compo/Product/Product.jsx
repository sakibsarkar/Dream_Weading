import "./Product.css";
import toast, { Toaster } from "react-hot-toast";
import { FiShoppingBag } from "react-icons/fi";

const Product = ({ product }) => {
    const { productName, productImg, productPrice } = product ? product : {}
    const handleBuy = (NameProduct) => {
        toast.success(`${NameProduct} successfully purchased`)
    }
    return (
        <div className="productCard">
            <div className="img">
                <img src={productImg} alt="" />
            </div>

            <p className="productName">{productName}</p>
            <p className="price">$ {productPrice}</p>

            <button className="buyBtn" onClick={() => handleBuy(productName)}>Buy Now <FiShoppingBag></FiShoppingBag></button>

            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default Product;
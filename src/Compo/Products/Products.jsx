import "./Products.css";
import Product from "../Product/Product";
import { useEffect, useState } from "react";

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("/public/Product.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div style={{ padding: "120px 390px"}}>

            <div className="productHead">
                <h1 className="productTitle">SPECIAL PRODUCT FOR YOUR SPECIAL DAY</h1>
                <img src="https://i.ibb.co/8rtbkhD/ti.png" alt="" />
            </div>

            <div className="productsCon">

                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
        </div>

    );
};

export default Products;
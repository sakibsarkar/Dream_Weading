import "./Review.css";
import { AiFillStar, AiOutlineHeart, AiOutlineStar } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { BsStar, BsStarHalf } from "react-icons/bs";

const Review = () => {
    return (
        <div className="reviewCon">

            <div className="reviewBanner">
                <img src="https://i.ibb.co/VvvCHWS/counter-bg.jpg" alt="" />

                <div className="reviewBannerContent">
                    <h1>Revies From Our Happy clients</h1>
                    <p>Your love story deserves the perfect chapter – let us script it together. Explore the enchantment and share your own unforgettable moments with [Your Wedding Management Company]. Your happiness is our ultimate review!</p>
                </div>
            </div>
            <div className="review">
                <div className="topLvl">
                    <div className="coupleInfo">
                        <img src="https://i.ibb.co/WWgbk2t/pexels-photo-6617683.jpg" alt="" />
                        <div className="heroReview">
                            <h2 className="coupleName">MR. & MRS. JUWEL</h2>
                            <p className="date"> 02-10-2023</p>
                            <div className="rating">
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                            </div>

                        </div>
                    </div>

                    <div className="reaction">
                        <AiOutlineHeart className="heart" />
                        <BiCommentDetail />
                    </div>
                </div>
                <div className="theReview">
                    <p>I recently stumbled upon this hidden gem of a wedding management website, and let me tell you, it's like finding a pot of gold at the end of the wedding planning rainbow! From the moment I landed on the homepage, I felt like I had stepped into a dreamy wonderland of weddings.The interface is so user-friendly that even my grandma, who is still getting the hang of sending emails, could navigate it with ease</p>
                </div>
            </div>



            <div className="review">
                <div className="topLvl">
                    <div className="coupleInfo">
                        <img src="https://i.ibb.co/RQyj7xw/pexels-photo-5731456.jpg" alt="" />
                        <div className="heroReview">
                            <h2 className="coupleName">MR. & MRS. BRYAN</h2>
                            <p className="date"> 11-09-2023</p>
                            <div className="rating">
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <AiOutlineStar></AiOutlineStar>
                            </div>

                        </div>
                    </div>

                    <div className="reaction">
                        <AiOutlineHeart className="heart" />
                        <BiCommentDetail />
                    </div>
                </div>
                <div className="theReview">
                    <p>One feature that really stood out to me was the "Deam wedding" I entered a few preferences, and within seconds, it presented me with a curated list of venues that felt like they were plucked straight from my Pinterest board. The virtual tours were so immersive that I almost felt like I was physically walking down the aisle.</p>
                </div>
            </div>



            <div className="review">
                <div className="topLvl">
                    <div className="coupleInfo">
                        <img src="https://i.ibb.co/hssKbNw/pexels-photo-5729136.jpg" alt="" />
                        <div className="heroReview">
                            <h2 className="coupleName">MR. & MRS. PAUL</h2>
                            <p className="date"> 27-04-23</p>
                            <div className="rating">
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <BsStarHalf></BsStarHalf>
                            </div>

                        </div>
                    </div>

                    <div className="reaction">
                        <AiOutlineHeart className="heart" />
                        <BiCommentDetail />
                    </div>
                </div>
                <div className="theReview">
                    <p>The customer support is another shining star in this wedding galaxy. I had a few questions, and the response time was faster than the time it takes to say, "I do." The support team was not only knowledgeable but also genuinely excited to help make my wedding vision come to life.</p>
                </div>
            </div>



            <div className="review">
                <div className="topLvl">
                    <div className="coupleInfo">
                        <img src="https://i.ibb.co/4JNVnGX/pexels-photo-9999363.jpg" alt="" />
                        <div className="heroReview">
                            <h2 className="coupleName">MR. & MRS. SMITH</h2>
                            <p className="date"> 29-10-22</p>
                            <div className="rating">
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <BsStar></BsStar>
                                <BsStar></BsStar>
                            </div>

                        </div>
                    </div>

                    <div className="reaction">
                        <AiOutlineHeart className="heart" />
                        <BiCommentDetail />
                    </div>
                </div>
                <div className="theReview">
                    <p>In conclusion, this wedding management website is a hidden gem that deserves to be shouted from the rooftops. It turned the daunting task of wedding planning into a delightful experience, and I can't recommend it enough to all future brides and grooms</p>
                </div>
            </div>
        </div>
    );
};

export default Review;
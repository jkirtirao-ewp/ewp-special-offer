/* eslint-disable no-unused-vars */
import React from "react";
import FAQSection from "./components/FAQSection";
import DiscountForm from "./components/DiscountForm";

// import {FaTabletScreenButton} from 'react-icons/fa'
import {BiLaptop} from 'react-icons/bi'
import {MdOutlineScreenSearchDesktop} from 'react-icons/md'
import {GrCloudSoftware} from 'react-icons/gr'
import {HiOutlineLightBulb} from 'react-icons/hi'
import {FaMobileAlt} from 'react-icons/fa'
import {AiOutlineDropbox} from 'react-icons/ai'
import {BsArrowRight} from "react-icons/bs"

import Profile from "./assets/asha-bhosle.jpg"
import FAQ from "./assets/faq-questions.jpg"
import RedStroke from "./assets/red-underline.png"
import "./SpecialOffer.css"

const SpecialOffer = () => {

    return (
        <div id="specialOffer">
            
            <div className="topBanner">
                <div className="left">
                    <div>
                        <h1>Special Offer : Choose Free Domain Registration or SEO Audit</h1>
                        <h4>Now for a Limited Time, Get A Free Domain Registration or A Free SEO Audit with your Website!</h4>
                    </div>   
                    <div>
                        <h1>For a free consultation</h1>
                        <h2>Get in Touch Now</h2>
                    </div>
                    <div>
                        <img src={RedStroke} alt="Stroke" />
                        <h2><a href="tel:123-456-7890">+123-456-7890</a></h2>
                    </div>
                </div>

                <div className="right">
                    <DiscountForm />
                </div>
            </div>


            {/* Commendation */}
            <div className="commendation">
                <h1>A special commendation from Asha Ji herself !!</h1>
                <div className="main">
                    <div className="left">
                        <img src={Profile} alt="" />
                    </div>
                    <div className="right">
                        <p>Consequuntur impedit expedita praesentium odio quae, hic accusamus repudiandae sed velit accusantium nobis enim minima nesciunt eum. Est nihil quas saepe magnam perferendis quis minus dolor temporibus laboriosam consequatur aliquam vero non qui ut assumenda incidunt, sint ab fuga placeat ex eos totam. Odit facilis, veritatis sequi quod dolores soluta sed cum quasi vitae quas id blanditiis?</p>
                        <p>Consequuntur impedit expedita praesentium odio quae, hic accusamus repudiandae sed velit accusantium nobis enim minima nesciunt eum. Est nihil quas saepe magnam perferendis quis minus dolor temporibus laboriosam consequatur aliquam vero non qui ut assumenda incidunt, sint ab fuga placeat ex eos totam. Odit facilis, veritatis sequi quod dolores soluta sed cum quasi vitae quas id blanditiis?</p>
                        <div className="credentials">
                            <div className="hr"></div>
                            <h3>Asha Bhosle</h3>
                            <h5>Legendary playback singer</h5>
                        </div>
                    </div>
                </div>

                
            </div>
            
            <div className="services">
                <div className="top">
                    <h1>Digital Services</h1>
                    <p>As your complete Digital Agency, we at Dimakh Consultants evolve your marketing strategy to all digitized versions. Designing needs thorough study and detailing of your USPs so as to convert them into the web versions. Checkout our web design services ranging from responsive websites to intuitive dashboard designs.</p>
                </div>
                <div className="bottom">
                    <div className="service">
                        <div className="icon">
                            <BiLaptop />
                        </div>
                        <span>SEO</span>
                    </div>
                    <div className="service">
                        <div className="icon">
                            <MdOutlineScreenSearchDesktop />
                        </div>
                        <span>Responsive Web Design</span>
                    </div>
                    <div className="service">
                        <div className="icon">
                            <GrCloudSoftware />
                        </div>
                        <span>Web Hosting</span>
                    </div>
                    <div className="service">
                        <div className="icon">
                            <HiOutlineLightBulb />
                        </div>
                        <span>E-Commerce</span>
                    </div>
                    <div className="service">
                        <div className="icon">
                            <FaMobileAlt />
                        </div>
                        <span>Android Mobile Application</span>
                    </div>
                    <div className="service">
                        <div className="icon">
                            <AiOutlineDropbox />
                        </div>
                        <span>EMS</span>
                    </div>
                </div>
            </div>

            <div className="start">
                <div className="left">
                    <div className="circle">
                        <div className="sideCircle"></div>
                        <div className="outerCircle"></div>
                        <div className="innerCircle">
                            Start Project with Us
                        </div>
                    </div>
                </div>
                <div className="right">
                    <ul>
                        <li>
                            Affordable quick-start packages best suited for start-ups, new businesses, new app launches, real estate, restaurants, Individuals and Personalities.
                        </li>
                        <li>
                            Responsive and SEO friendly, Google compatible websites starting at Rs.27,000.
                        </li>
                        <li>
                            Template-based and ready theme-based options available.
                        </li>
                        <li>
                            Advanced Custom website design package suited for larger businesses, e-commerce sites and business houses.
                        </li>
                    </ul>
                    <button>
                        Get a Quote <BsArrowRight />
                    </button>
                </div>
            </div>


            <div className="start faq-s f-align-f-start">
                <div className="left">
                    <div>Frequently Asked Questions</div>
                    <img src={FAQ} alt="faq" />
                </div>
                <div className="right">
                    <div className="faqSection">
                        <FAQSection />
                    </div>
                    <button>View All</button>
                </div>
            </div>

        </div>
    );
}

export default SpecialOffer;
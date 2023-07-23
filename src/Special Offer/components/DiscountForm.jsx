/* eslint-disable no-unused-vars */
import React from "react";
import "./DiscountForm.css"

const DiscountForm = () => {
    return (
        <div id="discountForm">
            <div className="banner">
                <h3>Get Your Exclusive Discounted Offer</h3>
                <h4>Please fill out the form.</h4>
            </div>
            <form action="">
                <p>Choose offer for</p>

                <div className="radio">
                    <input type="radio" name="yes" />Free Domain Registration
                    <input type="radio" name="yes" />Free SEO Audit
                </div>

                <div className="input">
                    <input type="text" placeholder="Name"/>
                    <input type="email" placeholder="Email"/>
                    <input type="text" placeholder="Company"/>
                    <input type="number" name="" id="" placeholder="Phone NO."/>
                    <input type="text" placeholder="Service"/>
                    <input type="text" placeholder="Comments"/>
                </div>

                <div className="button">
                    <button>SEND</button>
                    <button>RESET</button>
                </div>

                

                

            </form>
        </div>
    )
}

export default DiscountForm;
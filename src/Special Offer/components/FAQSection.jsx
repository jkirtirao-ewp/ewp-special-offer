/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from 'react';
import Faq from './FAQ';


const FAQSection = () =>{
  const [faqs, setfaqs] = useState([
    {
        question: "Why Choose E-Website Provider as your strategic digital partner ?",
        answer: "E-Website Provider is a leading website development company in Pune. As an established digital marketing company in Pune, we focus on offering gamut of online services and believe in end-to-end solutions for our clients. Our expert team of website designers, developers and digital marketers make sure to provide conversion-oriented services to boost your overall revenue and increase ROI. Avail our services and enhance your online reputation.",
        open: false,
    },

    {
        question: "How to increase business online in 2022 after lockdown and COVID-19 ?",
        answer: "The recovery will be digital says McKinsey ! The next normal is enhancing digital capabilities. Ways to grow your business is by building an e-commerce presence, allocate budgets for digital marketing, invest in cyber security and make your marketing and IT more agile. Your business may be offline or online, the best way to increase sales and to generate more lead is by doing Digital Marketing .",
        open: false,
    },

    {
        question: "What Kind of services are provided by E-Website Provider ?",
        answer: "Since 2022 E-Website Provider has been providing various digital services to the clients world wide. Below is a list of few of the popular services, Website design, Web Development, Mobile app development, SEO and Digital Marketing, Social Media Marketing",
        open: false,
    },

  ]) ;

  const toggleFAQ = (index) => {

    setfaqs(faqs.map((faq, i) => {

      if(i === index) {
        faq.open = !faq.open
      } else{
        faq.open = false;
      }

      return faq;
    }
    )) ;
  };


  return (
    <div className="faq">
      <div className="faqs">
        {faqs.map((faq, i) => (
          <Faq key={i} faq={faq} index={i} toggleFAQ={toggleFAQ}  />
        )
        )}
      </div>
    </div>
  );
};

export default FAQSection;

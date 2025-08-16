import React, { useState } from 'react';
import MockupImage from "../images/UVS-Logo.png"
import { Link } from 'react-router-dom';

function Timeline() {

  const [year, setYear] = useState('2020');

  return (
    <section>
     
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-4xl mx-auto pb-12 md:pb-20 ">
            <h2 className="h2 font-red-hat-display mb-4">About Us</h2>
            <li className="flex items-center mb-2">
                  <svg className="w-3 h-3 fill-current text-teal-400 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span className='ml-8 mt-10'>Since August of 2019, Universal virtual Support has been
                  helping businesses improve their sales and customer service on
                  the Internet. Our mission is to empower companies and
                  organizations with cutting edge communications technology. We
                  are committed to help our customers with their online
                  communication needs.We strive to make our service fast,
                  reliable and easy-to-use. Universal virtual Support is a
                  privately held company with customers in all parts of the
                  world. We sincerely appreciate your interest in Global virtual
                  assistance and taking the time to view our website. Let us
                  know if we can assist you with your online communication
                  needs.</span>
                </li>
                <li className="flex items-center mb-2 mt-8">
                  <svg className="w-3 h-3 fill-current text-teal-400 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span className='ml-8'>We are the world’s most cost-effective English
                    language-based outsourcing company and specialize in the
                    management of customer care services and back office
                    processes for global leaders in the domains of technical
                    support, banking, telecom, transportation, and retail.
                    Through world-class human resources, a strong management
                    focus, dedicated business units, and a comprehensive
                    financial platform, we ensure client satisfaction and
                    continue to solidify ourselves as the industry leader in our
                    country.</span>
                </li>
                <li className="flex items-center mb-2 mt-8">
                  <svg className="w-3 h-3 fill-current text-teal-400 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span className='ml-8'>Specialized staff at Universal virtual Support, live chat
                    support for website, helps you keep the visitor on your
                    website, push pages, cross sell and up sell your products
                    and generate qualitative feedback. Coupled with our powerful
                    in-house technology Universal virtual Support Live Chat
                    Software, we provide un-interrupted chat service 24/7, 365
                    days a year. To get in touch with us right away and
                    experience our live support solution first hand. Please feel
                    free to contact us by phone, email, or regular mail.</span>
                </li>
                <li className="flex items-center mb-2 mt-8">
                <span className={`block w-3.5 h-3.5 bg-teal-400 dark:bg-teal-600 border-2 border-white dark:border-gray-900 rounded-full`}></span>
                  <span className='ml-8'>The Universal Virtual Support</span>
                </li>
                <Link to="/" className="block" aria-label="Cruip">
              <img src={MockupImage} style={{height:"80px",width:"80px",objectFit:"contain",margin:'50px'}}/>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
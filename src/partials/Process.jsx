import React from 'react';
import ChatBot from "../images/chatBot2.jpg"
import VoiceBot from "../images/VoiceBot.jpg"
import EmailBot from "../images/Email-Support.jpg"
import OrderBot from "../images/OrderBot.jpg"
import DataBot from "../images/Data-Entry.jpg"
import B2BBot from "../images/B2B-Sales.jpg"
import { Link } from 'react-router-dom';

function Process() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-200 dark:border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="font-extrabold text-3xl font-red-hat-display mb-4">We help businesses by delivering the perfect Services</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">We are serving almost all kind of businesses with dedication and qualified professionals</p>
          </div>

          {/* Glow illustration */}
          <svg className="absolute left-1/2 transform -translate-x-1/2 mt-20 lg:mt-60 pointer-events-none -z-1 dark:opacity-20 hidden md:block" aria-hidden="true" width="854" height="509" viewBox="0 0 854 509" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="39.386%" id="iphonesill__a">
                <stop stopColor="#667EEA" offset="0%" />
                <stop stopColor="#667EEA" stopOpacity="0" offset="100%" />
              </radialGradient>
              <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="39.386%" id="iphonesill__b">
                <stop stopColor="#9F7AEA" offset="0%" />
                <stop stopColor="#9F7AEA" stopOpacity="0" offset="100%" />
              </radialGradient>
            </defs>
            <g transform="translate(-64 -64)" fill="none" fillRule="evenodd">
              <circle fillOpacity=".64" fill="url(#iphonesill__a)" cx="300" cy="300" r="300" />
              <circle fillOpacity=".72" fill="url(#iphonesill__b)" cx="729" cy="384" r="240" />
            </g>
          </svg>
          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-12 md:gap-x-6 lg:gap-x-12 md:grid-cols-3 items-start md:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center ">
              {/* Line connecting (1) and (2) */}
              <div aria-hidden="true" className="absolute h-px opacity-50 bg-gradient-to-r from-white via-teal-400 to-white dark:from-gray-900 dark:via-teal-400 dark:to-gray-900 hidden md:block" style={{ width: 'calc(100% - 48px)', left: 'calc(50% + 48px)', top: '24px' }}>
                <div className="absolute inset-0 border-t border-dashed border-white dark:border-gray-900"></div>
              </div>
              {/* Number */}
              <div className="w-12 h-12 rounded-full bg-teal-400 dark:bg-teal-600 dark:bg-opacity-25 flex justify-center items-center text-white dark:text-teal-400 font-medium mb-8 lg:mb-12">1</div>
              {/* Mobile mockup */}
              <div className="inline-flex relative justify-center items-center">
                <div className='flex flex-col overflow-hidden rounded-lg shadow-lg'>
                  <div className="flex-shrink-0">
                <Link to="/LiveChatSupport">
                                  <img className="relative max-w-full mx-auto pointer-events-none" src={ChatBot} width="290" height="24" style={{ maxWidth: '84.33%' }} alt="App screen 02" />
                </Link>
                </div>
                <div className='flex flex-1 w-full flex-col justify-between'>
                <div className="flex-1">
                  
                    <Link to="/LiveChatSupport">
                      <h1  className=" font-black text-xl text-center mt-4 h2">
                    Live Chat Support
                    </h1>
                    </Link>
                  
                  <a  className="mt-2 ">
                    <p className="mt-3 text-base text-gray-500 text-center text-center">Universal Virtual Support can provide you with a wide range of live chat support services such as forced chat, proactive chat and visitor initiated chat.</p>
                  </a>
                </div>
                </div>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center ">
              {/* Line connecting (2) and (3) */}
              <div aria-hidden="true" className="absolute h-px opacity-50 bg-gradient-to-r from-white via-teal-400 to-white dark:from-gray-900 dark:via-teal-400 dark:to-gray-900 hidden md:block" style={{ width: 'calc(100% - 48px)', left: 'calc(50% + 48px)', top: '24px' }}>
                <div className="absolute inset-0 border-t border-dashed border-white dark:border-gray-900"></div>
              </div>
              {/* Number */}
              <div className="w-12 h-12 rounded-full bg-teal-400 dark:bg-teal-600 dark:bg-opacity-25 flex justify-center items-center text-white dark:text-teal-400 font-medium mb-8 lg:mb-12">2</div>
              {/* Mobile mockup */}
              <div className="inline-flex relative justify-center items-center">
              <div className='flex flex-col overflow-hidden rounded-lg shadow-lg'>
                  <div className="flex-shrink-0">
                <Link to ="/VoiceCalls">
                                  <img className="relative max-w-full mx-auto  pointer-events-none" src={VoiceBot} width="290" height="24" style={{ maxWidth: '84.33%' }} alt="App screen 02" />
                </Link>
                </div>
                <div className='flex flex-1 w-full flex-col justify-between'>
                <div className="flex-1">
                  
                    <Link to ="/VoiceCalls">
                      <h1  className=" font-black text-xl text-center mt-4">
                    Voice Calls
                    </h1>
                    </Link>
                  
                  <a  className="mt-2 ">
                    <p className="mt-3 text-base text-gray-500 text-center">Our voice platform has the best sound quality in the business and a 99.99% uptime rate. You're definitely not expected to be at your desk all the time</p>
                  </a>
                </div>
                </div>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center ">
              <div className="w-12 h-12 rounded-full bg-teal-400 dark:bg-teal-600 dark:bg-opacity-25 flex justify-center items-center text-white dark:text-teal-400 font-medium mb-8 lg:mb-12">3</div>
              {/* Mobile mockup */}
              <div className="inline-flex relative justify-center items-center">
              <div className='flex flex-col overflow-hidden rounded-lg shadow-lg'>
                  <div className="flex-shrink-0">
                <Link to ="/EmailSupport">
                                  <img className="relative max-w-full mx-auto pointer-events-none" src={EmailBot} width="290" height="24" style={{ maxWidth: '84.33%' }} alt="App screen 02" />
                </Link>
                </div>
                <div className='flex flex-1 w-full flex-col justify-between'>
                <div className="flex-1">
                  
                    <Link to ="/EmailSupport">
                      <h1  className=" font-black text-xl text-center mt-4">
                    Email Support
                    </h1>
                    </Link>
                  
                  <a  className="mt-2 ">
                    <p className="mt-3 text-base text-gray-500 text-center">Email is quickly surpassing other forms of communication in popularity.Customers demand a high level of service and responsiveness.</p>
                  </a>
                </div>
                </div>
                </div>
              </div>
            </div>


          </div>

          {/* 4-6 */}
          <div className="max-w-sm mx-auto grid gap-12 md:gap-x-6 lg:gap-x-12 md:grid-cols-3 items-start md:max-w-none mt-12">

{/* 4th item */}
<div className="relative flex flex-col items-center ">
  {/* Line connecting (1) and (2) */}
  <div aria-hidden="true" className="absolute h-px opacity-50 bg-gradient-to-r from-white via-teal-400 to-white dark:from-gray-900 dark:via-teal-400 dark:to-gray-900 hidden md:block" style={{ width: 'calc(100% - 48px)', left: 'calc(50% + 48px)', top: '24px' }}>
    <div className="absolute inset-0 border-t border-dashed border-white dark:border-gray-900"></div>
  </div>
  {/* Number */}
  <div className="w-12 h-12 rounded-full bg-teal-400 dark:bg-teal-600 dark:bg-opacity-25 flex justify-center items-center text-white dark:text-teal-400 font-medium mb-8 lg:mb-12">4</div>
  {/* Mobile mockup */}
  <div className="inline-flex relative justify-center items-center">
  <div className='flex flex-col overflow-hidden rounded-lg shadow-lg'>
                  <div className="flex-shrink-0">
                <Link to ="/OrderTaking">
                                  <img className="relative max-w-full mx-auto pointer-events-none" src={OrderBot} width="290" height="24" style={{ maxWidth: '84.33%' }} alt="App screen 02" />
                </Link>
                </div>
                <div className='flex flex-1 w-full flex-col justify-between'>
                <div className="flex-1">
                  
                    <Link to ="/OrderTaking">
                      <h1  className=" font-black text-xl text-center mt-4">
                    Order Taking
                    </h1>
                    </Link>
                  
                  <a  className="mt-2 ">
                    <p className="mt-3 text-base text-gray-500 text-center">We had a rich experience in accurately recording orders, safeguarding data, and delivering orders.</p>
                  </a>
                </div>
                </div>
                </div>
      </div>
</div>



{/* 5th item */}
<div className="relative flex flex-col items-center ">
  {/* Line connecting (2) and (3) */}
  <div aria-hidden="true" className="absolute h-px opacity-50 bg-gradient-to-r from-white via-teal-400 to-white dark:from-gray-900 dark:via-teal-400 dark:to-gray-900 hidden md:block" style={{ width: 'calc(100% - 48px)', left: 'calc(50% + 48px)', top: '24px' }}>
    <div className="absolute inset-0 border-t border-dashed border-white dark:border-gray-900"></div>
  </div>
  {/* Number */}
  <div className="w-12 h-12 rounded-full bg-teal-400 dark:bg-teal-600 dark:bg-opacity-25 flex justify-center items-center text-white dark:text-teal-400 font-medium mb-8 lg:mb-12">5</div>
  {/* Mobile mockup */}
  <div className="inline-flex relative justify-center items-center">
  <div className='flex flex-col overflow-hidden rounded-lg shadow-lg'>
                  <div className="flex-shrink-0">
                <Link to ="/B2BSales">
                                  <img className="relative max-w-full mx-auto pointer-events-none" src={B2BBot} width="290" height="24" style={{ maxWidth: '84.33%' }} alt="App screen 02" />
                </Link>
                </div>
                <div className='flex flex-1 w-full flex-col justify-between'>
                <div className="flex-1">
                  
                    <Link to ="/B2BSales">
                      <h1  className=" font-black text-xl text-center mt-4">
                    B2B Sales
                    </h1>
                    </Link>
                  
                  <a  className="mt-2 ">
                    <p className="mt-3 text-base text-gray-500 text-center">We are quite concerned about sales and has the ability to provide a high-impact, high-powered sales staff to many of our clients that are seeking quick growth.</p>
                  </a>
                </div>
                </div>
                </div>
  </div>
</div>
{/* 6th item */}
<div className="relative flex flex-col items-center ">
  <div className="w-12 h-12 rounded-full bg-teal-400 dark:bg-teal-600 dark:bg-opacity-25 flex justify-center items-center text-white dark:text-teal-400 font-medium mb-8 lg:mb-12">6</div>
  {/* Mobile mockup */}
  <div className="inline-flex relative justify-center items-center">
  <div className='flex flex-col overflow-hidden rounded-lg shadow-lg'>
                  <div className="flex-shrink-0">
                <Link to ="/DataEntry">
                                  <img className="relative max-w-full mx-auto pointer-events-none" src={DataBot} width="290" height="24" style={{ maxWidth: '84.33%' }} alt="App screen 02" />
                </Link>
                </div>
                <div className='flex flex-1 w-full flex-col justify-between'>
                <div className="flex-1">
                  
                    <Link to ="/DataEntry">
                      <h1  className=" font-black text-xl text-center mt-4">
                    Data Entry
                    </h1>
                    </Link>
                  
                  <a  className="mt-2 ">
                    <p className="mt-3 text-base text-gray-500 text-center">We provides insurance companies, hospitals, universities, government agencies, private practices,</p>
                  </a>
                </div>
                </div>
                </div>
  </div>
</div>

{/*  */}

{/*  */}
</div>

        </div>
      </div>
    </section>
  );
}

export default Process;

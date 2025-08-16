import React from "react";
import OfficeDesk from "../images/OfficeDesk.jpg";
import Header from "../partials/Header";
import { Link } from "react-router-dom";
import Footer from "../partials/Footer";
import VoiceBot from "../images/VoiceBot.jpg";

function VoiceCalls() {
  return (
    <div>
      <div>
        {/*  Site header */}
        <Header />

        <section className="relative">
          {/* Background image */}
          <div className="relative inset-0 h-80 pt-16 box-content -z-1">
            <img
              className="absolute inset-0 w-full h-full object-cover opacity-30"
              src={OfficeDesk}
              width="1440"
              height="577"
              alt="About"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900"
              aria-hidden="true"
            ></div>
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
              <div className="pt-56 pb-12 md:pt-56 md:pb-10">
                <div className="text-center">
                  <div className="relative flex justify-center items-center">
                    <div className="absolute" data-aos="fade-down">
                      <h1 className="h1 lg:text-6xl font-red-hat-display">
                        Voice Calls
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex relative justify-center ">
            <li className="list-none">
              <Link
                to="/contact"
                className="font-medium w-full inline-flex items-center justify-center border border-white px-4 py-2 my-2 rounded text-white bg-cruent hover:bg-teal-400 transition duration-150 ease-in-out"
              >
                Get In Touch
              </Link>
            </li>
          </div>
        </section>

        <div className="max-w-none mx-autoitems-start md:max-w-none sm:max-w-none md flex justify-center">
          {/*  Site footer */}
          <div className="relative flex flex-col max-w-5xl items-center p-4 m-8  ">
            {/* Mobile mockup */}
            <div className="inline-flex relative justify-center items-center mt-8">
              <div className="flex flex-col overflow-hidden rounded-lg ">
                <div className="flex-shrink-0">
                  <a>
                    <img
                      className="relative max-w-full mx-auto pointer-events-none mt-8"
                      src={VoiceBot}
                      width="290"
                      height="24"
                      style={{ maxWidth: "84.33%" }}
                      alt="App screen 02"
                    />
                  </a>
                </div>
                <div className="flex flex-1 w-full flex-col justify-between">
                  <div className="flex-1">
                    <a>
                      <h1 className="font-black text-3xl text-center mt-4 h2">
                        Voice Calls
                      </h1>
                    </a>

                    <a className="mt-2 ">
                      <p className="mt-3 text-base text-gray-500 text-center ">
                        Our voice platform has the best sound quality in the
                        business and a 99.99% uptime rate. You're definitely not
                        expected to be at your desk all the time, so when you're
                        not there, Universal Virtual Support is the bottom line
                        to grow your business and offer your clients first class
                        service. Answering customer calls, listening to their
                        concerns and solving problems. Universal Virtual Support
                        handle both inbound and outbound phone conversations
                        with clients to make sure everyone quickly gets the help
                        they need. Our voice call support can provide expert
                        call support services for customer service, technical
                        support, and lead generation, product/service
                        information, ordering assistance, billing related
                        queries, order fulfillment, order verification and other
                        queries to process orders.
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  */}

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20 border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-4xl mx-auto pb-12 md:pb-20 ">
              <h2 className=" text-3xl font-red-hat-display mb-4">
                What makes us Special
              </h2>
              <li className="flex items-center mb-2">
                <svg
                  className="w-3 h-3 fill-current text-teal-400 mr-2 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span className="ml-8 mt-10">
                  You're surely not available at your desk round the clock,
                  which is why when you're not there, universal virtual support
                  is. Raising your business and presenting your clients with a
                  first-class voice call service is fundamental. UVS makes sure
                  you can do both. Information flow and leads are vital
                  components of any growing business. At UVS, we ensure that
                  your business will never miss any phone calls and uphold the
                  flow of leads into your business.
                  {/* <br/> */}
                  <p className="mt-6">
                    UVS enhances your customer satisfaction by lowering customer
                    effort scores. Moreover, useful features and integrations
                    are readily available here to make your phone channel
                    streamlined, effective, and easy to navigate.
                  </p>
                </span>
              </li>

              <li className="flex items-center mb-2 mt-8">
                <span
                  className={`block w-3.5 h-3.5 bg-teal-400 dark:bg-teal-600 border-2 border-white dark:border-gray-900 rounded-full`}
                ></span>
                <span className="ml-8">
                  Benefits your customers and business
                </span>
              </li>

              <li className="flex items-center mb-2 ">
                <span
                  className={`block w-3.5 h-3.5 bg-teal-400 dark:bg-teal-600 border-2 border-white dark:border-gray-900 rounded-full`}
                ></span>
                <span className="ml-8">
                  Truly exemplify speed and efficiency
                </span>
              </li>

              <li className="flex items-center mb-2 ">
                <span
                  className={`block w-3.5 h-3.5 bg-teal-400 dark:bg-teal-600 border-2 border-white dark:border-gray-900 rounded-full`}
                ></span>
                <span className="ml-8">First, call resolution</span>
              </li>

              <li className="flex items-center mb-2 ">
                <span
                  className={`block w-3.5 h-3.5 bg-teal-400 dark:bg-teal-600 border-2 border-white dark:border-gray-900 rounded-full`}
                ></span>
                <span className="ml-8">Simplified customer experience.</span>
              </li>

              <li className="flex items-center mb-2 ">
                <span
                  className={`block w-3.5 h-3.5 bg-teal-400 dark:bg-teal-600 border-2 border-white dark:border-gray-900 rounded-full`}
                ></span>
                <span className="ml-8">
                  Keep up with highly demanding customers and stiffening
                  competition
                </span>
              </li>
              {/* <Link to="/" className="block" aria-label="Cruip">
              <img src={MockupImage} style={{height:"80px",width:"80px",objectFit:"contain",margin:'50px'}}/>
            </Link> */}
            </div>
          </div>
        </div>

        {/*  */}

        {/*  */}
        <div className="max-w-none mx-autoitems-start md:max-w-none sm:max-w-none md flex justify-center mb-12">
          {/*  Site footer */}
          <div className="relative flex flex-col max-w-5xl items-center  ">
            <div className="flex flex-1 w-full flex-col justify-between">
              <div className="flex-1">
                <a>
                  <h1 className="font-black text-3xl text-center  h2">
                    We offer you choose
                  </h1>
                </a>

                <a className="mt-2 ">
                  <p className="mt-3 text-base text-gray-400 text-center ">
                    The phone channel plays a large part in customer success and
                    the quality of your business's customer support. Now more
                    than ever, The phone is an indispensable channel, so you
                    must find ways to use it to your business's advantage. But
                    that doesn't mean getting the right voice call service is
                    not a challenge. We have Trained our support team properly
                    as an investment of time and effort to strengthen your phone
                    calls, and you deserve it. Our experts optimize the way your
                    phone channel operates. Therefore we always ensure that your
                    phone channel, at least, is solid, efficient and crucial,
                    especially since our voice call support tools are readily
                    available to help you pull off excellence.
                  </p>
                </a>
                <li className="flex items-center mb-2  text-gray-400 mt-8">
                  <span
                    className={`block w-3.5 h-3.5 bg-teal-400 dark:bg-teal-600 border-2 border-white dark:border-gray-900 rounded-full`}
                  ></span>
                  <span className="ml-8">
                  Uplift your product/service sales by providing essential information to your customers.
                  </span>
                </li>

                <li className="flex items-center mb-2  text-gray-400 ">
                  <span
                    className={`block w-3.5 h-3.5 bg-teal-400 dark:bg-teal-600 border-2 border-white dark:border-gray-900 rounded-full`}
                  ></span>
                  <span className="ml-8">
                  Assist your clients in placing their orders
                  </span>
                </li>

                <li className="flex items-center mb-2  text-gray-400 ">
                  <span
                    className={`block w-3.5 h-3.5 bg-teal-400 dark:bg-teal-600 border-2 border-white dark:border-gray-900 rounded-full`}
                  ></span>
                  <span className="ml-8">
                  Quickly answer to billing related queries
                  </span>
                </li>

                <li className="flex items-center mb-2  text-gray-400 ">
                  <span
                    className={`block w-3.5 h-3.5 bg-teal-400 dark:bg-teal-600 border-2 border-white dark:border-gray-900 rounded-full`}
                  ></span>
                  <span className="ml-8">Guide your clients about order verification and other queries to order processing</span>
                </li>

                <li className="flex items-center mb-2  text-gray-400 ">
                  <span
                    className={`block w-3.5 h-3.5 bg-teal-400 dark:bg-teal-600 border-2 border-white dark:border-gray-900 rounded-full`}
                  ></span>
                  <span className="ml-8">Resolve complex customer issues that can't fix over other channels</span>
                </li>
              </div>
            </div>
          </div>
        </div>

       






        {/*  */}

        <Footer />
      </div>
    </div>
  );
}

export default VoiceCalls;

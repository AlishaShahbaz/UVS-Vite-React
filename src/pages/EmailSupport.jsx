import React from "react";
import OfficeDesk from "../images/OfficeDesk.jpg";
import Header from "../partials/Header";
import { Link } from "react-router-dom";
import Footer from "../partials/Footer";
import EmailBot from "../images/Email-Support.jpg";

function EmailSupport() {
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
                        Email Support
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
                      src={EmailBot}
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
                        Email Support
                      </h1>
                    </a>

                    <a className="mt-2 ">
                      <p className="mt-3 text-base text-gray-500 text-center ">
                        Email is quickly surpassing other forms of communication
                        in popularity. Customers demand a high level of service
                        and responsiveness (turnaround time and quality of
                        responses) to their email requests, while businesses are
                        inundated with an ever-increasing volume of email. We
                        have a good record of accomplishment of finding,
                        developing, and keeping employees that have excellent
                        language and spelling skills as well as the ability to
                        process emails. Our resources are trained to delve
                        deeply into client concerns and provide the highest
                        initial resolution, which distinguishes us from the
                        competition. Under the circumstances, many businesses
                        are outsourcing their needs for non-voice contact
                        centers, including email support.
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
                  Good innovation to the world's best companies. We exist to
                  empower people to deliver incredibly. Email is quickly
                  surpassing other forms of communication in popularity. The
                  simple reason is that it boosts customer satisfaction and
                  reduces operating costs. At universal virtual support, the
                  average resolution time for Email Support is 1-4 minutes, and
                  we answer millions of emails a month which distinguishes us
                  from the competition. You definitely wouldn’t miss out on any
                  customers with us. You will never regret if you choose us
                  because we have the following traits in our team;
                </span>
              </li>

              <li className="flex items-center mb-2 mt-8">
                <span
                  className={`block w-3.5 h-3.5 bg-teal-400 dark:bg-teal-600 border-2 border-white dark:border-gray-900 rounded-full`}
                ></span>
                <span className="ml-8">Trustworthy</span>
              </li>

              <li className="flex items-center mb-2 ">
                <span
                  className={`block w-3.5 h-3.5 bg-teal-400 dark:bg-teal-600 border-2 border-white dark:border-gray-900 rounded-full`}
                ></span>
                <span className="ml-8">Accessible</span>
              </li>

              <li className="flex items-center mb-2 ">
                <span
                  className={`block w-3.5 h-3.5 bg-teal-400 dark:bg-teal-600 border-2 border-white dark:border-gray-900 rounded-full`}
                ></span>
                <span className="ml-8">Cost-effective</span>
              </li>

              <li className="flex items-center mb-2 ">
                <span
                  className={`block w-3.5 h-3.5 bg-teal-400 dark:bg-teal-600 border-2 border-white dark:border-gray-900 rounded-full`}
                ></span>
                <span className="ml-8">Traceable</span>
              </li>
              <li className="flex items-center mb-2 ">
                <span
                  className={`block w-3.5 h-3.5 bg-teal-400 dark:bg-teal-600 border-2 border-white dark:border-gray-900 rounded-full`}
                ></span>
                <span className="ml-8">Perfect for busy customers</span>
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
                    Email support works as a boon for customer satisfaction. It
                    is an effective support channel that utilizes emails to
                    resolve customer concerns about a product or service. Due to
                    the asynchronous nature of emails, no parties need to be
                    online to initiate or maintain the conversation. With our
                    email support representatives equipped to answer all kinds
                    of queries, leave it to the email customer service experts
                    to transform dissatisfied customers into the biggest
                    endorsers of your brand. Don't wait to win customer trust;
                    contact us to boost your customer satisfaction via our
                    effectual email support services.
                  </p>
                </a>
                <li className="flex items-center mb-2  text-gray-400 mt-8">
                  <span
                    className={`block w-3.5 h-3.5 bg-teal-400 dark:bg-teal-600 border-2 border-white dark:border-gray-900 rounded-full`}
                  ></span>
                  <span className="ml-8">
                    Delve deeply into client concerns
                  </span>
                </li>

                <li className="flex items-center mb-2  text-gray-400 ">
                  <span
                    className={`block w-3.5 h-3.5 bg-teal-400 dark:bg-teal-600 border-2 border-white dark:border-gray-900 rounded-full`}
                  ></span>
                  <span className="ml-8">
                    High level of service and responsiveness
                  </span>
                </li>

                <li className="flex items-center mb-2  text-gray-400 ">
                  <span
                    className={`block w-3.5 h-3.5 bg-teal-400 dark:bg-teal-600 border-2 border-white dark:border-gray-900 rounded-full`}
                  ></span>
                  <span className="ml-8">
                    Fast data transmission and customer relationship management
                  </span>
                </li>

                <li className="flex items-center mb-2  text-gray-400 ">
                  <span
                    className={`block w-3.5 h-3.5 bg-teal-400 dark:bg-teal-600 border-2 border-white dark:border-gray-900 rounded-full`}
                  ></span>
                  <span className="ml-8">
                    Technical and non-technical products and services support
                  </span>
                </li>

                <li className="flex items-center mb-2  text-gray-400 ">
                  <span
                    className={`block w-3.5 h-3.5 bg-teal-400 dark:bg-teal-600 border-2 border-white dark:border-gray-900 rounded-full`}
                  ></span>
                  <span className="ml-8">
                    The best path to expand and maintain customer loyalty
                  </span>
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

export default EmailSupport;

import React from "react";
import OfficeDesk from "../images/OfficeDesk.jpg";
import Header from "../partials/Header";
import { Link } from "react-router-dom";
import Footer from "../partials/Footer";
import ChatBot from "../images/chatBot2.jpg";

function LiveChat() {
  return (
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
                      Live Chat Support
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
                    src={ChatBot}
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
                      Live Chat Support
                    </h1>
                  </a>

                  <a className="mt-2 ">
                    <p className="mt-3 text-base text-gray-500 text-center ">
                      Universal Virtual Support can provide you with a wide
                      range of live chat support services such as forced chat,
                      proactive chat and visitor initiated chat. Our chat
                      support experts are trained to provide expert chat support
                      services for customer service, technical support, lead
                      generation, product/service information, ordering
                      assistance, billing related queries, order fulfillment,
                      order verification and other queries, among others to
                      process orders. We can provide professional and accurate
                      24x7x365 live chat support services to your customers. Our
                      agents are trained to manage multiple chats
                      simultaneously, but what sets us apart is a unique process
                      of designing and leveraging saved responses. Since our
                      rapid chat support services will respond to your
                      customers' questions right away.
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
                Your customers should immediately know how to reach you, and you
                can provide them with instant support. In this fast and digital
                era of technology, it’s important to be efficient with customer
                support as It leads to quick problem resolution, and increases
                customer happiness. We always struggle to provide our clients
                with the best chat support services at universal virtual
                support. Quick and efficient customer support with our Live Chat
                service is the fastest way of responding to customer queries,
                ultimately enhancing your sales. We move your customers 10 times
                faster with our unique and highly active live chat support
                service.
              </span>
            </li>

            <li className="flex items-center mb-2 mt-8">
              <span
                className={`block w-3.5 h-3.5 bg-teal-400 dark:bg-teal-600 border-2 border-white dark:border-gray-900 rounded-full`}
              ></span>
              <span className="ml-8">
                Handle the most complex issues in one go.
              </span>
            </li>

            <li className="flex items-center mb-2 ">
              <span
                className={`block w-3.5 h-3.5 bg-teal-400 dark:bg-teal-600 border-2 border-white dark:border-gray-900 rounded-full`}
              ></span>
              <span className="ml-8">
                Easy to use for customers and agents.
              </span>
            </li>

            <li className="flex items-center mb-2 ">
              <span
                className={`block w-3.5 h-3.5 bg-teal-400 dark:bg-teal-600 border-2 border-white dark:border-gray-900 rounded-full`}
              ></span>
              <span className="ml-8">Solve customer problems proactively.</span>
            </li>

            <li className="flex items-center mb-2 ">
              <span
                className={`block w-3.5 h-3.5 bg-teal-400 dark:bg-teal-600 border-2 border-white dark:border-gray-900 rounded-full`}
              ></span>
              <span className="ml-8">
                Anticipate questions and respond faster.
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
                  At universal virtual support, we offer skilled chat agents to
                  our customers scrolling for live chat support service. We
                  create a chat experience your customers know and love. We
                  always optimize real-time online conversions, increase sales
                  and customer engagement, handle complaints, resolve customer
                  queries, and generate business leads. Moreover, we Connect
                  LiveChat software with apps you use and love. Chat with your
                  customers, send their details to your CRM, manage orders and
                  accept payments. You have organic leads with us, follow up
                  with a sales boost, build customer relationships and win their
                  trust.
                </p>
              </a>
              <li className="flex items-center mb-2  text-gray-400 mt-8">
                <span
                  className={`block w-3.5 h-3.5 bg-teal-400 dark:bg-teal-600 border-2 border-white dark:border-gray-900 rounded-full`}
                ></span>
                <span className="ml-8">
                  A complete customer service platform that delights your
                  customers and fuels your sales.
                </span>
              </li>

              <li className="flex items-center mb-2  text-gray-400 ">
                <span
                  className={`block w-3.5 h-3.5 bg-teal-400 dark:bg-teal-600 border-2 border-white dark:border-gray-900 rounded-full`}
                ></span>
                <span className="ml-8">
                  Professional live chat support services 24/7x365 to your
                  customers.
                </span>
              </li>

              <li className="flex items-center mb-2  text-gray-400 ">
                <span
                  className={`block w-3.5 h-3.5 bg-teal-400 dark:bg-teal-600 border-2 border-white dark:border-gray-900 rounded-full`}
                ></span>
                <span className="ml-8">
                  create a more compelling and personalized experience through
                  real-time online messaging
                </span>
              </li>

              <li className="flex items-center mb-2  text-gray-400 ">
                <span
                  className={`block w-3.5 h-3.5 bg-teal-400 dark:bg-teal-600 border-2 border-white dark:border-gray-900 rounded-full`}
                ></span>
                <span className="ml-8">Manage multiple chats at once.</span>
              </li>
            </div>
          </div>
        </div>
      </div>

      {/*  */}

      <Footer />
    </div>
  );
}

export default LiveChat;

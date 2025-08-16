import React from "react";
import OfficeDesk from "../images/OfficeDesk.jpg";
import Header from "../partials/Header";
import { Link } from "react-router-dom";
import Footer from "../partials/Footer";
import OrderBot from "../images/OrderBot.jpg";

function OrderTaking() {
  return (
    <div>
      {" "}
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
                        Order Taking
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
                      src={OrderBot}
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
                        Order Taking
                      </h1>
                    </a>

                    <a className="mt-2 ">
                      <p className="mt-3 text-base text-gray-500 text-center ">
                        We had a rich experience in accurately recording orders,
                        safeguarding data, and delivering orders. We can monitor
                        the orders from the time they are placed until they are
                        customized or delivered. Order taking and tracking are
                        interrelated activities. Global Virtual Assistance, a
                        company that specializes in business process
                        outsourcing, offers these services to clients.
                        E-commerce websites can execute transactions more
                        quickly with the help of services like order taking and
                        tracking. Order taking services are available to clients
                        in accordance with their demands, such as during regular
                        business hours, after hours (for 24-hour buying and
                        selling), or during busier times or peak seasons of the
                        year.
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
                  Our agents can control your orders systematically and
                  professionally; whether you have a large e-commerce website, a
                  single product or a catalog full of products, they undergo
                  different levels of training before they start handling your
                  orders. It ensures that they know your products from the
                  inside out. The most significant quality of our agents is
                  their ability to upsell and cross-sell products. With a
                  well-crafted order-taking service guide, they offer similar
                  products or advice for an upgrade. When done right, they offer
                  extra value to your customers and business.
                  {/* <br/> */}
                  <p className="mt-6">
                    Choosing the right service provider is crucial as choosing
                    the best recipe ingredients. You will never regret if you
                    choose our services with the following benefits;
                  </p>
                </span>
              </li>

              <li className="flex items-center mb-2 mt-8">
                <span
                  className={`block w-3.5 h-3.5 bg-teal-400 dark:bg-teal-600 border-2 border-white dark:border-gray-900 rounded-full`}
                ></span>
                <span className="ml-8">Reduced costs</span>
              </li>

              <li className="flex items-center mb-2 ">
                <span
                  className={`block w-3.5 h-3.5 bg-teal-400 dark:bg-teal-600 border-2 border-white dark:border-gray-900 rounded-full`}
                ></span>
                <span className="ml-8">
                  Improved customer satisfaction ratings
                </span>
              </li>

              <li className="flex items-center mb-2 ">
                <span
                  className={`block w-3.5 h-3.5 bg-teal-400 dark:bg-teal-600 border-2 border-white dark:border-gray-900 rounded-full`}
                ></span>
                <span className="ml-8">24/7 availability</span>
              </li>

              <li className="flex items-center mb-2 ">
                <span
                  className={`block w-3.5 h-3.5 bg-teal-400 dark:bg-teal-600 border-2 border-white dark:border-gray-900 rounded-full`}
                ></span>
                <span className="ml-8">Well-trained support team</span>
              </li>
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
                    If your customers experience issues placing their orders
                    online, UVS has skilled experts to assist them. Both their
                    foundational skills training and product-specific training
                    aid them in taking orders precisely to minimize mistakes and
                    after-purchase complaints. Our systems effectively allow
                    clients to use their e-commerce site for Ordering, or they
                    might choose one of our in-house customized solutions for
                    assembling order information. We have fully enabled Order
                    taking service, so you are never charged additional fees for
                    nights, holidays or weekends. Your customers can flexibly
                    place orders at any time from any location across the
                    country. You will be free of the burden of handling and
                    assembling your staff to handle Order taking.
                  </p>
                </a>
                <li className="flex items-center mb-2  text-gray-400 mt-8">
                  <span
                    className={`block w-3.5 h-3.5 bg-teal-400 dark:bg-teal-600 border-2 border-white dark:border-gray-900 rounded-full`}
                  ></span>
                  <span className="ml-8">
                  Take orders, track, fulfill them and answer inquiries 

                  </span>
                </li>

                <li className="flex items-center mb-2  text-gray-400 ">
                  <span
                    className={`block w-3.5 h-3.5 bg-teal-400 dark:bg-teal-600 border-2 border-white dark:border-gray-900 rounded-full`}
                  ></span>
                  <span className="ml-8">
                  Execute transactions more quickly 

                  </span>
                </li>

                <li className="flex items-center mb-2  text-gray-400 ">
                  <span
                    className={`block w-3.5 h-3.5 bg-teal-400 dark:bg-teal-600 border-2 border-white dark:border-gray-900 rounded-full`}
                  ></span>
                  <span className="ml-8">
                  Upselling and cross-selling

                  </span>
                </li>

                <li className="flex items-center mb-2  text-gray-400 ">
                  <span
                    className={`block w-3.5 h-3.5 bg-teal-400 dark:bg-teal-600 border-2 border-white dark:border-gray-900 rounded-full`}
                  ></span>
                  <span className="ml-8">
                  Post-purchase customer service
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

export default OrderTaking;

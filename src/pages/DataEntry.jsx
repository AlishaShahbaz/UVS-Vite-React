import React from "react";
import OfficeDesk from "../images/OfficeDesk.jpg";
import Header from "../partials/Header";
import { Link } from "react-router-dom";
import Footer from "../partials/Footer";
import DataBot from "../images/Data-Entry.jpg";

function DataEntry() {
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
                        Data Entry
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
              <div className="flex flex-col overflow-hidden rounded-lg">
                <div className="flex-shrink-0">
                  <a>
                    <img
                      className="relative max-w-full mx-auto pointer-events-none mt-8"
                      src={DataBot}
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
                      <h1 className=" font-black text-3xl text-center mt-4 h2">
                        Data Entry
                      </h1>
                    </a>

                    <a className="mt-2 ">
                      <p className="mt-3 text-base text-gray-500 text-center ">
                        We provides insurance companies, hospitals,
                        universities, government agencies, private practices,
                        cooperate offices and many other offices with data entry
                        and data management services. Our data entry
                        professionals may enter data into word documents,
                        spreadsheets, or the company's software to gather,
                        manage, and track the data your organization requires.
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
                  Outsourcing data maintenance services has proven its worth in
                  terms of increased productivity and profitability. Hire our
                  skilled specialists who are experts in their field to complete
                  your assignment. Our team is trained in processing huge
                  amounts of product data quickly. With the benefits of working
                  from home, Off-hours support allows global organizations to
                  accelerate their business and operations by efficiently
                  providing their services to clients. You may also request a
                  larger team when there is a tight deadline or select a smaller
                  team for the lean season while paying just for the services
                  you utilize. Moreover, you also have the following attractive
                  benefits here;
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
                <span className="ml-8">Fast Delivery</span>
              </li>

              <li className="flex items-center mb-2 ">
                <span
                  className={`block w-3.5 h-3.5 bg-teal-400 dark:bg-teal-600 border-2 border-white dark:border-gray-900 rounded-full`}
                ></span>
                <span className="ml-8">Data Security</span>
              </li>

              <li className="flex items-center mb-2 ">
                <span
                  className={`block w-3.5 h-3.5 bg-teal-400 dark:bg-teal-600 border-2 border-white dark:border-gray-900 rounded-full`}
                ></span>
                <span className="ml-8">Cost and Time saving</span>
              </li>

              <li className="flex items-center mb-2 ">
                <span
                  className={`block w-3.5 h-3.5 bg-teal-400 dark:bg-teal-600 border-2 border-white dark:border-gray-900 rounded-full`}
                ></span>
                <span className="ml-8">Increase Productivity</span>
              </li>

              <li className="flex items-center mb-2 ">
                <span
                  className={`block w-3.5 h-3.5 bg-teal-400 dark:bg-teal-600 border-2 border-white dark:border-gray-900 rounded-full`}
                ></span>
                <span className="ml-8">High Accuracy</span>
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
                    We ensure proper data organization to reduce loss and make
                    your data easily accessible. High-quality data entry support
                    is one of the most valuable assets for businesses as it can
                    be used to compete effectively by creating developmental
                    strategies. The greatest benefit we provide is certainly the
                    time and cost savings. Because In-house data entry requires
                    the hiring of trained persons to perform your data tasks,
                    you have to ensure that the data entered is correct. So,
                    companies must invest heavily in physical infrastructure to
                    house those employees. We use encrypted servers for data
                    transmission and preserve our clients' personal data with
                    the help of the latest software tools and technology. So,
                    Let's avail of our data-maintaining services to boost your
                    productivity and profitability Now!
                  </p>
                </a>
                <li className="flex items-center mb-2  text-gray-400 mt-8">
                  <span
                    className={`block w-3.5 h-3.5 bg-teal-400 dark:bg-teal-600 border-2 border-white dark:border-gray-900 rounded-full`}
                  ></span>
                  <span className="ml-8">
                    Data goes through the double-blind system, i.e., two data
                    entry experts enter each entry, and the system accepts it
                    only when both entries match.
                  </span>
                </li>

                <li className="flex items-center mb-2  text-gray-400 ">
                  <span
                    className={`block w-3.5 h-3.5 bg-teal-400 dark:bg-teal-600 border-2 border-white dark:border-gray-900 rounded-full`}
                  ></span>
                  <span className="ml-8">
                    A separate team of QA inquires about the full data and does
                    QA to ensure the quality and accuracy of data.
                  </span>
                </li>

                <li className="flex items-center mb-2  text-gray-400 ">
                  <span
                    className={`block w-3.5 h-3.5 bg-teal-400 dark:bg-teal-600 border-2 border-white dark:border-gray-900 rounded-full`}
                  ></span>
                  <span className="ml-8">
                    Supervisors stay on the floor to aid the DE teams and answer
                    each question the team might have during the data entry
                    processes.
                  </span>
                </li>

                <li className="flex items-center mb-2  text-gray-400 ">
                  <span
                    className={`block w-3.5 h-3.5 bg-teal-400 dark:bg-teal-600 border-2 border-white dark:border-gray-900 rounded-full`}
                  ></span>
                  <span className="ml-8">
                    Entire data is checked by supervisors at the last stage for
                    the format and other demands of the client before uploading
                    it back to the client.
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

export default DataEntry;

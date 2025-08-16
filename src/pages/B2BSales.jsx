import React from "react";
import OfficeDesk from "../images/OfficeDesk.jpg";
import Header from "../partials/Header";
import { Link } from "react-router-dom";
import Footer from "../partials/Footer";
import B2BBot from "../images/B2B-Sales.jpg";

function B2BSales() {
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
                        B2B Sales
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
                      src={B2BBot}
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
                        B2B Sales
                      </h1>
                    </a>

                    <a className="mt-2 ">
                      <p className="mt-3 text-base text-gray-500 text-center ">
                        We are quite concerned about sales and has the ability
                        to provide a high-impact, high-powered sales staff to
                        many of our clients that are seeking quick growth. With
                        the amazing English speaking abilities, sales
                        experience, and rigorous testing, our enormous staff of
                        superlative salesmen is able to produce greatest sales.
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
                  B2B sales services can provide more than leads. We have a
                  broad knowledge of the marketplace and spent most of our time
                  specializing in the industry. We use our expertise to create
                  quality targeted campaigns tailored specifically towards
                  customers who want your products or services. Moreover, we own
                  all the tools and resources compulsory to find qualified leads
                  and aid you in saving time from doing this yourself.
                  {/* <br/> */}
                  <p className="mt-6">
                    UVS provide customers with the best results they can get
                    from a lead generation service and struggle hard to provide
                    them with the best possible solution. We also expand our
                    network to present you with better partnerships among
                    experienced and talented professionals who help you in
                    driving your success and fulfill your needs while ensuring
                    these sales services are tailored just for you!
                  </p>
                </span>
              </li>

              <li className="flex items-center mb-2 mt-8">
                <span
                  className={`block w-3.5 h-3.5 bg-teal-400 dark:bg-teal-600 border-2 border-white dark:border-gray-900 rounded-full`}
                ></span>
                <span className="ml-8">Lower cost and risk</span>
              </li>

              <li className="flex items-center mb-2 ">
                <span
                  className={`block w-3.5 h-3.5 bg-teal-400 dark:bg-teal-600 border-2 border-white dark:border-gray-900 rounded-full`}
                ></span>
                <span className="ml-8">Sustainability</span>
              </li>

              <li className="flex items-center mb-2 ">
                <span
                  className={`block w-3.5 h-3.5 bg-teal-400 dark:bg-teal-600 border-2 border-white dark:border-gray-900 rounded-full`}
                ></span>
                <span className="ml-8">Identify Qualified Leads Easily</span>
              </li>

              <li className="flex items-center mb-2 ">
                <span
                  className={`block w-3.5 h-3.5 bg-teal-400 dark:bg-teal-600 border-2 border-white dark:border-gray-900 rounded-full`}
                ></span>
                <span className="ml-8">Knowledge transfer</span>
              </li>

              <li className="flex items-center mb-2 ">
                <span
                  className={`block w-3.5 h-3.5 bg-teal-400 dark:bg-teal-600 border-2 border-white dark:border-gray-900 rounded-full`}
                ></span>
                <span className="ml-8">Responsive and adaptable</span>
              </li>

              <li className="flex items-center mb-2 ">
                <span
                  className={`block w-3.5 h-3.5 bg-teal-400 dark:bg-teal-600 border-2 border-white dark:border-gray-900 rounded-full`}
                ></span>
                <span className="ml-8">Access to tools and technology</span>
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
                    B2B sales are something your business cannot live without.
                    Especially in a highly competitive marketplace, sales
                    service helps you control profitability and provides a
                    continuous influx of quality leads. We operate across the
                    Americas, Europe, Emirates, Japan, and the Asia Pacific. We
                    can provide global execution in virtually every language.
                    Our native speakers, operating from multiple regional hubs,
                    comprehend the trends of local business culture. While you
                    also get benefit from our shared learning,
                    globally-standardized reporting, and best practices.
                  </p>
                  <p className="mt-3 text-base text-gray-400 text-center ">
                    We have the best marketing and sales teams with capabilities
                    in phone surveys, lead nurturing, prospecting activities,
                    and setting high-value appointments with pre-qualified leads
                    – all done with utmost professionalism and dedication. More
                    than a mere process, B2B sale is a serious business to us.
                  </p>
                </a>
                <li className="flex items-center mb-2  text-gray-400 mt-8">
                  <span
                    className={`block w-3.5 h-3.5 bg-teal-400 dark:bg-teal-600 border-2 border-white dark:border-gray-900 rounded-full`}
                  ></span>
                  <span className="ml-8">
                    Find and refine out people you want to have as customers
                  </span>
                </li>

                <li className="flex items-center mb-2  text-gray-400 ">
                  <span
                    className={`block w-3.5 h-3.5 bg-teal-400 dark:bg-teal-600 border-2 border-white dark:border-gray-900 rounded-full`}
                  ></span>
                  <span className="ml-8">
                    Enables you to raise recognition for your brand
                  </span>
                </li>

                <li className="flex items-center mb-2  text-gray-400 ">
                  <span
                    className={`block w-3.5 h-3.5 bg-teal-400 dark:bg-teal-600 border-2 border-white dark:border-gray-900 rounded-full`}
                  ></span>
                  <span className="ml-8">
                    Build your credibility among existing and future clients
                  </span>
                </li>

                <li className="flex items-center mb-2  text-gray-400 ">
                  <span
                    className={`block w-3.5 h-3.5 bg-teal-400 dark:bg-teal-600 border-2 border-white dark:border-gray-900 rounded-full`}
                  ></span>
                  <span className="ml-8">
                    Directs you to new opportunities for growth
                  </span>
                </li>
                <li className="flex items-center mb-2  text-gray-400 ">
                  <span
                    className={`block w-3.5 h-3.5 bg-teal-400 dark:bg-teal-600 border-2 border-white dark:border-gray-900 rounded-full`}
                  ></span>
                  <span className="ml-8">
                    Create relevant dialogues with current partners.
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

export default B2BSales;

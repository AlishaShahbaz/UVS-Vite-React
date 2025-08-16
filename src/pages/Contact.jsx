import React, { useState } from "react";
import Header from "../partials/Header";
import PageIllustration from "../partials/PageIllustration";
import Footer from "../partials/Footer";
import "../css/style.css"

function Contact() {
  const [contactData, setContactData] = useState({
    FirstName: "",
    LastName: "",
    Company: "",
    PhoneNumber: "",
    EmailAddress: "",
    Details: "",
  });

  let name, value;

  const handleData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setContactData({ ...contactData, [name]: value });
    console.log(contactData);
  };

  const handleClick = async () => {
    // e.preventdefault();
    const { FirstName, LastName, Company, PhoneNumber, EmailAddress, Details } =
      contactData;
    const res = await fetch(
      "https://uvscontactform-default-rtdb.firebaseio.com/ContactData.json",
      {
        method: "POST",
        Headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({
          FirstName,
          LastName,
          Company,
          PhoneNumber,
          EmailAddress,
          Details,
        }),
      }
    );
    if(res){
      alert("Data Stroed")
    }else{
      alert("Data not Stroed")
    }
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        {/*  Page illustration */}
        <div
          className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>

        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                <h1 className="font-extrabold text-3xl font-red-hat-display mb-4">
                  Get started with <span className="text-teal-500">Uni</span>
                  versal Virtual Support in seconds
                </h1>
                {/* <p className="text-xl text-gray-600 dark:text-gray-400">We'll send you a text with a link to download the app.</p> */}
              </div>

              {/* Contact form */}
              <form className="max-w-xl mx-auto" method="POST">
                <div className="flex flex-wrap -mx-3 mb-5">
                  <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                    <label
                      className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1"
                      htmlFor="first-name"
                    >
                      First Name
                    </label>
                    <input
                      id="first-name"
                      type="text"
                      className="form-input w-full"
                      name="FirstName"
                      value={contactData.FirstName}
                      onChange={handleData}
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1"
                      htmlFor="last-name"
                    >
                      Last Name
                    </label>
                    <input
                      id="last-name"
                      type="text"
                      className="form-input w-full"
                      name="LastName"
                      value={contactData.LastName}
                      onChange={handleData}
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-5">
                  <div className="w-full px-3">
                    <label
                      className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1"
                      htmlFor="company"
                    >
                      Company
                    </label>
                    <input
                      id="company"
                      type="text"
                      className="form-input w-full"
                      name="Company"
                      value={contactData.Company}
                      onChange={handleData}
                      placeholder="Enter your company name"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-5">
                  <div className="w-full px-3">
                    <label
                      className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1"
                      htmlFor="phone"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="form-input w-full"
                      name="PhoneNumber"
                      value={contactData.PhoneNumber}
                      onChange={handleData}
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-5">
                  <div className="w-full px-3">
                    <label
                      className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1"
                      htmlFor="phone"
                    >
                      Email address
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="form-input w-full"
                      name="EmailAddress"
                      value={contactData.EmailAddress}
                      onChange={handleData}
                      placeholder="Enter your Email address"
                      required
                    />
                  </div>
                </div>
                {/* <div className="flex flex-wrap -mx-3 mb-5">
                  <div className="w-full px-3">
                    <label className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1" htmlFor="country">Country</label>
                      <select id="country" className="form-select w-full" required>
                        <option>United States</option>
                        <option>United Kingdom</option>
                        <option>Germany</option>
                      </select>
                  </div>
                </div> */}
                <div className="flex flex-wrap -mx-3 mb-5">
                  <div className="w-full px-3">
                    <div className="flex justify-between items-center mb-1">
                      <label
                        className="block text-gray-800 dark:text-gray-300 text-sm font-medium"
                        htmlFor="message"
                      >
                        Details
                      </label>
                      <span className="text-sm text-gray-500">Optional</span>
                    </div>
                    <textarea
                      id="message"
                      rows="4"
                      className="form-textarea w-full"
                      name="Details"
                      value={contactData.Details}
                      onChange={handleData}
                      placeholder="Write Your Message Here"
                    ></textarea>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mt-6">
                  <div className="w-full px-3">
                    <button
                      onClick={handleClick}
                      className="btn text-white bg-teal-500 hover:bg-teal-400 w-full flex items-center"
                    >
                      Submit
                      <svg
                        className="w-3 h-3 shrink-0 mt-px ml-2"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="fill-current"
                          d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
        {/*  */}
        <div class="mapouter"><div class="gmap_canvas"><iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=8261%20BL%20Kampen&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.whatismyip-address.com"></a><a href="https://www.embedgooglemap.net">how to add a map to wordpress</a></div></div>
        {/*  */}
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Contact;

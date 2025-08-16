import React from 'react'
import OfficeDesk from "../images/OfficeDesk.jpg"
import OfficeWork from "../images/Office-Work.jpg"

function HeroService() {
  return (
    <>
       <div className="relative inset-0 h-80 pt-16 box-content -z-1">
          <img
            className="absolute inset-0 w-full h-full object-cover opacity-30"
            src={OfficeDesk}
            width="1440"
            height="577"
            alt="About"/>
          <div
            className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900"
            aria-hidden="true"></div>
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-56 pb-12 md:pt-56 md:pb-10">
              <div className="text-center">
                <div className="relative flex justify-center items-center">
                  <div className="absolute" data-aos="fade-down">
                  <h1 className="h1 lg:text-6xl font-red-hat-display"><span className="text-teal-500">Ser</span>vices</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default HeroService
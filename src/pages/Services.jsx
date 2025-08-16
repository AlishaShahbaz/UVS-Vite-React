import React from 'react'
import Footer from '../partials/Footer'
import Header from '../partials/Header'
import HeroService from '../partials/HeroService'
import Process from '../partials/Process'


function Services() {
  return (
<div className="flex flex-col min-h-screen overflow-hidden">

{/*  Site header */}
<Header/>
<HeroService/>
<Process/>

{/*  Site footer */}
<Footer/>

</div>
  )
}

export default Services
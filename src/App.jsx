import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import 'aos/dist/aos.css';
import './css/style.css';

import AOS from 'aos';

import Home from './pages/Home';
import Testimonials from './pages/Testimonials';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import About from './pages/About';
import Contact from './pages/Contact';
import Help from './pages/Help';
import PageNotFound from './pages/PageNotFound';
import Services from './pages/Services';
import LiveChat from './pages/LiveChat';
import VoiceCalls from './pages/VoiceCalls';
import EmailSupport from './pages/EmailSupport';
import OrderTaking from './pages/OrderTaking';
import DataEntry from './pages/DataEntry';
import B2BSales from './pages/B2BSales';


function App() {

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 750,
      easing: 'ease-out-quart',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/LiveChatSupport" element={<LiveChat/>} />
        <Route path="/VoiceCalls" element={<VoiceCalls/>} />
        <Route path="/EmailSupport" element={<EmailSupport/>} />
        <Route path="/OrderTaking" element={<OrderTaking/>} />
        <Route path="/DataEntry" element={<DataEntry/>} />
        <Route path="/B2BSales" element={<B2BSales/>} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/blog" element={<BlogPost />} /> */}
        {/* <Route path="/blog-post" element={<Blog />} /> */}
        {/* <Route path="/testimonials" element={<Testimonials />} /> */}
        {/* <Route path="/help" element={<Help />} /> */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;

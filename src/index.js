import React from 'react';
import './index.scss';

//routing imports
import { createRoot } from 'react-dom/client';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

//animation library imports
import AOS from 'aos';
import 'aos/dist/aos.css';

//font imports
import "@fontsource/karantina/300.css";
import "@fontsource/karantina/400.css";
import "@fontsource/montserrat";

//component imports
import MobileMenu from './components/layout/mobile-menu/Mobile-menu';
import Landing from './components/content/landing/Landing';
import About from './components/content/about/About';
import Experience from './components/content/experience/Experience';
import Projects from './components/content/projects/Projects';
import Contact from './components/content/contact/Contact';
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';

//initialise animation library
AOS.init({
  mirror: true
});



//handle resize
let isTablet = false;
let isDesktop = false;
let initialOffset;

const handleResize = () => {
  isDesktop = window.innerWidth >= 1280;
  isTablet = window.innerWidth >= 900;
  initialOffset = window.innerHeight;
}

window.onresize = handleResize();


//Header
let headerOffSet;
let setHeaderOffSet = () => {
    headerOffSet = document.getElementById("header").offsetTop;
}

let header;
let setHeader = () => {
    header = document.getElementById("header");
}

let handleStickyHeader = (initialOffSet) => {
    if(window.pageYOffset >= initialOffSet) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

if(isDesktop == true){
    window.onscroll = () => {
        handleStickyHeader(headerOffSet);
    }
}


//set route structure to be rendered
const routes = (
  <BrowserRouter>
    <div>
      <Landing/>
      { isDesktop
        ?
        <Header
          setHeaderOffSet={setHeaderOffSet}
          setHeader={setHeader}
        />
        :
        <MobileMenu/>
      }
      
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  </BrowserRouter>
);

//define root and render routes
const root = createRoot(document.getElementById('root'));
root.render(routes);
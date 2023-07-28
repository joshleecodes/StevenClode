import React from 'react';
import './index.scss';

//routing imports
import { createRoot } from 'react-dom/client';
import {BrowserRouter, Route, Switch} from 'react-router-dom';



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

//asset imports
import SiteIcon from './assets/imgs/svg/site-logo.svg';
import SiteHoverIcon from './assets/imgs/svg/site-hover-icon.svg';
import DownArrow from './assets/imgs/svg/down-arrow.svg';
import DownArrowHover from './assets/imgs/svg/down-arrow-alt.svg';
import UpArrow from './assets/imgs/svg/up-arrow.svg';
import UpArrowHover from './assets/imgs/svg/up-arrow-alt.svg';


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
    if(window.pageYOffset >= initialOffSet-1) {
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

let handleIconHover = (e) => {
  let icon = e.currentTarget.id;

  if (icon == "nav-landing") { 
      e.currentTarget.src = SiteHoverIcon;
  }
  else if (icon == "landing-arrow") {
      e.currentTarget.src = DownArrowHover;
  }
  else if (icon == "up-arrow") {
    e.currentTarget.src = UpArrowHover;
  }
}

let handleIconHoverOff = (e) => {
  let icon = e.currentTarget.id;
  
  if (icon == "nav-landing") {
      e.currentTarget.src = SiteIcon;
  }
  else if (icon == "landing-arrow") {
    e.currentTarget.src = DownArrow;
  }
  else if (icon == "up-arrow") {
    e.currentTarget.src = UpArrow;
  }
}

//set route structure to be rendered
const routes = (
  <BrowserRouter>
    <div>
      <Landing
          handleIconHover={handleIconHover} 
          handleIconHoverOff={handleIconHoverOff}
      />
      { isDesktop
        ?
        <Header
          handleIconHover={handleIconHover} 
          handleIconHoverOff={handleIconHoverOff}
          setHeaderOffSet={setHeaderOffSet}
          setHeader={setHeader}
        />
        :
        <MobileMenu/>
      }
      
      <About/>
      <Experience/>
      <Projects/>
      <Contact
        handleIconHover={handleIconHover} 
        handleIconHoverOff={handleIconHoverOff}
      />
      <Footer/>
    </div>
  </BrowserRouter>
);

//define root and render routes
const root = createRoot(document.getElementById('root'));
root.render(routes);
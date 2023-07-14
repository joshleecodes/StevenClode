import React from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "@fontsource/karantina/300.css";
import "@fontsource/karantina/400.css";
import './index.scss';


//component imports
import MobileMenu from './components/layout/mobile-menu/Mobile-menu';
import Landing from './components/content/landing/Landing';
import About from './components/content/about/About';
import Experience from './components/content/experience/Experience';

AOS.init({
  mirror: true
});


//set route structure to be rendered
const routes = (
  <BrowserRouter>
    <div>
      <Landing/>
      <MobileMenu/>
      <About/>
      <Experience/>
    </div>
  </BrowserRouter>
);


//define root and render routes
const root = createRoot(document.getElementById('root'));
root.render(routes);
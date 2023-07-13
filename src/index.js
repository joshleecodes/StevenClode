import React from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import "@fontsource/karantina/300.css";
import './index.scss';


//component imports
import MobileMenu from './components/layout/mobile-menu/mobile-menu';
import Landing from './components/content/landing/Landing';
import About from './components/content/about/About';



//set route structure to be rendered
const routes = (
  <BrowserRouter>
    <div>
      <Landing/>
      <MobileMenu/>
    </div>
  </BrowserRouter>
);


//define root and render routes
const root = createRoot(document.getElementById('root'));
root.render(routes);
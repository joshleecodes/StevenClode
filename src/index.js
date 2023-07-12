import React from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './index.scss';


//component imports
import Landing from './components/content/landing/Landing';
import About from './components/content/about/About';



//set route structure to be rendered
const routes = (
  <BrowserRouter>
    <div>
      <Landing/>
      <About/>
    </div>
  </BrowserRouter>
);


//define root and render routes
const root = createRoot(document.getElementById('root'));
root.render(routes);
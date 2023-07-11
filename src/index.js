import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './index.css';


//component imports
import Landing from './components/content/landing/Landing';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Landing />
  </React.StrictMode>
);
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { HashLink as NavLink } from 'react-router-hash-link';

//asset imports
import SiteLogo from './../../../assets/imgs/svg/site-logo.svg';
import DownArrow from './../../../assets/imgs/svg/down-arrow.svg';


export default () => (
  
    <div className="landing-wrapper" id='landing-content'>
      <div className='landing-content-wrapper'>
        <div className="site-logo-wrapper">
          <img className="landing-site-logo" src={SiteLogo}/>
        </div>
        <div className='text-loop-wrapper'>
          <TypeAnimation
            sequence={[
              'Technical Project Management Leadership', 500, 
              'C-Level Stakeholder Management', 500, 
              'Coaching & Talent Development', 500, 
              'National Vendor Management', 500, 
              'Strategic Analysis & Execution', 500
            ]}
            style={{ fontSize: '1.5em' }}
            repeat={Infinity}
            deletionSpeed={70}
          />
        </div>
      </div>
      <div className='landing-arrow-wrapper' >
      <NavLink to="#about-content"><img className='landing-arrow' src={DownArrow}/></NavLink>
      </div>
    </div>
);

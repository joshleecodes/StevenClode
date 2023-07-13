import React from 'react';
import { TypeAnimation } from 'react-type-animation';

//asset imports
import SiteLogo from './../../../assets/imgs/svg/site-logo.svg';


export default () => (
  
    <div className="landing-wrapper">
      <div className="site-logo-wrapper">
        <img className="site-logo" src={SiteLogo}/>
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
);

import React from 'react';

import SiteLogo from './../../../assets/imgs/svg/site-logo-alt.svg';

export default () => (
    <div className='footer-wrapper'>
        <div className="site-logo-wrapper">
            <img className="site-logo" src={SiteLogo}/>
        </div>
        <div className="footer-signature-wrapper">
            <p className="footer-designed footer-text">Designed & Developed by</p>
            <p className="footer-signature footer-text">Josh Lee &copy;2020</p>
        </div>
    </div>
);
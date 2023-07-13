import React from 'react';


//asset imports
import SiteLogo from './../../../assets/imgs/svg/site-logo.svg';
import OpenMenuIcon from './../../../assets/imgs/svg/open-menu.svg';
import CloseMenuIcon from './../../../assets/imgs/svg/close-menu.svg';




export default () => (
<div className='mobile-menu-wrapper'>
    <div className='menu-icon-wrapper'>
        <a className='menu-open'>
            <img
                className='menu-icon'
                src={OpenMenuIcon}
            />
        </a>
        <a className='menu-close'>
            <img
                className='menu-icon'
                src={CloseMenuIcon}
            />
        </a>
    </div>
</div>

);
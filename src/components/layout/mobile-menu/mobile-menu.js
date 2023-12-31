import React from 'react';
import { HashLink as NavLink } from 'react-router-hash-link';

//asset imports
import SiteLogo from './../../../assets/imgs/svg/site-logo.svg';
import OpenMenuIcon from './../../../assets/imgs/svg/open-menu.svg';
import CloseMenuIcon from './../../../assets/imgs/svg/close-menu.svg';
import CV from './../../../assets/CV.pdf';


export default class MobileMenu extends React.Component {
    constructor(props){
        super();

        this.state = {
            currentSection: 'menu-landing',
            menuOpen: false
        }

        this.handleOpenMenu = this.handleOpenMenu.bind(this);
        this.handleCloseMenu = this.handleCloseMenu.bind(this);
    }

    handleOpenMenu() {
        document.getElementsByClassName("menu-open")[0].style.display = "none";
        document.getElementsByClassName("menu-close")[0].style.display = "block";
        document.getElementById("mobile-menu").classList.add("mobile-menu__wrapper-open");
        document.body.style.overflow = "hidden";
        this.setState({menuOpen: true});
    }   

    handleCloseMenu(){
        document.getElementsByClassName("menu-close")[0].style.display = "none";
        document.getElementsByClassName("menu-open")[0].style.display = "flex";
        document.getElementById("mobile-menu").classList.remove("mobile-menu__wrapper-open");
        document.body.style.overflow = "visible";
        let currentSection = this.state.currentSection;

        if(currentSection != "menu-landing"){
            document.getElementById(currentSection).classList.toggle("menu-link__active"); 
        }

        this.setState({menuOpen: false});
    }

    render(){
        return(
            <div className='mobile-menu-wrapper' id="mobile-menu">
                <div className='menu-icon-wrapper'>
                    <a className='menu-open'  onClick={this.handleOpenMenu}>
                        <img
                            className='menu-icon'
                            src={OpenMenuIcon}
                        />
                    </a>
                    <a className='menu-close'  onClick={this.handleCloseMenu}>
                        <img
                            className='menu-icon'
                            src={CloseMenuIcon}
                        />
                    </a>
                </div>
                {this.state.menuOpen &&
                    <div className="menu-list__wrapper">
                        <div className="menu-list">
                            <NavLink className="menu-option" to="#landing-content" onClick={this.handleCloseMenu}><img className="menu__site-icon" id="menu-landing" src={SiteLogo} /></NavLink>
                            <div className="menu-option">
                                <NavLink className="menu-link" id="menu-about" to="#about-content" onClick={this.handleCloseMenu}>ABOUT</NavLink>
                            </div>
                            <div className="menu-option">
                                <NavLink className="menu-link" id="menu-experience" to="#experience-content" onClick={this.handleCloseMenu}>EXPERIENCE</NavLink>
                            </div>
                            <div className="menu-option">
                                <NavLink className="menu-link" id="menu-projects" to="#projects-content" onClick={this.handleCloseMenu}>PROJECTS</NavLink>
                            </div>
                            <div className="menu-option">
                                <NavLink className="menu-link" id="menu-contact" to="#contact-content" onClick={this.handleCloseMenu}>CONTACT</NavLink>
                            </div>
                            <div className="menu-option">
                                <NavLink className="menu-link open-cv" id="menu-cv" to={CV} target="_blank" onClick={this.handleCloseMenu}>OPEN CV</NavLink>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
};
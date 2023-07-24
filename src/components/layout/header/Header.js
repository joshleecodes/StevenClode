import React from 'react';
import { HashLink as NavLink } from 'react-router-hash-link';
import { scrollToTop, scrollTo } from './../../../util/scrollHelper';
import SiteLogo from './../../../assets/imgs/svg/site-logo.svg';


//asset imports
import CV from './../../../assets/CV.pdf'


export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSection: 'nav-landing',
        }
        this.handleActiveSection = this.handleActiveSection.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleActiveSection);
        this.props.setHeaderOffSet();
        this.props.setHeader();
    }

    handleActiveSection() {
        
       let offset = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
       let currentSection = this.state.currentSection;
       let currentSectionClassList = document.getElementById(this.state.currentSection).classList;
        {console.log(offset)}
        if(offset <= 499) {
            if(currentSection != "nav-landing") { currentSectionClassList.toggle("site-link-active"); }
            currentSection = "nav-landing";
        }
        else if(offset >= 500 && offset < 1500 ) {
            if(currentSection != "nav-landing") { currentSectionClassList.toggle("site-link-active"); }
            document.getElementById("#nav-about").classList.add('site-link-active');
            currentSection = "#nav-about";
        }
        else if(offset >= 1501 && offset < 2600) {
            if(currentSection != "nav-landing") { currentSectionClassList.toggle("site-link-active"); }
            document.getElementById("#nav-experience").classList.add('site-link-active');
            currentSection = "#nav-experience";
        }
        else if(offset >= 2601 && offset < 4200) {
            if(currentSection != "nav-landing") { currentSectionClassList.toggle("site-link-active"); }
            document.getElementById("#nav-projects").classList.add('site-link-active');
            currentSection = "#nav-projects";
        }
        else if(offset >= 4201) {
            if(currentSection != "nav-landing") { currentSectionClassList.toggle("site-link-active"); }
            document.getElementById("#nav-contact").classList.add('site-link-active');
            currentSection = "#nav-contact";
        }
        this.setState({currentSection});
    }

    render() {
        return (
            <div id="header" className="header">
                <div className="header__container">
                    <NavLink to="#landing-content" onClick={scrollToTop}>
                        <img 
                            className="header__logo" 
                            id="nav-landing"
                            onClick={this.onNavLinkClick}
                            onMouseOver={this.props.handleIconHover} 
                            onMouseLeave={this.props.handleIconHoverOff}  
                            src={SiteLogo}
                        />
                    </NavLink>
                    <div className="header__content-section">
                        <div className="header__content-section__site-link-wrapper">
                            <NavLink className="header__content-section__site-link" id="#nav-about" to="#about-content" onClick={scrollTo}>ABOUT</NavLink>
                            <NavLink className="header__content-section__site-link" id="#nav-experience" to="#experience-content"  onClick={scrollTo}>EXPERIENCE</NavLink>
                            <NavLink className="header__content-section__site-link" id="#nav-projects" to="#projects-content"  onClick={scrollTo}>PROJECTS</NavLink>                         
                            <NavLink className="header__content-section__site-link" id="#nav-contact" to="#footer-content"  onClick={scrollTo}>CONTACT</NavLink>
                        </div>
                    </div>
                    <NavLink className="header__content-section__site-link header-cv" id="menu-cv" to={CV} target="_blank" onClick={this.handleCloseMenu}>OPEN CV</NavLink>
                </div>
                <div className="header__border"></div>
            </div>
        );
    }
} 
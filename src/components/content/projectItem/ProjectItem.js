import React from 'react';
import Collapsible from 'react-collapsible';

//asset imports
import CollapseArrow from './../../../assets/imgs/svg/collapse-arrow.svg';
import ExpandArrow from './../../../assets/imgs/svg/expand-arrow.svg';

let checkDesktop = () => {
    if(window.innerWidth >= 1280) return true;
    else return false;
};

export default class ProjectItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projectOpen: false
        }
        this.handleProjectOpen = this.handleProjectOpen.bind(this);
    };



    handleProjectOpen() {
        if(this.state.projectOpen === false){
            this.setState({projectOpen: true});
        }
        else this.setState({projectOpen: false});
    }

    render () {
        return (
            <div>
                {checkDesktop()
                    ?
                    <div className='project-tile-wrapper'>
                        <img className="project-tile-img" src={this.props.image}/>
                        <div className="project-tile-text-wrapper">
                            <h2 className="project-tile-title">
                                {this.props.title.toUpperCase()}
                            </h2>
                            <div className="project-tile-body-wrapper">
                                <p className="body-tile-section">
                                    {this.props.description}
                                </p>
                                <p className="body-tile-section">
                                    {this.props.descriptionTwo}
                                </p>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='project-item-wrapper'>
                        <Collapsible 
                            trigger={<div className="project-item-title-wrapper" onClick={this.handleProjectOpen}>
                                        <h2 className="project-item-title">
                                            {this.props.title.toUpperCase()}
                                        </h2>
                                        <a className='project-item-arrow-wrapper'>
                                            <img className='project-item-arrow' id='#project-item-arrow' src={this.state.projectOpen ? CollapseArrow : ExpandArrow} />
                                        </a>
                                    </div>
                                    }
                        >
                            <img className="project-img" src={this.props.image}/>
                            <div className='project-text-wrapper'>    
                                <div className="project-item-body-wrapper">
                                    <p className="body-section">
                                        {this.props.description}
                                    </p>
                                    <p className="body-section">
                                        {this.props.descriptionTwo}
                                    </p>
                                </div>
                            </div>
                        </Collapsible>
                    </div>
                }
            </div>
        )
    }
}
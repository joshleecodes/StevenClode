import React from 'react';
import Collapsible from 'react-collapsible';

export default class ProjectItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    };

    render () {
        return (
            <div className='project-item-wrapper'> 
                <Collapsible 
                    trigger={<div className="project-item-title-wrapper">
                                <h2 className="project-item-title">
                                    {this.props.title.toUpperCase()}
                                </h2>
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
        )
    }
}
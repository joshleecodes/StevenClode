import React from 'react';

export default class ProjectItem extends React.Component {
    constructor(props) {
        super(props);
    };

    render () {
        return (
            <div className='featured-project-wrapper'>
                <h1 className='featured-project-title'>FEATURED PROJECT</h1>
                <div className='featured-project-content'>
                    <div className="featured-projects-name-wrapper">
                        <h2 className="featured-projects-name">{this.props.title.toUpperCase()}</h2>  
                    </div>
                    <img className="featured-projects-image" src={this.props.image}/>
                    <p className="featured-project-body-text">{this.props.description}</p>
                    <p className="featured-project-body-text">{this.props.description}</p>
                </div>
            </div>
        )
    }
}
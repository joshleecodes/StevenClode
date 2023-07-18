import React from 'react';

//asset imports
import ProjectItem from '../projectItem/ProjectItem';
import FeaturedProject from '../featuredProject/FeaturedProject';
import ProjectData from './../../../assets/projects.json';

export default class Projects extends React.Component {
    constructor(){
        super();
        this.state = {
            projectData: [],
            featuredProject: [],
            projectList: [],
            projectListOpen: false
        }
    }

    componentDidMount() {
        let featuredProject = [];
        let projectData = ProjectData.projects.map((project, key) => {
            let projectItem = 
            <ProjectItem
                key={project.id}
                id={project.id}
                title={project.title}
                image={project.image}
                description={project.description} 
                descriptionTwo={project.descriptionTwo}
            />
            if(project.featured === "true") {
                let tempfeaturedProject = 
                    <FeaturedProject
                        key={project.id}
                        title={project.title}
                        image={project.image}
                        description={project.description}
                        descriptionTwo={project.descriptionTwo}
                    />
                featuredProject.push(tempfeaturedProject);
            }
            return projectItem;
        }) 
        this.setState({featuredProject, projectData, projectList: projectData});
    }

    handleCloseProjectList(){
        this.setState({projectListOpen: false});
    }

    render() {

        return (
            
            <div className='projects-wrapper' id='projects-content'>
                <div className='projects-title-wrapper'>
                    <h1>PROJECT LIST</h1>
                </div>
                <div className='project-list-wrapper'>
                    {this.state.projectList}
                </div>
                
            </div>
        )
    }
};
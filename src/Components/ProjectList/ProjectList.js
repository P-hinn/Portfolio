import React from 'react';
import './ProjectList.css';

import Project from '../Project/Project';

class ProjectList extends React.Component{

    render() {
        return (
            <div className="row ProjectList align-items-center justify-content-center">
                {
                    this.props.projects.map(project => {
                        return <Project 
                                project={project}
                                changeActiveProject={this.props.changeActiveProject}
                                key={project.name}
                                />
                    })
                }
            </div>
        )
    }
}

export default ProjectList;
import React from 'react';
import './ProjectList.css';

import Project from '../Project/Project';


class ProjectList extends React.Component{

    render() {
        return (
            <div className="row m-2 ProjectList justify-content-center ">
                <div className="row text-center">
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
            </div>
        )
    }
}

export default ProjectList;
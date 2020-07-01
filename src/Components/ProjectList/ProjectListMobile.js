import React from 'react';

import './ProjectListMobile.css';

import Project from '../Project/Project';


class ProjectListMobile extends React.Component{
    constructor(props){
        super(props);

        this.divMouseDown = this.divMouseDown.bind(this);
    }

    divMouseDown(e) {
        //Prevent closing of Project when scrollBar is clicked
        e.stopPropagation();        
      }

    render() {
        return (
            <div className="row ProjectListMobile justify-content-center " 
                onMouseDown={this.divMouseDown}>
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

export default ProjectListMobile;
import React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';

import './ProjectList.css';

import Project from '../Project/Project';


class ProjectList extends React.Component{
    constructor(props){
        super(props);

        this.myRef = React.createRef();

        this.divMouseDown = this.divMouseDown.bind(this);
        this.scrollTo = this.scrollTo.bind(this);
    }

    divMouseDown(e) {
        e.stopPropagation();        
      }

      scrollTo(ref){
        this.myRef.current.scrollLeft = ref.current.offsetLeft;
     }

    render() {
        return (
            <div className="row m-2 ProjectList justify-content-center " onMouseDown={this.divMouseDown}>
                <ScrollContainer className="row text-center scroll-container" 
                    hideScrollbars={false}
                    horizontal={true} 
                    ref = {this.myRef}>
                {
                    this.props.projects.map(project => {
                        return <Project 
                                project={project}
                                changeActiveProject={this.props.changeActiveProject}
                                key={project.name}
                                scrollTo={this.scrollTo}
                                />
                    })
                }
                </ScrollContainer>
            </div>
        )
    }
}

export default ProjectList;
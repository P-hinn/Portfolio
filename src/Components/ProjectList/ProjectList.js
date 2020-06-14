import React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';

import './ProjectList.css';

import Project from '../Project/Project';


class ProjectList extends React.Component{
    constructor(props){
        super(props);

        this.scrollRef = React.createRef();

        this.divMouseDown = this.divMouseDown.bind(this);
        this.scrollTo = this.scrollTo.bind(this);
    }

    divMouseDown(e) {
        //Prevent closing of Project when scrollBar is clicked
        e.stopPropagation();        
      }

      scrollTo(projectRef){
          //Scroll horizontal bar to clicked Project (still buggy)
        this.scrollRef.current.scrollLeft = projectRef.current.offsetLeft + 100;
        console.log(projectRef.current.offsetLeft);
        console.log(this.scrollRef.current.scrollLeft);
     }

    render() {
        return (
            <div className="row m-2 ProjectList justify-content-center " 
                onMouseDown={this.divMouseDown}>
                <ScrollContainer className="row text-center scroll-container" 
                        hideScrollbars={false}
                        horizontal={true} 
                        ref = {this.scrollRef}>
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
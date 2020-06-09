import React from 'react';
import './Project.css';

class Project extends React.Component{
    constructor(props){
        super(props);

        this.projectRef = React.createRef();

        this.state = {
          active: 'show'
        }

        this.changeActiveProject = this.changeActiveProject.bind(this);
      }

      changeActiveProject() {
        //Set Project Active / Not Active
        this.props.changeActiveProject(this.props.project);
        //Scroll to Active Project
        this.props.scrollTo(this.projectRef);
      }

      onClickVal() {
        //stopPropagation stops the click from bubbling to the parents
        //That prevents the "Anti-outsideclick" to operate inside the projectcontainer
        return !this.props.project.expand ? this.changeActiveProject : (e)=>{e.stopPropagation()}
      }


    render(){

        return (
          
              <div className={`project row align-items-center justify-content-center m-4
              ${this.props.project.expand ? 'col-10' : 'col'}`}
              onMouseDown={this.onClickVal()}
              ref={this.projectRef}
            >
                <div className="col col-m-4 col-xs-12 ">
                  <img src={this.props.project.logo} alt={this.props.project.projectName}></img>
                  <h3>
                    {this.props.project.name}
                  </h3>
                </div>
                <div 
                  className={`${!this.props.project.expand ? 'hide' : 'col-md-8 col-xs-11'} 
                              align-self-center`}>
                    <div className="row align-items-center justify-content-center">
                      <p className="description text-align-center">
                        {this.props.project.description}
                      </p>
                    </div>
                    <div className="row align-items-end justify-content-center">
                      <div className={`col col-m-4 col-xs-6
                          ${this.props.project.gitLink === "Figma" ? 'hide': ''}`}>
                        <a href={this.props.project.gitLink} 
                          className="white"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-github fa-3x"></i>
                          <h6>Github</h6>
                        </a>
                      </div>
                      <div className="col col-m-4 col-xs-6 ">
                        <a href={this.props.project.demoLink} 
                          className="white"
                          target="_blank"
                          rel="noopener noreferrer"  
                        >
                          <i className="far fa-window-maximize fa-3x"></i>
                          <h6>Live Demo</h6>
                        </a>
                      </div>
                    </div>
                </div>
              </div>
          
        );
      }
}

export default Project;
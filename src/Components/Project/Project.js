import React from 'react';
import './Project.css';

import {
  BrowserView,
  MobileView,
  isMobile
} from "react-device-detect";

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

      mobileViewCol(){
        if(isMobile){
          return 'col-12';
        } else{
          return this.props.project.expand ? 'col-md-10 col-12' : 'col';
        }       
      }


    render(){

        return (
          
              <div className={`project row align-items-center justify-content-center m-4
                ${this.mobileViewCol()}`}
                onMouseDown={this.onClickVal()}
                ref={this.projectRef}>
                <div className="col col-4 ">
                  <BrowserView>
                    <div className="row justify-content-center">
                      <img src={this.props.project.logo} alt={this.props.project.projectName}></img>
                    </div>
                  </BrowserView>
                  <div className="row justify-content-center">
                    <h3>{this.props.project.name}</h3>
                  </div>
                  <MobileView>
                    <div className="row justify-content-center m-3">
                      <img src={this.props.project.logo} alt={this.props.project.projectName}></img>
                    </div>
                  </MobileView>
                  <MobileView>
                    <div className="row justify-content-center">
                        <div className={`col
                            ${this.props.project.gitLink === "Figma" ? 'hide': ''}`}>
                          <a href={this.props.project.gitLink} 
                            className="white"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fab fa-github fa-3x"></i>
                          </a>
                        </div>
                        <div className="col ">
                          <a href={this.props.project.demoLink} 
                            className="white"
                            target="_blank"
                            rel="noopener noreferrer" >
                            <i className="far fa-window-maximize fa-3x"></i>
                          </a>
                        </div>
                      </div>
                  </MobileView>
                </div>
                <div 
                  className={`${!this.props.project.expand ? 'hide' : 'col-8'} 
                              align-self-center`}>
                    <div className="row align-items-center justify-content-center">
                      <p className="description text-align-center">
                        {this.props.project.description}
                      </p>
                    </div>
                    <BrowserView>
                      <div className="row align-items-end justify-content-center">
                        <div className={`col col-m-4 col-6
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
                        <div className="col col-m-4 col-6 ">
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
                    </BrowserView>
                </div>
              </div>
          
        );
      }
}

export default Project;
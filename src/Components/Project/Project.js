import React from 'react';
import './Project.css';

class Project extends React.Component{
    constructor(props){
        super(props);

        this.myRef = React.createRef();

        this.state = {
          active: 'show'
        }

        this.changeActiveProject = this.changeActiveProject.bind(this);
      }

      changeActiveProject() {
        this.props.changeActiveProject(this.props.project);
        this.props.scrollTo(this.myRef);
      }

      onClickVal() {
        //stopPropagation stops the click from bubbling to the parents
        //That prevents the "Anti-outsideclick" to operate inside the projectcontainer
        return !this.props.project.expand ? this.changeActiveProject : (e)=>{e.stopPropagation()}
      }


    render(){

        return (
          
              <div className={`project row align-items-center justify-content-center m-4
              ${this.props.project.expand ? 'col-10' : 'col'}
              ${this.props.project.active ? '' : ''}`}
              onMouseDown={this.onClickVal()}
              ref={this.myRef}
            >
                <div className="col">
                  <img src={this.props.project.logo} alt={this.props.project.projectName}></img>
                  <h3>
                    {this.props.project.name}
                  </h3>
                </div>
                <div 
                  className={`${!this.props.project.expand && 'hide'} col-9 align-self-center`}>
                    <div className="row align-items-center justify-content-center">
                      <p className="description text-align-center">
                        {this.props.project.description}
                      </p>
                    </div>
                    <div className="row align-items-end justify-content-center">
                      <div className={`col-3 col-xs-1 ${this.props.project.gitLink === "Figma" ? 'hide': ''}`}>
                        <a href={this.props.project.gitLink} 
                          className="white"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-github fa-3x"></i>
                          <h6>Github</h6>
                        </a>
                      </div>
                      <div className="col-3 col-xs-1">
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
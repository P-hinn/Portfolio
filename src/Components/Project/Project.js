import React from 'react';
import './Project.css';

class Project extends React.Component{
    constructor(props){
        super(props);

        this.state = {
          active: 'show'
        }

        this.changeActiveProject = this.changeActiveProject.bind(this);
        this.checkActive = this.checkActive.bind(this);
      }

      changeActiveProject() {
        this.props.changeActiveProject(this.props.project);
      }

      onClickVal() {
        //stopPropagation stops the click from bubbling to the parents
        //That prevents the "Anti-outsideclick" to operate inside the projectcontainer
        return !this.props.project.expand ? this.changeActiveProject : (e)=>{e.stopPropagation()}
      }

      async checkActive() {
        // Wait
        await new Promise(r => setTimeout(r, 1000));
        const newVal = this.props.project.active ? 'show' : 'hide';

        this.setState({
          active: newVal
        })
      }

    render(){

        return (
          <div className={`
                project row align-items-center justify-content-center
                ${this.checkActive()}
                ${this.state.active}
                ${this.props.project.expand && 'expand'}
              `} 
              onClick={this.onClickVal()}
            >
              <div className="col align-items-center ">
                <img src={this.props.project.logo} alt={this.props.project.projectName}></img>
                <h3>
                  {this.props.project.name}
                </h3>
              </div>
              <div 
                className={`${!this.props.project.expand && 'hide'} col-9 align-self-center`}>
                  <div className="row align-items-start">
                    <p className="description">
                      {this.props.project.description}
                    </p>
                  </div>
                  <div className="row align-items-end justify-content-start">
                    <div className="col-3">
                      <a href={this.props.project.gitLink} 
                        className="white"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-github fa-3x"></i>
                        <h6>Github</h6>
                      </a>
                    </div>
                    <div className="col-3">
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
import React from 'react';
import './App.css';

import ProjectList from '../ProjectList/ProjectList';
import Skills from '../Skills/Skills';

import Jammming from '../utils/Jammming';
import Ravenous from '../utils/Ravenous';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      projects: [Jammming, Ravenous],
      darkLayer: false
    }

    this.changeActiveProject = this.changeActiveProject.bind(this);
    this.closeProject = this.closeProject.bind(this);
  }
  
  changeActiveProject(activeProject){
    const projects = this.state.projects;

    for(let i=0; i<projects.length; i++){
      if(projects[i].name === activeProject.name){
        projects[i].active = true;
        projects[i].expand = true;
      } else{
        projects[i].active = false;
        projects[i].expand = false;
      }
    }

    this.setState({
      projects: projects,
      darkLayer: true
    });
  }

  closeProject(e){
    console.log(e.currentTarget)
    const projects = this.state.projects;

    for(let i=0; i<projects.length; i++){
        projects[i].active = true;
        projects[i].expand = false;
    }

    this.setState({
      projects: projects,
      darkLayer: false
    });
  }

  

  render(){
    return (
      <div className={`App ${this.state.darkLayer && 'darkLayer'}`}
        onClick={this.state.darkLayer ? this.closeProject : ()=>{}}>
        <div className="row m-5">

        </div>
        <div className="row align-items-center justify-content-center">
          <h1>
            Philipp Niestroj
          </h1>
        </div>
        <div className="row align-items-center justify-content-center">
          <h3>
            Software Developer
          </h3>
        </div>
        <div className="backgroundFont">
          Projects
        </div>
        <div className="projects row m-5 align-items-center justify-content-center">
          <ProjectList 
            projects={this.state.projects}
            changeActiveProject={this.changeActiveProject}/>

            {/* <Project project={Jammming} 
            activeProject={this.state.activeProject}
            direction='expandToRight'
            onClick={this.activeProject}/>

            <Project project={Ravenous} 
            activeProject={this.state.activeProject}
            direction='expandToLeft'
            onClick={this.activeProject}/> */}
        </div>
        <div className="skills row align-items-center justify-content-center">
          <h2>
            Skills
          </h2>
        </div>
        <div className="row align-items-center justify-content-center">
          <Skills />
        </div>
      </div>
    );
  }
}

export default App;

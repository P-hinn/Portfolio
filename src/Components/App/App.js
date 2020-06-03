import React from 'react';
import './App.css';

import ProjectList from '../ProjectList/ProjectList';
import Skills from '../Skills/Skills';
import ContactForm from '../ContactForm/ContactForm';
import Footer from '../Footer/Footer';

import Jammming from '../utils/Jammming';
import Ravenous from '../utils/Ravenous';
import Portfolio_2 from '../utils/Portfolio_2';
import Parallax from '../utils/Parallax';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      projects: [Jammming, Ravenous, Portfolio_2, Parallax],
      darkLayer: false,
      showContactForm: false
    }

    this.changeActiveProject = this.changeActiveProject.bind(this);
    this.closeProject = this.closeProject.bind(this);
    this.openForm = this.openForm.bind(this);
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
    const projects = this.state.projects;

    for(let i=0; i<projects.length; i++){
        projects[i].active = true;
        projects[i].expand = false;
    }

    this.setState({
      projects: projects,
      darkLayer: false,
      showContactForm: false
    });
  }

  openForm(){
    this.setState(oldState => ({
      darkLayer: true,
      showContactForm: !oldState.showContactForm
    }));
  }

  

  render(){
    return (
      <div className={`App ${this.state.darkLayer && 'darkLayer'}`}
        onMouseDown={this.state.darkLayer || this.state.showContactForm ? this.closeProject : ()=>{}}>
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
        <div className="row align-items-center justify-content-center backgroundFont">
          Projects
        </div>
        <div className="projects row m-2 m-md-4 align-items-center justify-content-center">
          <div className="col-12">
            <div className="projectMobile"><h3>Projects</h3></div>
            <ProjectList 
              projects={this.state.projects}
              changeActiveProject={this.changeActiveProject}/>
          </div>
        </div>
        <div className="skills row align-items-center justify-content-center">
          <h2>
            Skills
          </h2>
        </div>
        <div className="row align-items-center justify-content-center">
          <Skills />
        </div>
        <div className="row m-5 align-items-center justify-content-center">
          <Footer openForm={this.openForm}/>
        </div>
        <div className={`row justify-content-center align-items-center contact
              ${this.state.showContactForm ? '' : 'hide'}`}>
          <ContactForm active={this.state.showContactForm} 
            changeActiveProject={this.changeActiveProject}/>
        </div>
      </div>
    );
  }
}

export default App;

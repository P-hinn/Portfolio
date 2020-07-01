import React from 'react';
import './App.css';

import {
  BrowserView,
  MobileView,
  isMobile
} from "react-device-detect";

import ProjectList from '../ProjectList/ProjectList';
import ProjectListMobile from '../ProjectList/ProjectListMobile';
import Skills from '../Skills/Skills';
import ContactForm from '../ContactForm/ContactForm';
import Footer from '../Footer/Footer';

import Jammming from '../utils/Jammming';
import Ravenous from '../utils/Ravenous';
import Portfolio_2 from '../utils/Portfolio_2';
import Parallax from '../utils/Parallax';

import starsPic from './background-stars.png';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      projects: [Jammming, Ravenous, Portfolio_2, Parallax],
      darkLayer: false,
      showContactForm: false,
      x: -3236,
      y: -1821
    }

    this.changeActiveProject = this.changeActiveProject.bind(this);
    this.closeProject = this.closeProject.bind(this);
    this.setForm = this.setForm.bind(this);
  }

  componentWillMount(e){
    const projects = this.state.projects;

    if(isMobile){
      for(let i=0; i<projects.length; i++){
          projects[i].active = true;
          projects[i].expand = true;
      }
    }
  }
  
  changeActiveProject(activeProject){
    //Set Project Active
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
    //Close Active Project
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

  setForm(){
    //Open Contact Form
    this.setState(oldState => ({
      darkLayer: !oldState.darkLayer,
      showContactForm: !oldState.showContactForm
    }));
  }

  _onMouseMove(e) {
    let x = (e.nativeEvent.offsetX/2) -3236;
    let y = (e.nativeEvent.offsetY/2) -1821;

    x = x < -3600 ? 3600 : x > -2900 ? -2900: x;
    y = y < -2200 ? 2200 : y > -1400 ? -1400: y;

    this.setState({ x: x, y: y });
  }

  

  render(){
    return (
      <div className={`App ${this.state.darkLayer && 'darkLayer'}`}
        onMouseDown={this.state.darkLayer || this.state.showContactForm ? this.closeProject : ()=>{}}
        onMouseMove={this._onMouseMove.bind(this)}>
          <div className="crop">
          <img className="stars" src={starsPic} alt="backgroundStars"
              style={{left: this.state.x, top: this.state.y}}>
              </img>
          </div>
          <div className="row m-md-5 m-mx-1">

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
              <div className="projectMobile"><h2>Projects</h2></div>
              <BrowserView>
                <ProjectList 
                  projects={this.state.projects}
                  changeActiveProject={this.changeActiveProject}
                  moveStars={this.moveStars}/>
              </BrowserView>
              <MobileView>
                <ProjectListMobile 
                  projects={this.state.projects}
                  moveStars={this.moveStars}/>
              </MobileView>
            </div>
          </div>
          <div className="skills row align-items-center justify-content-center mt-5">
            <h2>
              Skills
            </h2>
          </div>
          <div className="row align-items-center justify-content-center">
            <Skills />
          </div>
          <div className="row m-5 align-items-center justify-content-center">
            <Footer openForm={this.setForm}/>
          </div>
          <div className={`row justify-content-center align-items-center contact
                ${this.state.showContactForm ? '' : 'hide'}`}>
            <ContactForm setForm={this.setForm}
              active={this.state.showContactForm} />
          </div>
      </div>
    );
  }
}

export default App;

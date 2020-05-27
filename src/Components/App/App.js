import React from 'react';
import './App.css';

import Project from '../Project/Project';
import Skills from '../Skills/Skills';

import jammingPic from '../Jammming.png';
import ravenousPic from '../Ravenous.png';

class App extends React.Component {

  project(projectName, description, logo, gitLink, demoLink) {
      this.projectName = projectName;
      this.description = description;
      this.logo = logo;
      this.gitLink = gitLink;
      this.demoLink = demoLink;
    }

  //Project Objects
  //jammming = new this.project('Jammming', 'A React App', 'ImgLink', 'gitlink', 'demolink');

  render(){
    return (
      <div className="App">
        <h1>
          Philipp Niestroj
        </h1>
        <h3>
          Software Developer
        </h3>
        <div className="backgroundFont">
          Projects
        </div>
        <div className="projects">
          <Project project={jammingPic} direction='expandToRight'/>
          <Project project={ravenousPic} direction='expandToLeft'/>
        </div>
        <div className="skills">
          <h2>
            Skills
          </h2>
          <Skills />
        </div>
      </div>
    );
  }
}

export default App;

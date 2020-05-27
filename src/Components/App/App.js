import React from 'react';
import './App.css';

import Project from '../Project/Project';
import Skills from '../Skills/Skills';

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
        <h2>
          Software Developer
        </h2>
        <div className="backgroundFont">
          Projects
        </div>
        <div className="projects">
          <Project project={this.jammming} />
          <Project project={this.ravenous} />
        </div>
        <div className="skills">
          <h3>
            Skills
          </h3>
          <Skills />
        </div>
      </div>
    );
  }
}

export default App;

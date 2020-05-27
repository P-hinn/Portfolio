import React from 'react';
import './Project.css';

class Project extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
          <div className="project">
              <img src={this.logo}></img>
              <h3>
                Project
              </h3>
          </div>
        );
      }
}

export default Project;
import React from 'react';
import './Project.css';

class Project extends React.Component{
    constructor(props){
        super(props);

        this.state = {
          display: 'none'
        }

        this.clickHandler = this.clickHandler.bind(this);
      }

    clickHandler(e){
      e.preventDefault();
      if(this.state.display === 'none'){
        this.setState({
          display: 'inline-block'
        }) 
      } else {
        this.setState({
          display: 'none'
        })
      }

    }

    render(){
        return (
          <div className="project">
              <img src={this.props.project}></img>
              <h3>
                Project
              </h3>
              <div 
                className={`moreInfo ${this.props.direction}`} 
                style={{display: this.state.display}}
                onClick={this.clickHandler}>
                <p>
                  More Info about an Project
                </p>
                <a href='#'>
                  github
                </a>
                <a href='#'>
                  Live Demo
                </a>
              </div>
          </div>
        );
      }
}

export default Project;
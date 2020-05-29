import React from 'react';
import './Skills.css';

import HTML from './HTML.svg';
import CSS from './CSS.svg';
import JS from './JS.svg';
import ReactImg from './React.svg';
import Node from './Node.svg';
import CSharp from './CSharp.svg';
import Git from './Git.svg';
import Figma from './Figma.svg';
import PhotoShop from './PhotoShop.svg';
import Blender from './Blender.svg';
import LV from './LV.svg';
import FLStudio from './FLStudio.svg';


class Skills extends React.Component{
  constructor(props){
    super(props);

    this.logoFactor = this.logoFactor.bind(this);
  }

    logoFactor() {
      let returnVal = [];
      const logoArray = [
        HTML, CSS, JS, ReactImg, Node, CSharp, Git, Figma, PhotoShop, Blender, LV, FLStudio
      ];
      const logoNames = [
        'HTML', 'CSS', 'JS', 'ReactImg', 'Node', 'CSharp', 'Git', 'Figma', 'PhotoShop', 'Blender', 'LV', 'FLStudio'
      ]
      console.log(HTML);

      for(let i=0; i<logoArray.length ; i++) {
        returnVal.push(
        <div className="col m-3" key={[i]}>
          <div className="row align-items-center justify-content-center">
            <img src={logoArray[i]} className="skillLogo"></img> 
          </div>
          <div className="row align-items-center justify-content-center">
            {logoNames[i]} 
          </div>
        </div>);
      }
      return returnVal;
    }

    render(){
        return (
          <div className="row Skills align-items-center justify-content-center">
              {this.logoFactor()}
          </div>
        );
      }
}

export default Skills;
import React from 'react';
import './Skills.css';

import HTML from './Icons/HTML.svg';
import CSS from './Icons/CSS.svg';
import JS from './Icons/JS.svg';
import ReactImg from './Icons/React.svg';
import Node from './Icons/Node.svg';
import CSharp from './Icons/CSharp.svg';
import Git from './Icons/Git.svg';
import Figma from './Icons/Figma.svg';
import PhotoShop from './Icons/PhotoShop.svg';
import Blender from './Icons/Blender.svg';
import LV from './Icons/LV.svg';
import FLStudio from './Icons/FLStudio.svg';


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
        'HTML', 'CSS', 'JS', 'React', 'Node', 'CSharp', 'Git', 'Figma', 'PhotoShop', 'Blender', 'LV', 'FLStudio'
      ]

      for(let i=0; i<logoArray.length ; i++) {
        returnVal.push(
        <div className="col-m-12  mx-1 py-3 px-4 skill" key={[i]}>
          <div className="row align-items-center justify-content-center">
            <img src={logoArray[i]} className="skillLogo" alt=''></img> 
          </div>
          <div className="row m-1 align-items-center justify-content-center">
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
import React from 'react';

import './ContactForm.css';

const API_PATH = 'https://www.philippniestroj.com/TestSuite/ContactForm.php';

class ContactForm extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            nameValue: '',
            emailValue: '',
            textValue: ''
        }

        this.onClickVal = this.onClickVal.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    onClickVal() {
        //stopPropagation stops the click from bubbling to the parents
        //That prevents the "Anti-outsideclick" to operate inside the projectcontainer
        return !this.props.active ? this.props.setForm : (e)=>{e.stopPropagation()}
      }

      handleInputChange(event) {
        const target = event.target;
        const value = target.name === 'isGoing' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

    render(){
        return(
            <div className="contactForm col-m-6 col-11 " onMouseDown={this.onClickVal()} >
                <form action="./ContactForm.php" method="POST">
                    <div className="form-group ">
                        
                        <h3 className="m-4">Contact Me</h3>

                        <label htmlFor="realName">Name</label>
                        <input className="form-control form-control-lg realName" 
                            id="realName"
                            name="nameValue"
                            value={this.state.nameValue} 
                            onChange={this.handleInputChange}/>
                        
                        <label htmlFor="inputEmail">Email Address</label>                        
                        <input type="email" 
                            name="emailValue"
                            className="form-control form-control-lg email" 
                            id="inputEmail"
                            value={this.state.emailValue} 
                            onChange={this.handleInputChange}/>
                        
                        <label htmlFor="textArea">Message</label>
                        <textarea className="form-control form-control-lg message"
                                id="textArea"
                                rows="7"
                                name="textValue"
                                value={this.state.textValue} 
                                onChange={this.handleInputChange}/>
                        
                        <input className="btn btn-outline-light btn-lg m-4"
                            onClick={this.props.setForm}
                            value="close"
                            style={{width: '100px'}} />

                        <input type="submit"
                            className="btn btn-outline-light btn-lg m-4"
                            name="submit"
                             value="Send"
                             style={{width: '100px'}}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default ContactForm;
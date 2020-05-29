import React from 'react';

import './ContactForm.css';

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
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onClickVal() {
        //stopPropagation stops the click from bubbling to the parents
        //That prevents the "Anti-outsideclick" to operate inside the projectcontainer
        return !this.props.active ? this.changeActiveProject : (e)=>{e.stopPropagation()}
      }

      handleInputChange(event) {
        const target = event.target;
        const value = target.name === 'isGoing' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
    
      handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
      }

    render(){
        return(
            <div className="contactForm col-6" onMouseDown={this.onClickVal()} >
                <form action="https://www.philippniestroj.com/cgi-bin/FormMail.pl" method="post"
                acceptCharset="ISO-8859-1" onSubmit={this.handleSubmit}>
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
                        
                        <input type="submit"
                            className="btn btn-outline-light btn-lg m-4 px-5"
                             value="Send"/>


                        <input type="hidden" className="recipient" value="contact@philippniestroj.com" />
                        <input type="hidden" className="subject" value="Subject" />
                        <input type="hidden" className="redirect" 
                        value="https://www.philippniestroj.com/danke.html" />
                        <input type="hidden" className="missing_fields_redirect" 
                        value="https://www.philippniestroj.com/error.html" />
                        <input type="hidden" className="required" value="realname,email,message" />
                    </div>
                </form>
            </div>
        )
    }
}

export default ContactForm;
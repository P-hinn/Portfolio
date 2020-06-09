import React from 'react';

class Footer extends React.Component{
    constructor(props){
        super(props);

        this.openForm = this.openForm.bind(this);
    }

    openForm(){
        this.props.openForm();
    }

    render(){
        return(
            <div className="row justify-content-center align-items-center">
                <div className="col m-4" 
                onClick={this.openForm}>
                     <a href="mailto:contact@philippniestroj.com" className="white"> 
                        <i className="fas fa-envelope fa-3x"></i>
                        <h5>Contact</h5>
                    </a>
                </div>
                <div className="col m-4">
                    <a href="https://github.com/P-hinn" 
                    target="_blank" rel="noopener noreferrer"
                    className="white">
                        <i className="fab fa-github fa-3x"></i>
                        <h5>Github</h5>
                    </a>
                </div>
            </div>
        )
    }
}

export default Footer;
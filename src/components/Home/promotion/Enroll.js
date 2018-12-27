import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import FormFields from '../../ui/formFields';

class Enroll extends Component {

    state={
        formError: false,
        formSucces: '',
        formdata:{
            email:{
                element:'input',
                value:'',
                config:{
                    name:'email_input',
                    type:'email',
                    placeholder:'enter your email'
                },
                validation:{
                    required: true,
                    email:true
                },
                valid: false,
                validationMessage:''
            }
        }
    }

    updateForm(element){
        const newFormdata = {...this.state.formdata} 
        const newElement = {...newFormdata[element.id]}

        newElement.value = element.event.target.value;
        newFormdata[element.id] = newElement

        this.setState ({
            formdata: newFormdata
        })

    }

    submitForm(){

    }

    render() {
        return (
            <Fade>
                <div className="enroll_wrapper">
                    <form onSubmit={(event)=>this.submitForm(event)}>
                        <div className="enroll_title">
                            enter your email
                        </div>
                        <div className="enroll_input"> 
                            <FormFields
                                id={'email'}
                                formdata={this.state.formdata.email}
                                change={(element)=>this.updateForm(element)}

                            />
                        </div>
                    </form>
                </div>
            </Fade>
        );
    }
}

export default Enroll;
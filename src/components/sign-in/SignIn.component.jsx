import React, { Component } from 'react'
import CustomButton from '../custom-button/CustomButton.component';
import FormInput from '../form-input/FormInput.component';
import './SignIn.style.css';

export class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        }
    }

handleSubmit = (e)=>{
    e.preventDefault();
    this.setState({email:'',password:''});
}

handleChange = (e)=>{
    const{value,name} = e.target;
    this.setState({[name]:value});

}






    render() {
        return (
            <div className='sign-in'>
            <h2>I Already Have An Account</h2>
            <span>Sign In With Your Email And Password</span>


            <form onSubmit={this.handleSubmit}>
                <FormInput 
                type="email" 
                name='email'
                value={this.state.email} 
                handleChange={this.handleChange}
                required
                label='email'
                  />


                <FormInput 
                type="password"
                name='password'
                value={this.state.password}
                handleChange={this.handleChange}
                 required 
                 label='password'
                 />

             
             <CustomButton type='submit'>sign in </CustomButton>





            </form>
            
        </div>
        )
    }
}

export default SignIn;

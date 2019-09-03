import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import{signUpStart} from '../../redux/user/user.actions';
import {connect} from 'react-redux';
import './sign-up.styles.scss';

class SignUp extends React.Component{
    constructor(){
        super();
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleSubmit= async event =>{
        event.preventDefault();
        const {displayName,email,password,confirmPassword}=this.state;
        const{ signUpStart}=this.props;
        if(password !== confirmPassword){
            alert("passowrd don't match");
            return;
        }
        signUpStart({displayName,email,password})
    }

    handleChange=event =>{
        const{name,value}=event.target;
        this.setState({
            [name]:value
        }); 
    }

    render(){
        const {displayName,email,password,confirmPassword}=this.state;
        return(
           <div className="sign-up">
           <h2 className="title">I dont have a count</h2>
           <span>Sign up with your email and password</span>
           <form className="sign-up-form" onSubmit={this.handleSubmit}>
            <FormInput 
            type='text'
             name='displayName' 
             value={displayName} 
             handleChange={this.handleChange}
             label='Display Name'
             required
              />
            
              <FormInput 
              type='email'
               name='email' 
               value={email} 
               handleChange={this.handleChange}
               label='Email'
               required
                />
            
                

                <FormInput 
                type='password'
                 name='password' 
                 value={password} 
                 handleChange={this.handleChange}
                 label='Password'
                 required
                  />
            
                  

                  <FormInput 
                  type='password'
                   name='confirmPassword' 
                   value={confirmPassword} 
                   handleChange={this.handleChange}
                   label='Confirn Password'
                   required
                    />
                <CustomButton type="submit">SIGN UP</CustomButton>
           
           </form> 
           
           </div> 
        )

    }
}

const mapDispatchToProps=dispatch=>({
    signUpStart:(userCredentials)=>dispatch(signUpStart(userCredentials))
})

export default connect(null,mapDispatchToProps)(SignUp) ;
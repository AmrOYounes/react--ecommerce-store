import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from  '../../components/custom-button/custom-button.component';
import {signInWithGoogle,auth} from '../../firebase/firebase.utils.js';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email: '',
            password: ''
        }
    }


    handleSubmit= async event =>{ 
        event.preventDefault();
        const {email,password}=this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'',password:''});
        }catch(error){
            console.log(error);
        }
        
    }

    handleChange=event=>{
        const{value ,name}=event.target;
        this.setState({
            [name]:value
        })
    }

    render(){
        return(

            <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
            <FormInput label="email" name="email" type="email" value={this.state.email} required  handleChange={this.handleChange}/>
             
            <FormInput
            label="password"
            name="password" 
            type="password"
             value={this.state.password} 
             required 
             handleChange={this.handleChange} />
            <div className="buttons">
            <CustomButton type="submit"> Sign in</CustomButton>
            <CustomButton  onClick={signInWithGoogle} isGoogleSignIn > Sign in with Google</CustomButton>
            </div>
            
            
            </form>

            </div>
        )
    }
}
 export default SignIn ;
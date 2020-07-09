import React from 'react';
import './sign-in-styles.scss';
import FormInput from '../form-input/form-input-component'

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event)=>{
        event.preventDefault();

        this.setState({email:'', password:''});
    }

    handleChange = (event) =>{
        const {value, name} = event.target;
        this.setState({[name]: value}) //event.target.name:event.target.value
    };

    render(){
        return(

<div className='sign-in'>
    <div>{this.state.email}        {this.state.password} </div>
    <form onSubmit={this.handleSubmit}>
        <FormInput name='email' value={this.state.email}
                   label='Email' handleChange={this.handleChange} type='email'/>

        <FormInput name='password' label='Mot de passe' handleChange={this.handleChange} value={this.state.password} type='password'/>

        <input type='submit' value='Valider' />
    </form>
</div>
        )
    }
}

export default SignIn;
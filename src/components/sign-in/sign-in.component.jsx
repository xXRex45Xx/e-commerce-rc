import React from "react";

import { signInWithGoogle, signIn } from "../../firebase/firebase.utils";
import { Navigate } from "react-router-dom";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import './sign-in.styles.scss'

class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            afterSignIn: false
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const { email, password } = this.state;

        await signIn(email, password).catch(err => console.log(err))
        this.setState({
            email: '',
            password: '',
            afterSignIn: true
        })
    }

    handleChange = e => {
        const { value, name } = e.target
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="sign-in">
                {this.state.afterSignIn ? <Navigate to='/' /> : null}
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        handleChange={this.handleChange}
                        value={this.state.email}
                        type="email"
                        label="Email"
                        required
                    />
                    <FormInput
                        name="password"
                        value={this.state.password}
                        type="password"
                        onChange={this.handleChange}
                        label="Password"
                        required />
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton type="button" onClick={async () => {
                            await signInWithGoogle();
                            this.setState({ afterSignIn: true })

                        }} isGoogleSignIn>Sign In With Google</CustomButton>

                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn
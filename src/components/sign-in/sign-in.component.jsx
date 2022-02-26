import React from "react";
import { connect } from "react-redux";

import { signInWithGoogle, signIn } from "../../firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { setLoginCreds } from "../../redux/user/user.action";
import './sign-in.styles.scss';

class SignIn extends React.Component {

    handleSubmit = async (e) => {
        e.preventDefault()
        const { email, password } = this.props;

        const signInPromise =  signIn(email, password);
        
        signInPromise.then(value => {
            this.props.setLoginCreds({
                ...this.props,
                email: '',
                password: ''
            })
            if(!value){
                this.props.setLoginCreds({
                    ...this.props,
                    incorrectPassword: true
                })
            }
        })
    }

    handleChange = e => {
        const { value, name } = e.target
        this.props.setLoginCreds({
            ...this.props,
            [name]: value
        });
        this.props.setLoginCreds({
            ...this.props,
            [name]: value
        });
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                {this.props.incorrectPassword ? <span>Incorrect Username or Password</span> : null}
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        handleChange={this.handleChange}
                        value={this.props.email}
                        type="email"
                        label="Email"
                        required
                    />
                    <FormInput
                        name="password"
                        value={this.props.password}
                        type="password"
                        onChange={this.handleChange}
                        label="Password"
                        required />
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton type="button"
                            onClick={async () => await signInWithGoogle()}
                            isGoogleSignIn>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = ({ user }) => ({
    ...user.loginCreds
});


const mapDispatchToProps = dispatch => ({
    setLoginCreds: loginCreds => dispatch(setLoginCreds(loginCreds))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
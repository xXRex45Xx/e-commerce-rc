import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { createUserProfileDocument, createUser } from "../../firebase/firebase.utils";
import { setSignUpInfo } from "../../redux/user/user.action";
import { connect } from "react-redux";
import { selectSignUpInfo } from "../../redux/user/user.selector";

import './sign-up.styles.scss'

class SignUp extends React.Component {

    handleSubmit = async e => {
        const { displayName, email, password, confirmPassword } = this.props;
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        await createUser(email, password)
            .then(value => {
                if (value) {
                    const { user } = value;
                    createUserProfileDocument(user, { displayName })
                        .then(value => {
                            if (!value) {
                                console.log("An error occured!")
                            }
                        })
                }
            })
            .catch(err => console.log(err))
        this.setSignUpInfo({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        })
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.props.setSignUpInfo({
            ...this.props,
            [name]: value
        });
    }

    render() {
        return (
            <div className="sign-up">
                <h2 className="title">I don't have an account.</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={this.props.displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={this.props.email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={this.props.password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={this.props.confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Paasssword'
                        required
                    />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...selectSignUpInfo(state)
});

const mapDispatchToProps = dispatch => ({
    setSignUpInfo: signUpInfo => dispatch(setSignUpInfo(signUpInfo))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
import userActionTypes from "./user.types";

const INITIAL_STATE = {
    currentUser: null,
    loginCreds: {
        email: '',
        password: '',
        incorrectPassword: false
    },
    signUpInfo: {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            };
        case userActionTypes.SET_LOGIN_CREDS:
            return {
                ...state,
                loginCreds: action.payload
            };
        case userActionTypes.SET_SIGNUP_INFO:
            return{
                ...state,
                signUpInfo: action.payload
            }
        default:
            return state;
    }
};

export default userReducer;
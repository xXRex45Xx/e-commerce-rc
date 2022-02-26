import userActionTypes from "./user.types"

export const setCurrentUser = user => ({
    type: userActionTypes.SET_CURRENT_USER,
    payload: user
});

export const setLoginCreds = loginCreds => ({
    type: userActionTypes.SET_LOGIN_CREDS,
    payload: loginCreds
});

export const setSignUpInfo = signUpInfo => ({
    type: userActionTypes.SET_SIGNUP_INFO,
    payload: signUpInfo
})
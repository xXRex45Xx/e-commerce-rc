import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser
);

export const selectLoginCreds = createSelector(
    [selectUser],
    user => user.loginCreds
);

export const selectSignUpInfo = createSelector(
    [selectUser],
    user => user.signUpInfo
);
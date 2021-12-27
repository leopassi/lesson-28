import UserActionTypes from './user.types';

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});

export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START
});

export const googleSignInSuccess = (user) => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_SUCCESS,
    payload: user
});

export const googleSignInFailure = (error) => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_FAILURE,
    payload: error
});

export const emailSignInStart = (emailAndPassword) => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
});

export const emailSignInSuccess = (user) => ({
    type: UserActionTypes.EMAIL_SIGN_IN_SUCCESS,
    payload: user
});

export const emailSignInFailure = (error) => ({
    type: UserActionTypes.EMAIL_SIGN_IN_FAILURE,
    payload: error
});

export const checkUserSessionStart = () => ({
    type: UserActionTypes.CHECK_USER_SESSION_START
});

export const checkUserSessionSuccess = (user) => ({
    type: UserActionTypes.CHECK_USER_SESSION_SUCCESS,
    payload: user
});

export const checkUserSessionFailure = (error) => ({
    type: UserActionTypes.CHECK_USER_SESSION_FAILURE,
    payload: error
});

export const signOutStart = () => ({
    type: UserActionTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS
});

export const signOutFailure = (error) => ({
    type: UserActionTypes.SIGN_OUT_FAILURE,
    payload: error
});

export const signUpStart = (email, password, displayName) => ({
    type: UserActionTypes.SIGN_UP_START,
    payload: { email, password, displayName }
});

export const signUpSuccess = ({ user, displayName }) => ({
    type: UserActionTypes.SIGN_UP_SUCCESS,
    payload: { user, displayName }
});

export const signUpFailure = (error) => ({
    type: UserActionTypes.SIGN_UP_FAILURE,
    payload: error
});

export const paymentSuccess = () => ({
    type: UserActionTypes.PAYMENT_SUCCESS
});
import { takeLatest, put, all, call } from 'redux-saga/effects'

// import { googleSignInStart, googleSignInSuccess, googleSignInFailure } from "./user.actions";
import UserActionTypes from './user.types'

import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase.utils'
import {
  googleSignInFailure,
  googleSignInSuccess,
  checkUserSessionSuccess,
  checkUserSessionFailure,
  signOutFailure,
  signOutSuccess,
  signUpFailure,
  signUpSuccess,
  emailSignInSuccess,
  emailSignInFailure,
  // signInSuccess,
  // signInFailure,
} from './user.actions'

export function * getSnapshotFromUserAuth (userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    )
    const userSnapshot = yield userRef.get()
    yield put(emailSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
  } catch (error) {
    yield put(emailSignInFailure(error))
  }
}

export function * signInWithGoogle () {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider)
    // console.log(userRef);
    const userRef = yield call(createUserProfileDocument, user)

    const snapshot = yield userRef.get()

    yield put(
      googleSignInSuccess({ userIn: snapshot.id, ...snapshot.data() })
    )
  } catch (error) {
    yield put(googleSignInFailure(error))
  }
}

export function * onGoogleSignInStart () {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function * signInWithEmail ({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password)
    yield getSnapshotFromUserAuth(user)
  } catch (error) {
    yield put(emailSignInFailure(error))
  }
}

export function * onEmailSignInStart () {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function * checkingUserSession () {
  try {
    const userAuth = yield getCurrentUser()
    if (!userAuth) return

    const userRef = yield call(createUserProfileDocument, userAuth)
    const snapshot = yield userRef.get()

    yield put(
      checkUserSessionSuccess({ userIn: snapshot.id, ...snapshot.data() })
    )
  } catch (error) {
    yield put(checkUserSessionFailure(error))
  }
}

export function * onCheckUserSessionStart () {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION_START, checkingUserSession)
}

export function * signOutUser () {
  try {
    yield auth.signOut()
    yield put(signOutSuccess())
  } catch (error) {
    yield put(signOutFailure(error))
  }
}
export function * onSignOutStart () {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOutUser)
}

export function * signUp ({ payload: { email, password, displayName } }) {
  try {
    // console.log('userCredentials is = ' + userCredentials);

    // const { email, password, displayName } = userCredentials;
    console.log('valeur email lue= ' + email)
    const { user } = yield auth.createUserWithEmailAndPassword(email, password)

    console.log('Agr displayName = ' + displayName)

    yield put(signUpSuccess({ user, displayName }))
  } catch (error) {
    yield put(signUpFailure(error))
  }
}

export function * onSignUpStart () {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp)
}

export function * signInAfterSignUp ({ payload: { user, displayName } }) {
  try {
    const userRef = yield call(createUserProfileDocument, user, { displayName })

    const snapshot = yield userRef.get()

    yield put(
      emailSignInSuccess({ userIn: snapshot.id, ...snapshot.data() })
    )
  } catch (error) {
    yield put(emailSignInFailure(error))
  }
}

export function * onSignUpSuccess () {
  yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function * userSagas () {
  yield all([call(onGoogleSignInStart), call(onEmailSignInStart),
    call(onCheckUserSessionStart), call(onSignOutStart), call(onSignUpStart),
    call(onSignUpSuccess)
  ])
}

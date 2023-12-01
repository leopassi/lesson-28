import { all, call, takeLatest, put, takeEvery } from 'redux-saga/effects'

import UserActionTypes from '../user/user.types'

import { clearCart } from './cart.actions'

export function * clearCartOnSignOut () {
  yield put(clearCart())
}

export function * onSignOutSuccess () {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
}

export function * onPaymentSuccess () {
  yield takeEvery(UserActionTypes.PAYMENT_SUCCESS, clearCartOnSignOut) // On réutilise ce clear, car il existe déjà
}

export function * cartSagas () {
  yield all([call(onSignOutSuccess), call(onPaymentSuccess)])
}

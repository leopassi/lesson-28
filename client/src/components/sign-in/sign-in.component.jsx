import React, { useState } from 'react'
import { connect } from 'react-redux'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

// import { auth /* signInWithGoogle */ } from '../../firebase/firebase.utils'

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'
import { useTranslation } from 'react-i18next'

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from './sign-in.styles'

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({ email: '', password: '' })

  const { email, password } = userCredentials

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     email: '',
  //     password: ''
  //   };
  // }

  const handleSubmit = async event => {
    event.preventDefault()

    emailSignInStart(email, password)

    // try {
    //   await auth.signInWithEmailAndPassword(email, password);
    //   this.setState({ email: '', password: '' });
    // } catch (error) {
    //   console.log(error);
    // }
  }

  const handleChange = event => {
    const { value, name } = event.target

    // HOOK STATE avec 2 propriétés ==> Update avec Spread Operator !!
    // Mais on peut aussi créer 2 HOOK STATE séparés; et faire un Update habituel.
    setUserCredentials({ ...userCredentials, [name]: value })
  }

  const { t } = useTranslation()

  // const { googleSignInStart} = this.props;

  return (
    <SignInContainer>
      <SignInTitle>{t('I already have an account')}</SignInTitle>
      <span>{t('Sign in with your email and password')}</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          handleChange={handleChange}
          value={email}
          label='email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          handleChange={handleChange}
          label={t('password')}
          required
        />
        <ButtonsBarContainer>
          <CustomButton type='submit'> {t('Sign in')} </CustomButton>
          <CustomButton
            type='button'
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            {t('Sign in with Google')}
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  )
}

const mapDispatchToProps = dispatch => ({

  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn)

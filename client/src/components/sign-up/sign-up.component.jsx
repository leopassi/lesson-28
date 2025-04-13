import React from 'react';
import {connect} from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

// import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import {
  SignUpContainer,
  SignUpTitle,
  SignUpButtonContainer,
} from "./sign-up.styles";
import {signUpStart} from '../../redux/user/user.actions';
import { Trans, withTranslation } from 'react-i18next';



class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;
    const { signUpStart, t } = this.props;

    if (password !== confirmPassword) {
      alert(`${t('passwords match')}`);
      return;
    }

    // CONTROLE DE VALIDITE DU MAIL A FAIRE !!!
    // ====> UTILISATION DE YUP ???

    //// APPEL DE L'ACTION COTE SAGA ICI; AVEC ASYNC AWAIT ???
      const userCredentials = {email: email, password: password, displayName: displayName};
      console.log(userCredentials);
      console.log('Value Mail = '+ email);
    signUpStart(email, password, displayName);

      // await createUserProfileDocument(user, { displayName });
  
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    const { t } = this.props;

    return (
      <SignUpContainer>
        <SignUpTitle>
          <Trans i18nKey="I do not have a account">
            I do not have a account
          </Trans>
        </SignUpTitle>
        <span>
          <Trans i18nKey="Sign up with your email and password">
            Sign up with your email and password
          </Trans>
        </span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label={t("Display Name")}
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label={t("Password")}
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label={t("Confirm Password")}
            required
          />
          <SignUpButtonContainer>
            <CustomButton type="submit">
              <Trans i18nKey="SIGN UP">SIGN UP</Trans>
            </CustomButton>
          </SignUpButtonContainer>
        </form>
      </SignUpContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signUpStart: (email, password, displayName) => dispatch(signUpStart(email, password, displayName))
});

export default withTranslation() (connect(null, mapDispatchToProps)(SignUp));

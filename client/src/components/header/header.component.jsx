import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { signOutStart} from '../../redux/user/user.actions';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import { useTranslation } from 'react-i18next';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  WelcomeContainer,
  WelcomeMessage,
  SwitchContainer
} from './header.styles';

// const lngs = {
//   en: { nativeName: 'English' },
//   fr: { nativeName: 'Français' }
// };

const Header = ({ currentUser, hidden, signOutStart }) => {
  const { t, i18n } = useTranslation();

  const doSomething = () => {
    const obj = document.getElementById('langs');
    const btnValue = obj.options[obj.selectedIndex].value;
    i18n.changeLanguage(btnValue);
  }

  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      {currentUser ?  (<WelcomeContainer>
        <WelcomeMessage>{`${t('welcome')}`} </WelcomeMessage> 
        <strong> {`${currentUser.displayName.toUpperCase()}`} </strong>
      </WelcomeContainer>)
      : null}
    
      <OptionsContainer>
        <SwitchContainer>
          {/* <LanguageIcon /> */}
          <select name="languages" id="langs" onChange={() => doSomething()}>
            <option value="en" selected>English</option>
            <option value="fr">Français</option>
          </select>
        </SwitchContainer>
        {/* <div>
        {Object.keys(lngs).map((lng) => (
          <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => {
            i18n.changeLanguage(lng);
          }}
          >
            {lngs[lng].nativeName}
          </button>
        ))}
      </div> */}

        <OptionLink to='/shop'>{t('shop')}</OptionLink>
        {/* <OptionLink to='/shop'>CONTACT</OptionLink> */}
        {currentUser ? (
          <OptionLink as='div' onClick={() => signOutStart()}>
            {t('signOut')}
          </OptionLink>
      ) : (
        <OptionLink to='/signin'>{t('signIn')}</OptionLink>
      )}
        {console.log(currentUser)}
        {currentUser ? console.log('Nom User = ' + currentUser.displayName): console.log('NoUser')
      }
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
);
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

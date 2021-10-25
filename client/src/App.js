import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { GlobalStyles } from './global.styles';

// import HomePage from './pages/homepage/homepage.component';
// import ShopPage from './pages/shop/shop.component';

// import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
// import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';

import { checkUserSessionStart } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import ErrorBoundary from './components/error-boundary/error-boundary.components';

const HomePage = lazy(() => import ('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import ('./pages/shop/shop.component'));
const SignInAndSignUpPage = lazy(() => import ('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));
const CheckoutPage = lazy(() => import ('./pages/checkout/checkout.component'));
// const Header = lazy(() => import ('./components/header/header.component'));

// const renderLoader = () => <p>Loading</p>;



class App extends React.Component {

        unsubscribeFromAuth = null;

        componentDidMount() {
            const { checkUserSessionStart } = this.props;
            checkUserSessionStart();

            // const { setCurrentUser } = this.props;

            // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            //   if (userAuth) {
            //     const userRef = await createUserProfileDocument(userAuth);

            //     userRef.onSnapshot(snapShot => {
            //       setCurrentUser({
            //         id: snapShot.id,
            //         ...snapShot.data()
            //       });
            //     });
            //   }

            //   // else "implicite" ????
            //   setCurrentUser(userAuth);
            // });
        }

        // Implicitemnet: componentWillUnmount sait qu'il va "désactiver" ce qui est appelé en son sein
        componentWillUnmount() {
            this.unsubscribeFromAuth(); // = null; // Correction PERSO ??
            // console.log('Celui de fin =' + this.unsubscribeFromAuth());
            // console.log('Celui de fin =' + this.unsubscribeFromAuth());

        }

        render() {
            return ( 
                <div>
                <GlobalStyles />
                <Header />
                <Switch > 
                    <ErrorBoundary> 
                        <Suspense fallback = { <Spinner /> } >   
                            <Route exact path ='/' component = { HomePage } />    
                        

                            <Route path = '/shop'
                            component = { ShopPage }
                            />   
                            <Route exact path = '/checkout'
                            component = { CheckoutPage }
                            /> 
                            <Route exact path = '/signin'
                            render = {
                                () =>
                                this.props.currentUser ? ( <
                                    Redirect to = '/' />
                                ) : ( <
                                    SignInAndSignUpPage />
                                )
                            }
                            />
                        </Suspense >
                     </ErrorBoundary>
                </Switch >   
                </div>
                );
            }
        }

        const mapStateToProps = createStructuredSelector({
            currentUser: selectCurrentUser
        });

        const mapDispatchToProps = dispatch => ({
            checkUserSessionStart: () => dispatch(checkUserSessionStart())
        });

        export default connect(
            mapStateToProps,
            mapDispatchToProps
        )(App);
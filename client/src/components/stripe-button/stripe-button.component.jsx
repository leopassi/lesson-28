import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { paymentSuccess } from '../../redux/user/user.actions';

import axios from 'axios';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

const StripeCheckoutButton = ({ price, paymentSuccess }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51ImNkcDou15m3Tay8iZocKb7v627txDgAoKFjyc0YR5rQt0agPMo5aXp7kPt6KUGmOrIUTVoIbPlyFuHyTbBARnT00iMpM30vQ';

  const payment = () => paymentSuccess();
  const { t } = useTranslation();

  const onToken = token => {
    axios({
      url: 'payment' ,
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }) // ATTENTION: Stripe EXECUTE CE QU'IL YA APRES LE then UNIQUEMENT EN PRODUCTION !!!
      .then(response => payment(), alert(`${t('Payment Succesful')}`))
      .catch(error => {
        console.log('There was an issue with th Payment' + JSON.parse(error));
        alert('There was an error. Make sure to use the provided Credit Card');
      });

    // console.log(token);
    // console.log(paymentSuccess());
    // await payment();
    // payment();
    // alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label={t('Pay Now')}
      name='LEO Discount Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={t('TotalStripe', { price: `${price}` })}
      amount={priceForStripe}
      panelLabel={t('Pay Now')}
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

const mapDispatchToProps = dispatch => ({
  paymentSuccess: () => dispatch(paymentSuccess())
});

export default connect(null, mapDispatchToProps)(StripeCheckoutButton);

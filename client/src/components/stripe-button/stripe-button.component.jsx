import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { paymentSuccess } from '../../redux/user/user.actions';

import axios from 'axios';
import { connect } from 'react-redux';


const StripeCheckoutButton = ({ price, paymentSuccess }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51ImNkcDou15m3Tay8iZocKb7v627txDgAoKFjyc0YR5rQt0agPMo5aXp7kPt6KUGmOrIUTVoIbPlyFuHyTbBARnT00iMpM30vQ';

  const payment = () => paymentSuccess();

  const onToken = token => {

    axios({
      url: 'payment' ,
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => { alert('Payment Succesful !'); 
      payment();
    })
      .catch(error => {
        console.log('There was an issue with th Payment' + JSON.parse(error));
        alert('There was an error. Make sure to use the provided Credit Card');
      });


    // console.log(paymentSuccess());
    // await payment();
    // alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='LEO Discount Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

const mapDispatchToProps = dispatch => ({
  paymentSuccess: () => dispatch(paymentSuccess())
});

export default connect(null, mapDispatchToProps)(StripeCheckoutButton);

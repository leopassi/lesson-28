import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import axios from 'axios';


const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51ImNkcDou15m3Tay8iZocKb7v627txDgAoKFjyc0YR5rQt0agPMo5aXp7kPt6KUGmOrIUTVoIbPlyFuHyTbBARnT00iMpM30vQ';

  const onToken = token => {

    axios({
      url: 'payment' ,
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => { alert('Payment Succesful!');} )
      .catch(error => {
        console.log('There aws an issue with th Payment' + JSON.parse(error));
        alert('There was an error. Make sure to use the provided Credit Card');
      });


    // console.log(token);
    // alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
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

export default StripeCheckoutButton;

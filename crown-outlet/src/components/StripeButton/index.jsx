import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const stripePrice = price * 100;
  const publicKey = process.env.REACT_APP_STRIPE_API_KEY;
  const onToken = token => {
    console.log(token);
    alert("Payment Successfully!");
  };
  return (
    <StripeCheckout
      label="Pay now"
      name="Crown Outlet Co."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={stripePrice}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publicKey}
    />
  );
};

export default StripeButton;

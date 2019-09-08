import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeButton = ({ price }) => {
  const stripePrice = price * 100;
  const publicKey = process.env.REACT_APP_STRIPE_API_KEY;

  const onToken = async token => {
    try {
      await axios({
        url: "payment",
        method: "post",
        data: {
          amount: stripePrice,
          token
        }
      });
      alert("Payment successfullly");
    } catch (err) {
      console.log("Error:", JSON.parse(err));
      alert("Something wrong with the payment");
    }
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

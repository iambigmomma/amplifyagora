import React from "react";
import StripeCheckout from 'react-stripe-checkout'
// import { Notification, Message } from "element-react";


const stripeConfig = {
  currency: "EUR",
  publishableAPIKey:"pk_test_wS1tcOge54E7uS0ZTNWnkJCE"
}

const PayButton = ({ product, user}) => {
  return (
    <StripeCheckout
      email={user.attributes.email}
      name={product.description}
      amount={product.price} 
      currency={stripeConfig.currency}
      stripeKey={stripeConfig.publishableAPIKey}
      shippingAddress={product.shipped}
      billingAddress={product.shipped}
      locale="auto"
      allowRememberMe={false}

    
    />
  )
};

export default PayButton;

import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import "./CartDropdown.scss";
import CustomButton from "../CustomButton";
import CartItem from "../CartItem";

const CartDropdown = ({ cartItems, history }) => {
  const renderItems = () => {
    return cartItems.length ? (
      cartItems.map(item => <CartItem key={item.id} {...item} />)
    ) : (
      <div className="empty-cart">Your cart is empty</div>
    );
  };
  return (
    <div className="cart-dropdown">
      <div className="cart-items">{renderItems()}</div>
      <CustomButton onClick={() => history.push("/checkout")}>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => {
  return {
    cartItems
  };
};

export default withRouter(connect(mapStateToProps)(CartDropdown));

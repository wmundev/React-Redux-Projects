import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { createStructuredSelector } from "reselect";
import "./CartDropdown.scss";
import CustomButton from "../CustomButton";
import CartItem from "../CartItem";
import { getCartItems } from "../../redux/cart/cartSelectors";
import { toggleDropdownCart } from "../../redux/cart/cartActions";

const CartDropdown = ({ cartItems, history, toggleDropdownCart }) => {
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
      <CustomButton
        onClick={() => {
          toggleDropdownCart();
          history.push("/checkout");
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: getCartItems
});

const mapDispatchToProps = dispatch => {
  return {
    toggleDropdownCart: () => dispatch(toggleDropdownCart())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CartDropdown)
);

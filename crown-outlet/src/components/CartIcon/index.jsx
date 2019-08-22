import React from "react";
import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";
import "./CartIcon.scss";
import { connect } from "react-redux";
import { toggleDropdownCart } from "../../redux/cart/cartActions";

const CartIcon = ({ toggleDropdownCart, itemsNumber }) => {
  return (
    <div className="cart-icon" onClick={toggleDropdownCart}>
      <ShoppingBag className="shopping-icon" />
      <span className="item-count">{itemsNumber}</span>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    toggleDropdownCart: () => dispatch(toggleDropdownCart())
  };
};

const mapStateToProps = ({ cart: { cartItems } }) => {
  return {
    itemsNumber: cartItems.reduce(
      (totalNumber, item) => totalNumber + item.quantity,
      0
    )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);

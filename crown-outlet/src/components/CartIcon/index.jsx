import React from "react";
import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";
import {createStructuredSelector} from "reselect";
import "./CartIcon.scss";
import { connect } from "react-redux";
import { toggleDropdownCart } from "../../redux/cart/cartActions";
import { getCartItemNumber } from "../../redux/cart/cartSelectors";

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

const mapStateToProps = createStructuredSelector({
  itemsNumber: getCartItemNumber
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);

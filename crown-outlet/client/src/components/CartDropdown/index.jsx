import React from "react";
import "./CartDropdown.scss";
import CustomButton from "../CustomButton";
import CartItem from "../CartItem";

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

export default CartDropdown;

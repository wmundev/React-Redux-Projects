import { createSelector } from "reselect";

const getCart = state => state.cart;

export const getCartItems = createSelector(
  [getCart],
  cart => cart.cartItems
);

export const getDropdownStatus = createSelector(
  [getCart],
  cart => cart.showDropdown
);

export const getCartItemNumber = createSelector(
  [getCartItems],
  cartItems =>
    cartItems.reduce((totalNumber, item) => totalNumber + item.quantity, 0)
);

export const getCartTotalPrice = createSelector(
  [getCartItems],
  cartItems =>
    cartItems.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0)
);

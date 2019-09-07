import cartActionTypes from "./cartActionTypes";
import { addCartItem, removeCartItem } from "./cartUtils";

const INITIAL_STATE = {
  showDropdown: false,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_DROPDOWN_CART:
      return {
        ...state,
        showDropdown: !state.showDropdown
      };
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addCartItem(state.cartItems, action.payload)
      };
    case cartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeCartItem(state.cartItems, action.payload)
      };
    case cartActionTypes.REMOVE_WHOLE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
      };
    default:
      return state;
  }
};

export default cartReducer;

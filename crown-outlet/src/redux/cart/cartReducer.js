import cartActionTypes from "./cartActionTypes";
import { addCartItem } from "./cartUtils";

const INITIAL_STATE = {
  showDropdown: false,
  cartItems: [],
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
        cartItems: addCartItem(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;

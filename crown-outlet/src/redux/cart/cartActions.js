import cartActionTypes from "./cartActionTypes";

export const toggleDropdownCart = () => {
  return {
    type: cartActionTypes.TOGGLE_DROPDOWN_CART,
  };
};

export const addItem = item => {
  return {
    type: cartActionTypes.ADD_ITEM,
    payload: item
  };
};
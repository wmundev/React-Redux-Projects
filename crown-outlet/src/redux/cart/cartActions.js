import cartActionTypes from "./cartActionTypes";

export const toggleDropdownCart = () => {
  return {
    type: cartActionTypes.TOGGLE_DROPDOWN_CART
  };
};

export const addItem = item => {
  return {
    type: cartActionTypes.ADD_ITEM,
    payload: item
  };
};

export const removeItem = item => {
  return {
    type: cartActionTypes.REMOVE_ITEM,
    payload: item
  };
};

export const removeWholeItem = item => {
  return {
    type: cartActionTypes.REMOVE_WHOLE_ITEM,
    payload: item
  };
};

import userActionTypes from "./userActionTypes";

const INITIAL_STATE = {
  currentUser: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER:
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
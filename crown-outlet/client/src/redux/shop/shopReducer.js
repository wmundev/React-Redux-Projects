import shopTypes from "./shopTypes";

const INITIAL_STATE = {
  collectionData: {},
  isFetching: false,
  isLoaded: false,
  errorMsg: null
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopTypes.FETCH_COLLECTION_START:
      return {
        ...state,
        collectionData: {},
        isFetching: true,
        isLoaded: false,
        errorMsg: null
      };
    case shopTypes.FETCH_COLLECTION_END:
      return {
        ...state,
        collectionData: action.payload,
        isFetching: false,
        isLoaded: true,
        errorMsg: null
      };
    case shopTypes.FETCH_COLLECTION_ERROR:
      return {
        ...state,
        collectionData: {},
        isFetching: false,
        isLoaded: false,
        errorMsg: action.payload
      };
    default:
      return state;
  }
};

export default shopReducer;

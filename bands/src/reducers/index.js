import { combineReducers } from "redux";

const bands = () => {
  return [
    {
      name: "Coldplay",
      origin: "London, England"
    },
    {
      name: "Maroon 5",
      origin: "Los Angeles, California"
    },
    {
      name: "Queen",
      origin: "London, England"
    },
    {
      name: "The Beatles",
      origin: "Liverpool, England"
    },
    {
      name: "AC/DC",
      origin: "Sydney, Australia"
    }
  ];
};

const selectBand = (selectedBand = null, action) => {
  if (action.type === "selectBand") {
    return action.payload;
  }
  return selectedBand;
};

export default combineReducers({
  bands: bands,
  selectedBand: selectBand
});

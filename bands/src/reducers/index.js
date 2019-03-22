import { combineReducers } from "redux";

const bands = () => {
  return [
    {
      Name: "Coldplay",
      Origin: "London, England"
    },
    {
      Name: "Maroon 5",
      Origin: "Los Angeles, California"
    },
    {
      Name: "Queen",
      Origin: "London, England"
    },
    {
      Name: "The Beatles",
      Origin: "Liverpool, England"
    },
    {
      Name: "AC/DC",
      Origin: "Sydney, Australia"
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

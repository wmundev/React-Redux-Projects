import {combineReducers} from "redux";

const songs = () => {
  return [
    {name: "Beautiful people", singer: "Ed sheeran"},
    {name: "Bad guy", singer: "Billie Eillie"},
    {name: "Sucker", singer: "Jonas Brother"},
    {name: "Never really over", singer: "Katy Perry"}
  ];
};

const selectSong = (selectedSong = null, action) => {
  if (action.type === "SELECT_SONG") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songCollections: songs,
  selectedSong: selectSong
});
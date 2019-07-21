import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

const SongList = props => {
  const songList = props.songs.map((song, index) => {
    return (
      <div className="item" key={index}>
        <div className="right floated content">
          <div className="ui primary button" onClick={() => props.selectSong(song)}>select</div>
        </div>
        <div className="content">
          <h2 className="header">{song.name}</h2>
        </div>
      </div>
    );
  });
  return <div className="ui relaxed divided list">{songList}</div>;
};

const mapStateToProps = state => {
  return {
    songs: state.songCollections
  };
};

export default connect(
  mapStateToProps,
  { selectSong }
)(SongList);

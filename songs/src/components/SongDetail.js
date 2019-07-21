import React from "react";
import { connect } from "react-redux";

const SongDetail = props => {
  if (props.song) {
    return (
      <div>
        <h1>Song Detail:</h1>
        <p>Name: {props.song.name}</p>
        <p>By {props.song.singer}</p>
      </div>
    );
  }
  return (
    <h1>
      Please select a song.
    </h1>
  );
};

const mapStateToProps = state => {
  return {
    song: state.selectedSong
  };
};

export default connect(mapStateToProps)(SongDetail);

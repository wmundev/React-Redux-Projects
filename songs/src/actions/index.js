export const selectSong = song => {
  return {
    type: "SELECT_SONG",
    payload: {
      name: song.name,
      singer: song.singer
    }
  }
};
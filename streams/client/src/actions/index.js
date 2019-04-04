import {
  SIGN_IN,
  SIGN_OUT,
  FETCH_STREAMS,
  FETCH_STREAM,
  CREATE_STREAM,
  UPDATE_STREAM,
  DELETE_STREAM
} from "./types.js";
import streamAPI from "../api/streamAPI";
import history from "../history";

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const fetchStreams = () => async dispatch => {
  const response = await streamAPI.get("/streams");
  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = id => async dispatch => {
  const response = await streamAPI.get(`/streams/${id}`);
  dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const createStream = formValues => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  const response = await streamAPI.post("/streams", { ...formValues, userId });
  dispatch({ type: CREATE_STREAM, payload: response.data });
  history.push("/");
};

export const updateStream = (formValues, id) => async dispatch => {
  const response = await streamAPI.patch(`/streams/${id}`, formValues);
  dispatch({ type: UPDATE_STREAM, payload: response.data });
  history.push("/");
};

export const deleteStream = id => async dispatch => {
  await streamAPI.delete(`/streams/${id}`);
  dispatch({ type: DELETE_STREAM, payload: id });
};

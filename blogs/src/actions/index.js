import _ from "lodash";
import jsonAPI from "../apis/jsonAPI";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach(id => dispatch(fetchUsers(id)))
    .value();
};

export const fetchPosts = () => async dispatch => {
  const response = await jsonAPI.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUsers = id => async dispatch => {
  const response = await jsonAPI.get(`/users/${id}`);
  dispatch({ type: "FETCH_USERS", payload: response.data });
};

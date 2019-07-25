import jsonPlaceholder from "../api/jsonPlaceholder";
import _ from "lodash";

export const fetchPosts = () => async dispatch => {
  const posts = await jsonPlaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: posts.data });
};

export const fetchUser = id => async dispatch => {
  const user = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: user.data });
};

export const fetchUsersAndPosts = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  _.chain(getState().postList)
    .map("userId")
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();
};

// Use _.memoize
// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const user = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({ type: "FETCH_USER", payload: user.data });
// });

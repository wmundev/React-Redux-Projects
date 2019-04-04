import {
  FETCH_STREAMS,
  FETCH_STREAM,
  CREATE_STREAM,
  UPDATE_STREAM,
  DELETE_STREAM
} from "../actions/types";
import _ from "lodash";

export default (streams = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      return { ...streams, ..._.mapKeys(action.payload, "id") };
    case FETCH_STREAM:
      return { ...streams, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return { ...streams, [action.payload.id]: action.payload };
    case UPDATE_STREAM:
      return { ...streams, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      return _.omit(streams, action.payload.id);
    default:
      return streams;
  }
};

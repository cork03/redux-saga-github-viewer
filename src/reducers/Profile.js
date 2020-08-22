import { FETCH_PROFILE_SUCCEEDED } from "../actions/Index";

const initialData = {};

const profile = (state = initialData, action) => {
  switch (action.type) {
    case FETCH_PROFILE_SUCCEEDED:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default profile;

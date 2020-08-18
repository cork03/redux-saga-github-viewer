import {
  ADD_LIST,
  EDIT_LIST,
  REMOVE_LIST,
  FETCH_ISSUE_SUCCEEDED,
} from "../actions/Index";

const initialData = {};

const initialState = {
  index: Object.values(initialData).length,
  data: initialData,
};

const issue = (state = initialState, action) => {
  const { data } = state;
  const newState = { ...state };
  const { title, content, status, id, creator } = action.payload || {};
  switch (action.type) {
    case ADD_LIST:
      newState.index++;
      newState.data[newState.index] = {
        id: newState.index,
        title,
        content,
        status: "Open",
        creator: "jjoo",
      };
      return newState;
    case EDIT_LIST:
      return {
        ...state,
        data: { ...data, [id]: { id, title, content, status, creator } },
      };
    case REMOVE_LIST:
      const newData = { ...state.data };
      delete newData[id];
      return { ...newState, data: newData };
    case FETCH_ISSUE_SUCCEEDED:
      debugger;
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
export default issue;

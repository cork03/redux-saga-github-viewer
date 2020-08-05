import { ADD_LIST, EDIT_LIST, REMOVE_LIST } from "../actions/Index";

const initialData = {
  1: {
    id: 1,
    title: "A bug in Top Page",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "Open",
    creator: "",
  },
  2: {
    id: 2,
    title: "A problem of performance in Top Page",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "Open",
    creator: "",
  },
  3: {
    id: 3,
    title: "fix layout",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "Close",
    creator: "",
  },
};

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
    default:
      return state;
  }
};
export default issue;

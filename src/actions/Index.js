export const ADD_LIST = "ADD_LIST";
export const REMOVE_LIST = "REMOVE_LIST";
export const EDIT_LIST = "EDIT_LIST";

export const FETCH_PROFILE_REQUESTED = "FETCH_PROFILE_REQUESTED";
export const FETCH_PROFILE_SUCCEEDED = "FETCH_PROFILE_SUCCEEDED";
export const FETCH_PROFILE_FAILED = "FETCH_PROFILE_FAILED";

export const addList = (list) => {
  return { type: ADD_LIST, payload: list };
};
export const removeList = (list) => {
  return { type: REMOVE_LIST, payload: list };
};
export const editList = (list) => {
  return { type: EDIT_LIST, payload: list };
};

export const actionCreators = {
  addList,
  removeList,
  editList,
};

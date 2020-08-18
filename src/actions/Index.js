export const ADD_LIST = "ADD_LIST";
export const REMOVE_LIST = "REMOVE_LIST";
export const EDIT_LIST = "EDIT_LIST";

// for fetchIssueLists

export const FETCH_ISSUE_REQUESTED = "FETCH_ISSUE_REQUESTED";
export const FETCH_ISSUE_SUCCEEDED = "FETCH_ISSUE_SUCCEEDED";
export const FETCH_ISSUE_FAILED = "FETCH_ISSUE_FAILED";

export const addList = (list) => {
  return { type: ADD_LIST, payload: list };
};
export const removeList = (list) => {
  return { type: REMOVE_LIST, payload: list };
};
export const editList = (list) => {
  return { type: EDIT_LIST, payload: list };
};

export const fetchIssue = (payload) => {
  return { type: FETCH_ISSUE_REQUESTED, payload };
};

export const actionCreators = {
  addList,
  removeList,
  editList,
  fetchIssue,
};

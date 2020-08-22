export const ADD_LIST = "ADD_LIST";
export const REMOVE_LIST = "REMOVE_LIST";
export const EDIT_LIST = "EDIT_LIST";

export const addList = (list) => {
  return { type: ADD_LIST, payload: list };
};
export const removeList = (list) => {
  return { type: REMOVE_LIST, payload: list };
};
export const editList = (list) => {
  return { type: EDIT_LIST, payload: list };
};

// for fetchIssueLists

export const FETCH_ISSUE_REQUESTED = "FETCH_ISSUE_REQUESTED";
export const FETCH_ISSUE_SUCCEEDED = "FETCH_ISSUE_SUCCEEDED";
export const FETCH_ISSUE_FAILED = "FETCH_ISSUE_FAILED";

export const fetchIssue = (payload) => {
  return { type: FETCH_ISSUE_REQUESTED, payload };
};

// for createIssue

export const CREATE_ISSUE_REQUESTED = "CREATE_ISSUE_REQUESTED";
export const CREATE_ISSUE_SUCCEEDED = "CRATE_ISSUE_SUCCEEDED";
export const CREATE_ISSUE_FAILED = "CREATE_ISSUE_FAILED";

export const createIssue = (payload) => {
  return { type: CREATE_ISSUE_REQUESTED, payload };
};

// for editIssue

export const EDIT_ISSUE_REQUESTED = "EDIT_ISSUE_REQUESTED";
export const EDIT_ISSUE_SUCCEEDED = "EDIT_ISSUE_SUCCEEDED";
export const EDIT_ISSUE_FAILED = "EDIT_ISSUE_FAILED";

export const editIssue = (payload) => {
  return { type: EDIT_ISSUE_REQUESTED, payload };
};

// for fetchProfile

export const FETCH_PROFILE_REQUESTED = "FETCH_PROFILE_REQUESTED";
export const FETCH_PROFILE_SUCCEEDED = "FETCH_PROFILE_SUCCEEDED";
export const FETCH_PROFILE_FAILED = "FETCH_PROFILE_FAILED";

export const fetchProfile = (payload) => {
  return { type: FETCH_PROFILE_REQUESTED, payload };
};

export const actionCreators = {
  addList,
  removeList,
  editList,
  fetchIssue,
  fetchProfile,
  editIssue,
};

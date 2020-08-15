export const ADD_LIST = "ADD_LIST";
export const REMOVE_LIST = "REMOVE_LIST";
export const EDIT_LIST = "EDIT_LIST";
export const UPDATE_PROFILE = 'UPDATE_PROFILE';

export const FETCH_PROFILE_REQUESTED = 'FETCH_PROFILE_REQUESTED'
export const FETCH_PROFILE_SUCCEEDED = 'FETCH_PROFILE_SUCCEEDED'
export const FETCH_PROFILE_FAILED = 'FETCH_PROFILE_FAILED'

export const addList = (list) => {
  return { type: "ADD_LIST", payload: list };
};
export const removeList = (list) => {
  return { type: "REMOVE_LIST", payload: list };
};
export const editList = (list) => {
  return { type: "EDIT_LIST", payload: list };
};

export const updateProfile = (profile) => {
  return { type: UPDATE_PROFILE, payload: profile }
}

export const fetchProfileAsync = (payload) => {
  return { type: FETCH_PROFILE_REQUESTED, payload }
}

export const actionCreators = {
  addList,
  removeList,
  editList,
  updateProfile,
  fetchProfileAsync
};

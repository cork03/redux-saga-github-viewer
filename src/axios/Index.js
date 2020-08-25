import axios from "axios";

const token = process.env.REACT_APP_REDUX_SAGA_API;
const username = process.env.REACT_APP_USER;

const base = axios.create({
  baseURL: "https://api.github.com",
  auth: {
    username,
    password: token,
  },
});

export const fetchList = async () => {
  try {
    const result = await base.get(
      "/repos/cork03/redux-saga-github-viewer/issues"
    );
    return result;
  } catch (e) {
    console.log(e);
  }
};

export const createList = async ({ data }) => {
  try {
    const result = await base.post(
      "/repos/cork03/redux-saga-github-viewer/issues",
      data
    );
    return result;
  } catch (e) {
    console.log(e);
  }
};
export const editList = async ({ data, num }) => {
  try {
    const result = await base.post(
      `/repos/cork03/redux-saga-github-viewer/issues/${num}`,
      data
    );
    return result;
  } catch (e) {
    console.log(e);
  }
};

export const fetchProfile = async (payload) => {
  try {
    const result = await base.get("/users/cork03");
    return result;
  } catch (e) {
    console.log(e);
  }
};

fetchProfile();

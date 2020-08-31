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
  const result = await base.get(
    "/repos/cork03/redux-saga-github-viewer/issues"
  );
  return result;
};

export const createList = async ({ data }) => {
  const result = await base.post(
    "/repos/cork03/redux-saga-github-viewer/issues",
    data
  );
  return result;
};

export const editList = async ({ data, num }) => {
  const result = await base.post(
    `/repos/cork03/redux-saga-github-viewer/issues/${num}`,
    data
  );
  return result;
};

export const fetchProfile = async (payload) => {
  const result = await base.get("/users/cork03");
  return result;
};

fetchProfile();

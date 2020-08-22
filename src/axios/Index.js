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
      "https://api.github.com/repos/cork03/redux-saga-github-viewer/issues"
    );
    return result;
  } catch (e) {
    console.log(e);
  }
};

export const createList = async (data) => {
  try {
    const result = await base.post(
      "https://api.github.com/repos/cork03/redux-saga-github-viewer/issues",
      data
    );
    console.log(result);
    return result;
  } catch (e) {
    console.log(e);
  }
};

export const fetchProfile = async (payload) => {
  try {
    const result = await base.get("https://api.github.com/users/cork03");
    return result;
  } catch (e) {
    console.log(e);
  }
};

fetchProfile();

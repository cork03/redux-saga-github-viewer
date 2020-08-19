import axios from "axios";

const token = process.env.REACT_APP_REDUX_SAGA_API;

const base = axios.create({
  baseURL: "https://api.github.com",
  auth: {
    username,
    password: token,
  },
});

console.log(api);

export const fetchList = async (payload) => {
  try {
    const result = await axios.get(
      "https://api.github.com/repos/cork03/redux-saga-github-viewer/issues"
    );
    return result;
  } catch (e) {
    console.log(e);
  }
};

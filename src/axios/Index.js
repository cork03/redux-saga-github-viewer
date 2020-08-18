import axios from "axios";

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

import axios from "axios";

export const fetchList = async () => {
  try {
    const result = await axios.get(
      "https://api.github.com/repos/cork03/redux-saga-github-viewer/issues"
    );
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

import { all } from "redux-saga/effects";
import profile from "./Profile";

function* rootSaga() {
  yield all([profile()]);
}

export default rootSaga;

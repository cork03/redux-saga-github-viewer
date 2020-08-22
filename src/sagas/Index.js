import { all } from "redux-saga/effects";
import issue from "./Issue";
import profile from "./Profile";

function* rootSaga() {
  yield all([issue(), profile()]);
}

export default rootSaga;

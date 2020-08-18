import { all } from "redux-saga/effects";
import issue from "./Issue";

function* rootSaga() {
  yield all([issue()]);
}

export default rootSaga;

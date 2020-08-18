import { call, put, takeLatest } from "redux-saga/effects";
import { fetchList } from "../axios/Index";
import * as actions from "../actions/Index";

function* fetchIssueLIst(action) {
  try {
    const { data } = yield call(fetchList, action.payload);
    yield put({ type: actions.FETCH_ISSUE_SUCCEEDED, payload: data });
  } catch (e) {
    yield put({ type: actions.FETCH_ISSUE_FAILED, message: e.message });
  }
}

function* issue() {
  yield takeLatest(actions.FETCH_ISSUE_REQUESTED, fetchIssueLIst);
}

export default issue;

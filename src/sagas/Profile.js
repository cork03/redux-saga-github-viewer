import { call, put, takeLatest } from "redux-saga/effects";
import { fetchProfile } from "../axios/Index";
import * as actions from "../actions/Index";

function* fetchProfileLIst(action) {
  try {
    const { data } = yield call(fetchProfile, action.payload);
    yield put({ type: actions.FETCH_PROFILE_SUCCEEDED, payload: data });
  } catch (e) {
    yield put({ type: actions.FETCH_PROFILE_FAILED, message: e.message });
  }
}

function* profile() {
  yield takeLatest(actions.FETCH_PROFILE_REQUESTED, fetchProfileLIst);
}

export default profile;

import { call, put, takeLatest } from "redux-saga/effects";
import { fetchList, createList, editList } from "../axios/Index";
import * as actions from "../actions/Index";

function* fetchIssueLIst(action) {
  try {
    const { data } = yield call(fetchList, action.payload);
    yield put({ type: actions.FETCH_ISSUE_SUCCEEDED, payload: data });
  } catch (e) {
    yield put({ type: actions.FETCH_ISSUE_FAILED, message: e.message });
  }
}

function* createIssueLIst(action) {
  try {
    yield call(createList, action.payload);
    yield put({ type: actions.CREATE_ISSUE_SUCCEEDED });
    yield put({ type: actions.FETCH_ISSUE_REQUESTED });
  } catch (e) {
    yield put({ type: actions.CREATE_ISSUE_FAILED, message: e.message });
  }
}

function* editIssueLIst(action) {
  try {
    yield call(editList, { data: action.payload, num: action.number });
    yield put({ type: actions.EDIT_ISSUE_SUCCEEDED });
    yield put({ type: actions.FETCH_ISSUE_REQUESTED });
  } catch (e) {
    yield put({ type: actions.EDIT_ISSUE_FAILED, message: e.message });
  }
}

function* issue() {
  yield takeLatest(actions.FETCH_ISSUE_REQUESTED, fetchIssueLIst);
  yield takeLatest(actions.CREATE_ISSUE_REQUESTED, createIssueLIst);
  yield takeLatest(actions.EDIT_ISSUE_REQUESTED, editIssueLIst);
}

export default issue;

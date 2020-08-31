import { call, put, takeLatest } from "redux-saga/effects";
import { fetchList, createList, editList } from "../axios/Index";
import * as actions from "../actions/Index";
import { toast } from "react-toastify";

const success = (message) => {
  toast(message, {
    position: "top-center",
    hideProgressBar: true,
    className: "success",
  });
};
const error = (message) => {
  toast(message, {
    position: "top-center",
    hideProgressBar: true,
    className: "error",
  });
};

function* fetchIssueLIst(action) {
  try {
    const { data } = yield call(fetchList, action.payload);
    yield put({ type: actions.FETCH_ISSUE_SUCCEEDED, payload: data });
  } catch (e) {
    yield put({ type: actions.FETCH_ISSUE_FAILED, message: e.message });
    error("一覧の取得に失敗しました");
  }
}

function* createIssueLIst(action) {
  try {
    yield call(createList, action.payload);
    yield put({ type: actions.CREATE_ISSUE_SUCCEEDED });
    yield put({ type: actions.FETCH_ISSUE_REQUESTED });
    success("issueを作成しました");
  } catch (e) {
    yield put({ type: actions.CREATE_ISSUE_FAILED, message: e.message });
    error("作成に失敗しました");
  }
}

function* editIssueLIst(action) {
  try {
    yield call(editList, { data: action.payload, num: action.number });
    yield put({ type: actions.EDIT_ISSUE_SUCCEEDED });
    yield put({ type: actions.FETCH_ISSUE_REQUESTED });
    success("issueを更新しました");
  } catch (e) {
    yield put({ type: actions.EDIT_ISSUE_FAILED, message: e.message });
    error("更新に失敗しました");
  }
}

function* issue() {
  yield takeLatest(actions.FETCH_ISSUE_REQUESTED, fetchIssueLIst);
  yield takeLatest(actions.CREATE_ISSUE_REQUESTED, createIssueLIst);
  yield takeLatest(actions.EDIT_ISSUE_REQUESTED, editIssueLIst);
}

export default issue;

import { call, put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import { FETCH_PROFILE_REQUESTED, FETCH_PROFILE_SUCCEEDED, FETCH_PROFILE_FAILED } from '../actions/Index'

const fetchProfileAsync = (payload) => {
  return axios.get('https://swapi.dev/api/people/1')
}

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchProfile(action) {
   try {
      const { data } = yield call(fetchProfileAsync, action.payload);
     yield put({type: FETCH_PROFILE_SUCCEEDED, payload: data });
   } catch (e) {
      yield put({type: FETCH_PROFILE_FAILED, message: e.message});
   }
}

function* saga() {
  yield takeLatest(FETCH_PROFILE_REQUESTED, fetchProfile);
}

export default saga;

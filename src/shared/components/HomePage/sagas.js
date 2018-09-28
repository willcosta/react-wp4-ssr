import { put, takeEvery } from 'redux-saga/effects';
import Axios from 'axios';

import { BASE_API_URL } from '../App/config';
import { SEARCH_REPOSITORIES, SEARCH_REPOSITORIES_FAILED, SEARCH_REPOSITORIES_COMPLETE} from './actions';

function* loadOffersHandler(action) {
  try {
    const apiUrl = `${BASE_API_URL}/search/repositories?q=react`;
    const response = yield Axios.get(apiUrl);
    yield put({ type: SEARCH_REPOSITORIES_COMPLETE, repos: response.data });
  } catch (e) {
    yield put({ type: SEARCH_REPOSITORIES_FAILED, error: e.response });
  }
}

export default [takeEvery(SEARCH_REPOSITORIES, loadOffersHandler)];

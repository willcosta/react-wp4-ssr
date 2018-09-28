import { all } from 'redux-saga/effects';
// sagas
import HomePageSagas from '../HomePage/sagas';

export default function* rootSagas() {
  yield all([...HomePageSagas]);
}

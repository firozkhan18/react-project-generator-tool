// src/sagas/rootSaga.js
import { takeLatest } from 'redux-saga/effects';
import { fetchDataSaga } from './fetchDataSaga';

// Watcher saga for fetch data action
function* rootSaga() {
  yield takeLatest('FETCH_DATA_REQUEST', fetchDataSaga);
}

export default rootSaga;

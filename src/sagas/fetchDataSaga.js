// src/sagas/fetchDataSaga.js
import { call, put } from 'redux-saga/effects';
import { setLoading, setData, setError } from '../actions/actions';

// Simulating an API call
const fetchDataFromApi = async () => {
  const response = await fetch('http://localhost:5000/data');
  const data = await response.json();
  return data;
};

// Saga for fetching data
export function* fetchDataSaga() {
  try {
    yield put(setLoading(true));
    const data = yield call(fetchDataFromApi);
    yield put(setData(data));
  } catch (error) {
    yield put(setError(error));
  } finally {
    yield put(setLoading(false));
  }
}

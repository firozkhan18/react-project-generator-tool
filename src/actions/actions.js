// src/actions/actions.js
import { SET_LOADING, SET_DATA, SET_ERROR } from './actionTypes';

// Action creators for Redux Thunk
export const setLoading = (loading) => ({
  type: SET_LOADING,
  payload: loading,
});

export const setData = (data) => ({
  type: SET_DATA,
  payload: data,
});

export const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});

// Thunk action for fetching data (asynchronous action)
export const fetchDataThunk = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await fetch('http://localhost:5000/data');
    const data = await response.json();
    dispatch(setData(data));
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading(false));
  }
};

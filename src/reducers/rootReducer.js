// src/reducers/rootReducer.js
import { SET_LOADING, SET_DATA, SET_ERROR } from '../actions/actionTypes';

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_DATA:
      return { ...state, data: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default rootReducer;

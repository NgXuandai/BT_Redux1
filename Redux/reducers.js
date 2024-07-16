// reducers.js
import { combineReducers } from 'redux';
import { ADD_EXPENSE, UPDATE_EXPENSE, DELETE_EXPENSE, SET_SEARCH_TERM } from './actions';

const expenses = (state = [], action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return [...state, action.payload];
    case UPDATE_EXPENSE:
      return state.map(expense => expense.id === action.payload.id ? action.payload : expense);
    case DELETE_EXPENSE:
      return state.filter(expense => expense.id !== action.payload);
    default:
      return state;
  }
};

const searchTerm = (state = '', action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  expenses,
  searchTerm,
});

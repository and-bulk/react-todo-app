import { combineReducers } from 'redux';
import todoListReducer from './slices/todoListSlice';

export default combineReducers({
	todoList: todoListReducer,
});

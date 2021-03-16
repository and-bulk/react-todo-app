import { createSlice } from '@reduxjs/toolkit';

const TodoListSlice = createSlice({
	name: 'todoList',
	initialState: {
		todoList: [
			{ id: 1, task: 'Write a function 1', completed: false },
			{ id: 2, task: 'Write a function 2', completed: false },
			{ id: 3, task: 'Write a function 3', completed: false },
			{ id: 4, task: 'Write a function 4', completed: false },
			{ id: 5, task: 'Write a function 5', completed: false },
			{ id: 6, task: 'Write a function 6', completed: false },
			{ id: 7, task: 'Write a function 7', completed: false },
			{ id: 8, task: 'Write a function 8', completed: false },
			{ id: 9, task: 'Write a function 9', completed: false },
			{ id: 10, task: 'Write a function 10', completed: false },
			{ id: 11, task: 'Write a function 11', completed: false },
			{ id: 12, task: 'Write a function 12', completed: false },
			{ id: 13, task: 'Write a function 13', completed: false },
		],
	},
	reducers: {
		addTodo(state, action) {
			state.todoList.push(action.payload);
		},

		removeTodo(state, action) {
			state.todoList = state.todoList.filter(
				item => item.id !== action.payload
			);
		},

		toggleTodo(state, action) {
			state.todoList.map(todo => {
				if (todo.id === action.payload) {
					todo.completed = !todo.completed;
				}

				return state.todoList;
			});
		},
	},
});

export const { addTodo, removeTodo, toggleTodo } = TodoListSlice.actions;
export default TodoListSlice.reducer;

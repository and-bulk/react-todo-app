import { List } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTodo } from '../redux/slices/todoListSlice';
import TodoItem from './TodoItem';

export default function TodoList() {
	const { todoList } = useSelector(state => state.todoList);
	const dispatch = useDispatch();

	console.log(todoList);

	return (
		<List style={{ paddingTop: '20px', fontSize: '22px' }}>
			{todoList.map(todo => (
				<TodoItem
					todoID={todo.id}
					onChange={() => dispatch(toggleTodo(todo.id))}
					key={todo.id}
					text={todo.task}
					completed={todo.completed}
				/>
			))}
		</List>
	);
}

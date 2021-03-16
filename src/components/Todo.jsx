import AddTodo from './AddTodo';
import TodoList from './TodoList';

export default function Todo() {
	return (
		<div style={{ maxWidth: '700px', margin: '0 auto' }}>
			<AddTodo />
			<TodoList />
		</div>
	);
}

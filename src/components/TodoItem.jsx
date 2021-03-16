import { Button, Checkbox } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../redux/slices/todoListSlice';

export default function TodoItem({ text, onChange, completed, todoID }) {
	const dispatch = useDispatch();

	return (
		<li style={{ display: 'flex', alignItems: 'center' }}>
			<label
				style={{ display: 'flex', alignItems: 'center' }}
				onChange={onChange}
			>
				<Checkbox color="primary" />
				<p style={{ textDecoration: completed ? 'line-through' : 'none' }}>
					{text}
				</p>
			</label>
			<Button
				onClick={() => {
					console.log(dispatch(removeTodo(todoID)));
				}}
				style={{ marginLeft: 'auto' }}
				variant="contained"
				color="secondary"
			>
				Delete
			</Button>
		</li>
	);
}

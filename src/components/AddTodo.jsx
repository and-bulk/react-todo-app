import { Button, Input } from '@material-ui/core';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/slices/todoListSlice';

export default function AddTodo() {
	const [inputValue, setInputValue] = useState('');

	const dispatch = useDispatch();

	const handleSubmit = event => {
		event.preventDefault();

		if (inputValue.trim()) {
			dispatch(
				addTodo({
					id: Date.now(),
					task: inputValue,
					completed: false,
				})
			);

			setInputValue('');
		}
	};

	const handleInputChange = event => {
		setInputValue(event.target.value);
	};

	return (
		<form
			onSubmit={handleSubmit}
			style={{ paddingTop: '20px', display: 'flex' }}
		>
			<Input
				onChange={handleInputChange}
				value={inputValue}
				style={{ width: '550px', fontSize: '22px', marginRight: '20px' }}
			/>
			<Button
				style={{ marginLeft: 'auto' }}
				type="submit"
				color="primary"
				variant="contained"
			>
				Add todo
			</Button>
		</form>
	);
}

import AddTodo from './AddTodo';
import TodoList from './TodoList';
import { Pagination } from '@material-ui/lab';
import { useState } from 'react';

export default function Todo() {
	const [page, setPage] = useState(1);

	const handlePaginationChange = (event, value) => setPage(value);

	return (
		<div style={{ maxWidth: '700px', margin: '0 auto' }}>
			<AddTodo />
			<TodoList />
			{page}
			<Pagination
				style={{
					paddingTop: '20px',
					display: 'flex',
					justifyContent: 'center',
				}}
				size="large"
				color="primary"
				count={10}
				page={page}
				onChange={handlePaginationChange}
			/>
		</div>
	);
}

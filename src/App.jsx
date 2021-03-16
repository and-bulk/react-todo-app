import { Container } from '@material-ui/core';
import Todo from './components/Todo';

export default function App() {
	return (
		<div className="App">
			<Container>
				<Todo />
			</Container>
		</div>
	);
}

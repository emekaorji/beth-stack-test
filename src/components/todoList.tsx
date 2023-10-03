import { Todo } from '../types/todo';
import TodoItem from './todoItem';

const TodoList = ({ todos }: { todos: Todo[] }) => {
	return (
		<>
			{todos.map((item) => (
				<TodoItem id={item.id} title={item.title} completed={item.completed} />
			))}
		</>
	);
};

export default TodoList;

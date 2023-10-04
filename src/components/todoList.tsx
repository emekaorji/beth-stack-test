import { Todo } from '../types/todo';
import TodoForm from './todoForm';
import TodoItem from './todoItem';

const TodoList = ({ todos }: { todos: Todo[] }) => {
	return (
		<div class='todoList'>
			{todos.map((item) => (
				<TodoItem id={item.id} title={item.title} completed={item.completed} />
			))}
			<TodoForm />
		</div>
	);
};

export default TodoList;

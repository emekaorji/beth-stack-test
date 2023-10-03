import { t } from 'elysia';
import TodoItem from '../components/todoItem';
import todosDB from '../data/todosDB.json';

const updateTodoHandler = ({ params }: { params: { id: number } }) => {
	const todo = todosDB.find((item) => item.id === params.id);
	if (todo) {
		todo.completed = !todo.completed;
		return <TodoItem {...todo} />;
	}
	return;
};

export const validateUpdateTodo = {
	params: t.Object({
		id: t.Numeric(),
	}),
};

export default updateTodoHandler;

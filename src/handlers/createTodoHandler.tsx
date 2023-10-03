import { t } from 'elysia';
import TodoItem from '../components/todoItem';
import todosDB from '../data/todosDB.json';

let lastId = todosDB.length;

const createTodoHandler = ({ body }: { body: { content: string } }) => {
	if (body.content.length < 1)
		throw new Error('Pass in some content you morr!');
	const newTodo = {
		id: lastId++,
		title: body.content,
		completed: false,
	};
	todosDB.push(newTodo);
	return <TodoItem {...newTodo} />;
};

export const validateCreateTodo = {
	body: t.Object({
		content: t.String(),
	}),
};

export default createTodoHandler;

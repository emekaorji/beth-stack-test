import { t } from 'elysia';
import TodoItem from '../components/todoItem';
import { todosDB } from '../db';
import { todos } from '../db/schema';

const createTodoHandler = async ({ body }: { body: { title: string } }) => {
	if (body.title.length < 1) throw new Error('Pass in some content you morr!');
	const newTodo = await todosDB.insert(todos).values(body).returning().get();
	return <TodoItem {...newTodo} />;
};

export const validateCreateTodo = {
	body: t.Object({
		title: t.String(),
	}),
};

export default createTodoHandler;

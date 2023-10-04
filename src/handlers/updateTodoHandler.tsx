import { t } from 'elysia';
import TodoItem from '../components/todoItem';
import { todosDB } from '../db';
import { todos } from '../db/schema';
import { eq } from 'drizzle-orm';

const updateTodoHandler = async ({ params }: { params: { id: number } }) => {
	const oldTodo = await todosDB
		.select()
		.from(todos)
		.where(eq(todos.id, params.id))
		.get();
	const newTodo = await todosDB
		.update(todos)
		.set({ completed: !oldTodo?.completed })
		.where(eq(todos.id, params.id))
		.returning()
		.get();
	return <TodoItem {...newTodo} />;
};

export const validateUpdateTodo = {
	params: t.Object({
		id: t.Numeric(),
	}),
};

export default updateTodoHandler;

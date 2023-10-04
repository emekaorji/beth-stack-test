import { t } from 'elysia';
import { todosDB } from '../db';
import { todos } from '../db/schema';
import { eq } from 'drizzle-orm';

const deleteTodoHandler = async ({ params }: { params: { id: number } }) => {
	await todosDB.delete(todos).where(eq(todos.id, params.id)).run();
};

export const validateDeleteTodo = {
	params: t.Object({
		id: t.Numeric(),
	}),
};

export default deleteTodoHandler;

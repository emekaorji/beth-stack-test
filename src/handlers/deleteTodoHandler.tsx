import { t } from 'elysia';
import todosDB from '../data/todosDB.json';

const deleteTodoHandler = ({ params }: { params: { id: number } }) => {
	const todoIndex = todosDB.findIndex((item) => item.id === params.id);
	if (todoIndex > -1) {
		todosDB.splice(todoIndex, 1);
	}
};

export const validateDeleteTodo = {
	params: t.Object({
		id: t.Numeric(),
	}),
};

export default deleteTodoHandler;

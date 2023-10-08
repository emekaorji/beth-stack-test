import TodoList from '../components/todoList';
import { todosDB } from '../db';
import { todos } from '../db/schema';

const readTodosHandler = async () => {
	const data = await todosDB.select().from(todos).all();
	return <TodoList todos={data} />;
};

export default readTodosHandler;

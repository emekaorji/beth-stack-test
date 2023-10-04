import TodoList from '../components/todoList';
import { todosDB } from '../db';
import { todos } from '../db/schema';

const readTodosHandler = async () => {
	const data = await todosDB.select().from(todos).all();
	console.log('data', data);
	return <TodoList todos={data} />;
};

export default readTodosHandler;

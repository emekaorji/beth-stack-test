import todosDB from '../data/todosDB.json';
import TodoList from '../components/todoList';

const readTodosHandler = () => <TodoList todos={todosDB} />;

export default readTodosHandler;

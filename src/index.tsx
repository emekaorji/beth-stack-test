import { Elysia } from 'elysia';
import { html } from '@elysiajs/html';
import createTodoHandler, {
	validateCreateTodo,
} from './handlers/createTodoHandler';
import updateTodoHandler, {
	validateUpdateTodo,
} from './handlers/updateTodoHandler';
import deleteTodoHandler, {
	validateDeleteTodo,
} from './handlers/deleteTodoHandler';
import HomePage from './pages';
import readTodosHandler from './handlers/readTodosHandler';

const app = new Elysia();

app.use(html()).get('/', HomePage);

app.get('/todos', readTodosHandler);
app.post('/todos', createTodoHandler, validateCreateTodo);
app.put('/todos/toggle/:id', updateTodoHandler, validateUpdateTodo);
app.delete('/todos/:id', deleteTodoHandler, validateDeleteTodo);

// Serve our app
app.listen(3000);
console.log(
	`Elysia listening at http://${app.server?.hostname}:${app.server?.port}`
);

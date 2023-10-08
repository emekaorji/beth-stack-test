import { Elysia } from 'elysia';
import { html } from '@elysiajs/html';

// Pages
import HomePage from './pages';

// Route Handlers
import createTodoHandler, { validateCreateTodo } from './handlers/createTodoHandler';
import updateTodoHandler, { validateUpdateTodo } from './handlers/updateTodoHandler';
import deleteTodoHandler, { validateDeleteTodo } from './handlers/deleteTodoHandler';
import readTodosHandler from './handlers/readTodosHandler';

const app = new Elysia();

app.use(html()).get('/', HomePage);

app.post('/api/todos', createTodoHandler, validateCreateTodo);
app.get('/api/todos', readTodosHandler);
app.put('/api/todos/:id', updateTodoHandler, validateUpdateTodo);
app.delete('/api/todos/:id', deleteTodoHandler, validateDeleteTodo);

// Serve our app
app.listen(3000);
console.log(
	`Elysia listening at http://${app.server?.hostname}:${app.server?.port}`
);

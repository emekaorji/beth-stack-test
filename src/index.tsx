import { Elysia, t } from 'elysia';
import { html } from '@elysiajs/html';
import TodoItem from './components/todoItem';
import TodoForm from './components/todoForm';
import TodoList from './components/todoList';
import todosDB from './data/todosDB.json';
import BaseHtml from './components/baseHtml';

let lastId = todosDB.length;

const app = new Elysia();
app.use(html()).get('/', ({ html }) => {
	console.log(todosDB);
	return html(
		<BaseHtml>
			<body>
				<h1>Wouldolist!</h1>
				<ul id='hello' hx-get='/todos' hx-trigger='load' hx-swap='innerHTML'>
					Todos should render here
				</ul>
				<TodoForm />
			</body>
		</BaseHtml>
	);
});

app.get('/todos', () => <TodoList todos={todosDB} />);
app.post(
	'/todos',
	({ body }) => {
		if (body.content.length < 1)
			throw new Error('Pass in some content you morr!');
		const newTodo = {
			id: lastId++,
			title: body.content,
			completed: false,
		};
		todosDB.push(newTodo);
		return <TodoItem {...newTodo} />;
	},
	{
		body: t.Object({
			content: t.String(),
		}),
	}
);

app.put(
	'/todos/toggle/:id',
	({ params }) => {
		const todo = todosDB.find((item) => item.id === params.id);
		if (todo) {
			todo.completed = !todo.completed;
			return <TodoItem {...todo} />;
		}
	},
	{
		params: t.Object({
			id: t.Numeric(),
		}),
	}
);

app.delete(
	'/todos/:id',
	({ params }) => {
		const todoIndex = todosDB.findIndex((item) => item.id === params.id);
		if (todoIndex > -1) {
			todosDB.splice(todoIndex, 1);
		}
	},
	{
		params: t.Object({
			id: t.Numeric(),
		}),
	}
);

// Serve our app
app.listen(3000);
console.log(
	`Elysia listening at http://${app.server?.hostname}:${app.server?.port}`
);

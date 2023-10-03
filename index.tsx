import { Elysia, t } from 'elysia';
import { html } from '@elysiajs/html';
import * as elements from 'typed-html';

const BaseHtml = ({ children }: elements.Children) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Personal BETH Stack</title>
  <script src="https://unpkg.com/htmx.org@1.9.3"></script>
</head>
${children}
</html>
`;

interface Todo {
	id: number;
	title: string;
	completed: boolean;
}

const todosDB: Todo[] = [
	{ id: 1, title: 'First Todo', completed: true },
	{ id: 2, title: 'Second Todo', completed: false },
	{ id: 3, title: 'Third Todo', completed: false },
	{ id: 4, title: 'Fourth Todo', completed: true },
	{ id: 5, title: 'Fifth Todo', completed: false },
	{ id: 6, title: 'Sixth Todo', completed: false },
	{ id: 7, title: 'Seventh Todo', completed: false },
	{ id: 8, title: 'Eighth Todo', completed: false },
];

let lastId = todosDB.length;

const TodoItem = ({
	id,
	title,
	completed,
}: {
	id: number;
	title: string;
	completed: boolean;
}) => {
	return (
		<li>
			<input
				type='checkbox'
				checked={completed}
				hx-put={`/todos/toggle/${id}`}
				hx-target='closest li'
				hx-swap='outerHTML'
			/>
			<label>{title}</label>
			<button
				hx-delete={`/todos/${id}`}
				hx-target='closest li'
				hx-swap='outerHTML'>
				X
			</button>
		</li>
	);
};

const TodoList = ({ todos }: { todos: Todo[] }) => {
	return (
		<>
			{todos.map((item) => (
				<TodoItem id={item.id} title={item.title} completed={item.completed} />
			))}
		</>
	);
};

const TodoForm = () => {
	return (
		<form
			hx-post='/todos'
			hx-swap='afterend'
			hx-target='#hello li:last-of-type'>
			<input type='text' name='content' placeholder='Enter a new todo' />
			<button type='submit'>Add Todo</button>
		</form>
	);
};

const app = new Elysia()
	.use(html())
	.get('/', ({ html }) => {
		console.log(todosDB);
		return html(
			<BaseHtml>
				<body>
					<div>A helluva DIV!</div>
					<h1>and a heading tag of course!!</h1>
					<button hx-post='/replacer' hx-swap='innerHTML'>
						Replace the button
					</button>
					<ul id='hello' hx-get='/todos' hx-trigger='load' hx-swap='innerHTML'>
						Todos should show here
					</ul>
					<TodoForm />
				</body>
			</BaseHtml>
		);
	})
	.post('/replacer', ({ html }) => html(<div>Replacer Response</div>))
	.get('/todos', () => <TodoList todos={todosDB} />)
	.post(
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
	)
	.put(
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
	)
	.delete(
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
	)
	.listen(3000);

console.log(
	`Elysia listening at http://${app.server?.hostname}:${app.server?.port}`
);

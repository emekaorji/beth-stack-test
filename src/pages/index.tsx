import BaseHtml from '../components/baseHtml';
import TodoForm from '../components/todoForm';
import todosDB from '../data/todosDB.json';

const HomePage = ({ html }: { html: (value: string) => Response }) => {
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
};

export default HomePage;

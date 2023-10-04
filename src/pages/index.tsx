import BaseHtml from '../components/baseHtml';

const HomePage = ({ html }: { html: (value: string) => Response }) => {
	return html(
		<BaseHtml>
			<div id='root' hx-get='/api/todos' hx-trigger='load' hx-swap='beforeend'>
				<h1>Wouldolist!</h1>
			</div>
		</BaseHtml>
	);
};

export default HomePage;

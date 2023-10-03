import { Elysia } from 'elysia';
import { html } from '@elysiajs/html';
import * as elements from 'typed-html';

const app = new Elysia()
	.use(html())
	.get('/', ({ html }) =>
		html(
			<BaseHtml>
				<body>
					<div>A helluva DIV!</div>
					<h1>and a heading tag of course!!</h1>
					<button hx-post='/replacer' hx-swap='innerHTML'>
						Replace the button
					</button>
				</body>
			</BaseHtml>
		)
	)
	.post('/replacer', ({ html }) => html(<div>Replacer Response</div>))
	.listen(3000);
console.log(
	`Elysia listening at http://${app.server?.hostname}:${app.server?.port}`
);

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

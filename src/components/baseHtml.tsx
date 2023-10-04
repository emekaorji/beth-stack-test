import * as elements from 'typed-html';

const BaseHtml = ({ children }: elements.Children) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Personal BETH Stack</title>
  <script src="https://unpkg.com/htmx.org@1.9.3"></script>
  <script src="https://unpkg.com/hyperscript.org@0.9.9"></script>
	<style>
		* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
			transition: all 300ms ease;
		}
		body {
			background-color: #000011;
			color: #eee;
			font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
				'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
				sans-serif;
		}
		#root {
			width: 100vw;
			height: 100vh;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
		h1 {
			font-size: 4em;
		}
		label, input, button {
			font-size: inherit;
			font-family: inherit;
			border: none;
			outline: none;
		}
		label, input {
			color: inherit;
		}
		input {
			background-color: transparent;
		}
		button {
			cursor: pointer;
		}
		.todoList {
			display: flex;
			gap: 0.2em;
			flex-direction: column;
		}
		.todoItem {
			font-size: 1.4em;
			display: flex;
			gap: 0.3em;
			align-items: center;
		}
		.todoItem input {
			width: 0.8em;
			height: 0.8em;
			cursor: pointer;
			accent-color: red;
		}
		button.cancel {
			width: 0.9em;
			height: 0.9em;
			background-color: #fff0;
			color: #b00;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 0.2em;
			padding: 0.15em;
		}
		button.cancel:hover {
			background-color: #fff2;
		}
		.todoList form {
			display: flex;
			gap: 0.2em;
			align-items: center;
			margin-top: 0.5em;
		}
		.todoList form input {
			border: 2px solid #fff6;
			border-radius: 0.5em;
			padding: 0.4em
		}
		.todoList form input::placeholder {
			color: #fff6;
		}
		.todoList form input:focus {
			border-color: #fffa;
		}
		.todoList form input:focus::placeholder {
			color: #fffa;
		}
		.todoList form button {
			border-radius: 0.3em;
			padding: 0.3em;
		}
		.todoList form button:hover {
			filter: brightness(90%);
		}
	</style>
</head>
<body>
${children}
</body>
</html>
`;

export default BaseHtml;

import * as elements from 'typed-html';

const BaseHtml = ({ children }: elements.Children) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Personal BETH Stack</title>
  <script src="https://unpkg.com/htmx.org@1.9.3"></script>
	<style>
		body {
			background-color: #000011;
			font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
				'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
				sans-serif;
		}
		* {
			color: white;
		}
	</style>
</head>
${children}
</html>
`;

export default BaseHtml;

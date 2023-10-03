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

export default TodoForm;

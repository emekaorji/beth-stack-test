const TodoForm = () => {
	return (
		<form
			hx-post='/api/todos'
			hx-swap='beforebegin'
			_='on submit target.reset()'>
			<input type='text' name='title' placeholder='Enter a new todo' />
			<button type='submit'>Add Todo</button>
		</form>
	);
};

export default TodoForm;

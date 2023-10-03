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

export default TodoItem;

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
		<div>
			<input
				type='checkbox'
				checked={completed}
				hx-put={`/api/todos/toggle/${id}`}
				hx-target='closest div'
				hx-swap='outerHTML'
			/>
			<label>{title}</label>
			<button
				hx-delete={`/api/todos/${id}`}
				hx-target='closest div'
				hx-swap='outerHTML'>
				X
			</button>
		</div>
	);
};

export default TodoItem;

import XMarkIcon from './xMark';

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
		<div class='todoItem'>
			<input
				type='checkbox'
				checked={completed}
				hx-put={`/api/todos/toggle/${id}`}
				hx-target='closest div'
				hx-swap='outerHTML'
			/>
			<label>{title}</label>
			<button
				class='cancel'
				hx-delete={`/api/todos/${id}`}
				hx-target='closest div'
				hx-swap='outerHTML'>
				<XMarkIcon />
			</button>
		</div>
	);
};

export default TodoItem;

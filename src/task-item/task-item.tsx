import { useAppDispatch } from '../Hooks/useTypedSelector'
import { actions } from '../tasks/tasksSlice'
import { ITask } from '../tasks/type'
import './task-item.css'

interface TaskItemProps {
	task: ITask
}

export default function TaskItem({ task }: TaskItemProps) {
	const dispatch = useAppDispatch()
	return (
		<div className='task-box'>
			<h2>{task.title}</h2>
			<input
				type='checkbox'
				checked={task.isCompleted ? true : false}
				onChange={e => {
					dispatch(
						actions.updateTask({
							id: task.id,
							title: task.title,
							isCompleted: e.target.checked,
						})
					)
				}}
			/>
			<button
				onClick={e => {
					e.preventDefault()
					dispatch(actions.deleteFromTask({ id: task.id }))
				}}
			>
				Удалить
			</button>
		</div>
	)
}

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../Hooks/useTypedSelector'
import TaskItem from '../../task-item/task-item'
import { actions } from '../../tasks/tasksSlice'
function Home() {
	const { tasks } = useTypedSelector(state => state.tasksReducer)
	const { filter } = useTypedSelector(state => state.tasksReducer)

	const dispatch = useDispatch()

	const [taskTitle, setTaskTitle] = useState('')

	return (
		<>
			<form
				onSubmit={e => {
					e.preventDefault()
					dispatch(
						actions.addToTask({
							id: tasks.length + 1,
							title: taskTitle,
							isCompleted: false,
						})
					)
				}}
			>
				<input
					type='text'
					onChange={e => {
						setTaskTitle(e.target.value)
					}}
				/>
				<button type='submit'>Добавить</button>
			</form>
			<button
				className='sort'
				onClick={e => {
					e.preventDefault()
					if (filter === 'ALL') {
						dispatch(actions.setFiltered('COMPLETED'))
					} else if (filter === 'COMPLETED') {
						dispatch(actions.setFiltered('INCOMPLETED'))
					} else {
						dispatch(actions.setFiltered('ALL'))
					}
				}}
			>
				Отсортировать
			</button>
			<div>
				{tasks
					? tasks
							.filter(task => {
								if (filter === 'COMPLETED') {
									return task.isCompleted
								} else if (filter === 'INCOMPLETED') {
									return !task.isCompleted
								}
								return true
							})
							.map(task => <TaskItem key={task.id} task={task} />)
					: 'Заданий нет'}
			</div>
		</>
	)
}

export default Home

import { createSlice } from '@reduxjs/toolkit'
import { ITask } from './type'

const initialState: ITask[] = [
	{
		id: 1,
		title: 'Hello 1',
		isCompleted: true,
	},
	{
		id: 2,
		title: 'Hello 2',
		isCompleted: false,
	},
	{
		id: 3,
		title: 'Hello 3',
		isCompleted: true,
	},
	{
		id: 4,
		title: 'Hello 4',
		isCompleted: true,
	},
	{
		id: 5,
		title: 'Hello 5',
		isCompleted: false,
	},
]

export const tasksSlice = createSlice({
	name: 'tasks',
	initialState: {
		tasks: initialState,
		filter: 'ALL' as 'ALL' | 'COMPLETED' | 'INCOMPLETED',
	},
	reducers: {
		addToTask: (state, action) => {
			state.tasks.push(action.payload)
		},
		deleteFromTask: (state, action) => {
			state.tasks = state.tasks.filter(task => task.id !== action.payload.id)
		},
		updateTask: (state, action) => {
			state.tasks = state.tasks.map(task =>
				task.id === action.payload.id ? action.payload : task
			)
		},
		setFiltered: (state, action) => {
			state.filter = action.payload
		},
	},
})

export const { actions, reducer: tasksReducer } = tasksSlice

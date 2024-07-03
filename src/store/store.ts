import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { favoritesReducer } from '../favorites/favoritesSlice'
import { postsReducer } from '../posts/postsSlice'
import { tasksReducer } from '../tasks/tasksSlice'
const reducers = combineReducers({
	tasksReducer,
	postsReducer,
	favoritesReducer,
})

export const store = configureStore({
	reducer: reducers,
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

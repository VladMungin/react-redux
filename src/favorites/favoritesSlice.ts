import { createSlice } from '@reduxjs/toolkit'
import { IPost } from '../posts/type'

export const favoritesSlice = createSlice({
	name: 'favorites',
	initialState: {
		favorites: [] as IPost[],
	},
	reducers: {
		addToFav: (state, action) => {
			if (state.favorites.some(f => f.id === action.payload.id)) {
				state.favorites
			} else {
				state.favorites.push(action.payload)
			}
		},
		deleteFromFav: (state, action) => {
			state.favorites = state.favorites.filter(
				task => task.id !== action.payload.id
			)
		},
	},
})

export const { actions, reducer: favoritesReducer } = favoritesSlice

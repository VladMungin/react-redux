import { createSlice } from '@reduxjs/toolkit'
import { getPosts } from './postsActions'
import { IPost } from './type'

const postsSlice = createSlice({
	name: 'posts',
	initialState: {
		posts: [] as IPost[],
	},
	reducers: {},
	extraReducers: builder => {
		builder.addCase(getPosts.fulfilled, (state, action) => {
			state.posts = action.payload
		})
		builder.addCase(getPosts.rejected, (state, action) => {
			console.log(action.payload)
		})
	},
})

export const { actions, reducer: postsReducer } = postsSlice

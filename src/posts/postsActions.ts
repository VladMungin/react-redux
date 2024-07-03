import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { IPost } from './type'

export const getPosts = createAsyncThunk<
	IPost[],
	void,
	{ rejectValue: string }
>('posts/get-all', async (_, thunkApi) => {
	try {
		const response = await axios.get(
			'https://jsonplaceholder.typicode.com/posts'
		)
		return response.data
	} catch (error) {
		console.log(error)
		return thunkApi.rejectWithValue('Failed to fetch posts')
	}
})

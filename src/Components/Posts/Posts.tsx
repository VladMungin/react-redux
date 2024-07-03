import { useEffect } from 'react'
import { useAppDispatch, useTypedSelector } from '../../Hooks/useTypedSelector'
import { getPosts } from '../../posts/postsActions'
import PostItem from './post-item'

const Posts = () => {
	const { posts } = useTypedSelector(state => state.postsReducer)
	console.log(posts)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(getPosts())
	}, [dispatch])

	console.log(posts)
	return (
		<div className=''>
			{posts
				? posts.map(post => {
						return <PostItem key={post.id} post={post} />
				  })
				: ''}
		</div>
	)
}

export default Posts

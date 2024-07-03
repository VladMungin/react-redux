import { useDispatch } from 'react-redux'
import { actions } from '../../favorites/favoritesSlice'
import { IPost } from '../../posts/type'
import './style.css'
interface PostProps {
	post: IPost
	isDeletable?: boolean
}

const PostItem = ({ post, isDeletable }: PostProps) => {
	const dispatch = useDispatch()

	return (
		<div className='post'>
			<div>
				<h1>{post.title}</h1>
				<p>{post.body}</p>
			</div>

			<button
				onClick={e => {
					e.preventDefault()
					if (isDeletable) {
						dispatch(actions.deleteFromFav(post))
					} else {
						dispatch(actions.addToFav(post))
					}
				}}
			>
				{isDeletable ? 'Удалить' : 'Добавить в Избранное'}
			</button>
		</div>
	)
}

export default PostItem

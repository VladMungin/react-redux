import { useTypedSelector } from '../../Hooks/useTypedSelector'
import PostItem from '../Posts/post-item'

const Favorites = () => {
	const { favorites } = useTypedSelector(state => state.favoritesReducer)
	console.log(favorites)
	return (
		<div>
			{favorites
				? favorites.map(fav => {
						return <PostItem key={fav.id} post={fav} isDeletable={true} />
				  })
				: 'No'}
		</div>
	)
}

export default Favorites

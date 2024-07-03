import { Route, Routes } from 'react-router-dom'
import Favorites from '../Components/Favorites/Favorites'
import Home from '../Components/Home/Home'
import Posts from '../Components/Posts/Posts'
import { ROUTES } from '../utils/route'

export default function AppRoutes() {
	return (
		<Routes>
			<Route path={ROUTES.HOME} element={<Home />} />
			<Route path={ROUTES.POSTS} element={<Posts />} />
			<Route path={ROUTES.FAVORITES} element={<Favorites />} />
		</Routes>
	)
}

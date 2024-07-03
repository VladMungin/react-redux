import { Link } from 'react-router-dom'
import { ROUTES } from '../../utils/route'
import './Header.css'
const Header = () => {
	return (
		<header className='header'>
			<Link to={ROUTES.HOME}>Таски</Link>
			<Link to={ROUTES.POSTS}>Посты</Link>
			<Link to={ROUTES.FAVORITES}>Избранное</Link>
		</header>
	)
}

export default Header

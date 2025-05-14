import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"

export const Home = () => {
	const navigate = useNavigate()

	const handleClick = () => {
		localStorage.getItem('token') && navigate('/private')
	}
	
	return (
		<div className="text-center mt-5">
			<h2>Primero tienes que <Link to={'/register'}>registrarte</Link>, despues <Link to={'/login'}>logearte</Link> y despues podrás acceder al <Link to={'/private'}>area privada</Link></h2>
			<span className="nav nav-link" onClick={handleClick}>area privada</span>
		</div>
	);
}; 
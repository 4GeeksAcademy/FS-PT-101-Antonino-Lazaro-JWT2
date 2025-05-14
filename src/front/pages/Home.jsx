import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Home = () => {
	const navigate = useNavigate();

	return (
		<div className="bg-light min-h-screen flex items-center justify-center text-green-400 font-mono p-4">
			<div className="bg-gray-950 p-8 rounded-2xl shadow-lg shadow-green-500 text-center max-w-xl p-4 rounded">
				<h2 className="text-xl">
					If you don`t have an account: <Link to={'/register'} className="underline hover:text-green-300">Register</Link><br />
					If you already have an account:  <Link to={'/login'} className="underline hover:text-green-300">Login</Link><br />
					After login, you can enter the private page: <Link to={'/private'} className="underline hover:text-green-300">Private Page</Link>.
				</h2>
			</div>
		</div>
	);
};
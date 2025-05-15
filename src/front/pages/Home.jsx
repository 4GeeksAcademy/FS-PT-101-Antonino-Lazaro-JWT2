import { Link } from "react-router-dom";
import image from "../assets/img/pruebaverde.png"

export const Home = () => {
	return (
		<div className="back-img">
			<img src={image} alt="gym" />
			<div className="startBox rounded-4">
				<h2 className="text-white mb-4 pb-4">
					WELCOME TO <span className="text-white">GYM BUDDY</span>
				</h2>
				<Link to="/login" className="btn neon-btn w-50">
					START
				</Link>
			</div>
		</div>
	);
};
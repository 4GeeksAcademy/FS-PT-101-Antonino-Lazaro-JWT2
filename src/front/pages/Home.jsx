import { Link } from "react-router-dom";
import image from "../assets/img/pruebaverde.png"

export const Home = () => {
	return (
		<div className="container-fluid d-flex flex-column flex-md-row align-items-center justify-content-center gap-4 p-0 back-img">
			<img
				src={image}
				alt="gym"
				className="custom-gym-img img-fluid me-auto"
			/>
			<div className="startBox rounded-4 bg-dark bg-opacity-75 text-center col-12 col-md-4 me-auto">
				<h2 className="text-white mb-4">
					WELCOME TO <span className="text-neon">GYM BUDDY</span>
				</h2>
				<Link to="/login" className="btn neon-btn w-100 w-md-50 mt-3">
					START
				</Link>
			</div>
		</div>
	);
};
import { Link } from "react-router-dom";
import image from "../assets/img/pruebaverde.png"

/*<h2 className="text-white mb-4">
	WELCOME TO <span className="text-neon">GYM BUDDY</span>
</h2>
<Link to="/login" className="btn neon-btn mt-3">
	START
</Link> <div className="h-100 custom-gym-img" style={{ background: 'url(\'' + image + '\')', flex: 1, backgroundPosition: 'center' }}></div>
			</div>*/

export const Home = () => {
	return (
		<div className="container-fluid">
			<div className="row rowHome1" id="login">
				{/* Imagen de fondo responsiva */}
				<div className="col-12 col-md-6 d-flex p-0">
					<img className="img-fluid custom-gym-img" src={image} alt="gymImage" />
				</div>
				{/* Contenedor de texto responsivo */}
				<div className="text-white d-flex flex-column justify-content-center align-items-center col-12 col-md-6 text-center my-4">
					<div className="startBox rounded p-4">
						<h2 className="text-white mb-4">
							WELCOME TO <span className="text-neon">GYM BUDDY</span>
						</h2>
						<Link to="/login" className="btn neon-btn mt-3">
							START
						</Link>
					</div>
				</div>
			</div>
			<div className="row rowHome1 mt-1" id="about-us">
				{/* Contenedor de texto responsivo */}
				<div className="text-white d-flex flex-column justify-content-center align-items-center col-12 col-md-6 text-center my-4">
					<div className="row d-flex align-items-center justify-content-center">
						<div className="startBox rounded p-4 col-10">
							<h3>WHO ARE WE?</h3>
							<p>At GymBuddy, we believe that fitness is more than just a goal — it’s a lifestyle. Whether you're a beginner taking your first steps or a seasoned athlete pushing your limits, GymBuddy is here to support you every step of the way.</p>
						</div>
					</div>
				</div>
				{/* Imagen de fondo responsiva */}
				<div className="col-12 col-md-6 d-flex p-0">
					<img className="img-fluid custom-gym-img" src={image} alt="gymImage" />
				</div>
			</div>
			<div className="row rowHome1 mt-1" id="mission">
				{/* Imagen de fondo responsiva */}
				<div className="col-12 col-md-6 d-flex p-0">
					<img className="img-fluid custom-gym-img" src={image} alt="gymImage" />
				</div>
				{/* Contenedor de texto responsivo */}
				<div className="text-white d-flex flex-column justify-content-center align-items-center col-12 col-md-6 text-center my-4">
					<div className="row d-flex align-items-center justify-content-center">
						<div className="startBox rounded p-4 col-10">
							<h3>Our mission</h3>
							<p>At GymBuddy, we believe that fitness is more than just a goal — it’s a lifestyle. Whether you're a beginner taking your first steps or a seasoned athlete pushing your limits, GymBuddy is here to support you every step of the way.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
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
		<div className="container-fluid h-100">
			<div className="row d-flex h-100 w-100">
				{/* Imagen de fondo responsiva */}
				<div
					className="bg-warning col-12 col-md-6 d-flex justify-content-center align-items-center custom-gym-img"
					style={{
						background: `url(${image}) center/cover no-repeat`,
						flex: 1,
						minHeight: "300px" // Para evitar que quede muy comprimido en pantallas pequeñas
					}}
				>
				</div>

				{/* Contenedor de texto responsivo */}
				<div className="text-white d-flex flex-column justify-content-center align-items-center col-12 col-md-6 text-center">
					<div className="startBox rounded p-4 w-75">
						<h2 className="text-white mb-4">
							WELCOME TO <span className="text-neon">GYM BUDDY</span>
						</h2>
						<Link to="/login" className="btn neon-btn mt-3">
							START
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
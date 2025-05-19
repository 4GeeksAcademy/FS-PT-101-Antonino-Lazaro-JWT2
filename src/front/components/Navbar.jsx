export const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-dark navbar-expand-lg navCss">
				<div className="container">
					<a className="navbar-brand" href="/">Gym Buddy</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav mb-2 mb-lg-0 ms-auto">
							<li class="nav-item ms-auto">
								<a className="nav-link active" aria-current="page" href="#login">Login In</a>
							</li>
							<li class="nav-item ms-auto">
								<a className="nav-link active" aria-current="page" href="#about-us">About Us</a>
							</li>
							<li class="nav-item ms-auto">
								<a className="nav-link active" aria-current="page" href="#mission">Our Mission</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};
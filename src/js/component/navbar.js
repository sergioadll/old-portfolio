import React from "react";
import { Link } from "react-router-dom";

import Nav from "react-bootstrap/Nav";

import "../../styles/navbar.scss";

export const Navbar = () => {
	return (
		<div className="navbar d-flex flex-column">
			<Link to="/" className="navbar-btn">
				Sergio Diaz Llobera
			</Link>
			<img
				className="profile-image"
				src="https://images.pexels.com/photos/5207249/pexels-photo-5207249.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
				alt="Sergio Diaz Llobera"
			/>
			<Link to="/" className="navbar-btn">
				About Me
			</Link>
			<Link to="/projects" className="navbar-btn">
				Projects
			</Link>
			<Link to="/shoelaces" className="navbar-btn">
				Shoelaces
			</Link>
		</div>
	);
};

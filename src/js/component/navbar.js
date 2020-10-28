import React from "react";
import { Link } from "react-router-dom";

import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import sergioDiaz from "../../img/sergioDiaz.jpg";

import "../../styles/navbar.scss";

export const Navbar = () => {
	return (
		<div className="navbar d-flex flex-column justify-content-start p-0">
			<Link to="/" className="name p-3">
				<div>SERGIO DIAZ LLOBERA</div>
			</Link>
			<img className="profile-image mb-2" src={sergioDiaz} alt="Sergio Diaz Llobera" />
			<Link to="/" className="navbar-btn p-3">
				<div>About Me</div>
			</Link>
			<Link to="/projects" className="navbar-btn p-3">
				<div>Projects</div>
			</Link>
			<div className=" d-flex mt-auto mb-3 justify-content-center">
				<a href="https://www.linkedin.com/in/sergiodiazl/" className="m-2">
					<AiOutlineLinkedin color="white" size="30" />
				</a>
				<a href="https://github.com/sergioadll/" className="m-2">
					<AiOutlineGithub color="white" size="30" />
				</a>
			</div>
		</div>
	);
};

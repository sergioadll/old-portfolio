import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiCodeAlt } from "react-icons/bi";
import { GoLightBulb } from "react-icons/go";

import "../../styles/navbar.scss";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [light, setLight] = useState(true);
	const [color, setColor] = useState("grey");

	//arreglar
	function handleColor() {
		if (light) {
			setColor("yellow");
		} else {
			setColor("grey");
		}
	}
	return (
		<div className="navbar d-flex flex-column justify-content-start p-0 border-right border-secondary">
			<Link to="/" className="name p-3">
				<div>Sergio</div>
				<div>Diaz</div>
				<div>Llobera</div>
			</Link>
			<Link to="/" className="navbar-btn p-3">
				<AiOutlineHome color="white" size="30" />
			</Link>
			<Link to="/about" className="navbar-btn p-3">
				<AiOutlineUser color="white" size="30" />
			</Link>
			<Link to="/projects" className="navbar-btn p-3">
				<BiCodeAlt color="white" size="30" />
			</Link>
			<div className="d-flex flex-column py-1 mt-5 border border-secondary rounded">
				<GoLightBulb
					color={color}
					size="30"
					className="my-1"
					onClick={() => {
						setLight(!light);
						handleColor();
						//console.log("click", light);
						actions.changeTheme(light);
					}}
				/>
				<GoLightBulb
					color={color}
					size="30"
					className="my-1"
					onClick={() => {
						setLight(!light);
						handleColor();
						//console.log("click", light);
						actions.changeTheme(light);
					}}
				/>
				<GoLightBulb
					color={color}
					size="30"
					className="my-1"
					onClick={() => {
						setLight(!light);
						handleColor();
						//console.log("click", light);
						actions.changeTheme(light);
					}}
				/>
			</div>

			<div className=" d-flex flex-column mt-auto mb-3 justify-content-center">
				<a href="https://www.linkedin.com/in/sergiodiazl/" className="">
					<AiOutlineLinkedin color="white" size="30" />
				</a>
				<a href="https://github.com/sergioadll/" className="my-2">
					<AiOutlineGithub color="white" size="30" />
				</a>
			</div>
		</div>
	);
};

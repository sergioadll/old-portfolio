import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import Button from "react-bootstrap/Button";
import Typical from "react-typical";

import sergioDiaz from "../../img/sergioDiaz.jpg";

import "../../styles/section.scss";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);
	useEffect(
		() => {
			let theme = store.theme;
			if (store.theme == "light") {
				document.querySelector("#theme").classList.toggle("light");
				//console.log("theme==light", theme);
			} else {
				document.querySelector("#theme").classList.remove("light");
				//console.log("theme==dark", theme);
			}
		},
		[store.theme]
	);
	return (
		<>
			<div id="theme" className="section d-flex align-items-center">
				<div className="d-flex align-items-center ml-5">
					<span className="home-title ">SDL</span>
					<div className="image-container d-flex justify-content-center align-items-center">
						<img className="profile-image mb-2" src={sergioDiaz} alt="Sergio Diaz Llobera" />
					</div>
					<div>
						<Typical
							steps={[1000, "Desarrollador Full-Stack.", 800]}
							loop={1}
							wrapper="p"
							className="home-content "
						/>{" "}
						<Typical
							steps={[3000, "Apasionado por los negocios y la tecnología.", 1000]}
							loop={1}
							wrapper="p"
							className="home-content "
						/>{" "}
						<Typical
							steps={[6500, "Siempre en proceso de renovación.", 800]}
							loop={1}
							wrapper="p"
							className="home-content "
						/>
					</div>
				</div>
				<div className=" d-flex flex-column ml-auto mr-5">
					<Link to="/projects" className="section-button btn btn-warning my-2">
						Proyectos
					</Link>
					<Link to="/about" className="section-button btn btn-outline-secondary my-2">
						Más sobre mí
					</Link>
				</div>
			</div>
		</>
	);
};

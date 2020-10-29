import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import Card from "react-bootstrap/Card";

import sergioDiaz from "../../img/sergioDiaz.jpg";

import "../../styles/section.scss";
import "../../styles/projects.scss";

export const Projects = () => {
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
			<div id="theme" className="section d-flex flex-column justify-content-start align-items-center">
				<span className="about-title ">PROJECTS</span>

				<div className="image-container">
					<img className="project-image mb-2" src={sergioDiaz} alt="Sergio Diaz Llobera" />
				</div>
			</div>
		</>
	);
};

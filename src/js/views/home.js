import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

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
			<div id="theme" className="section d-flex justify-content-center align-items-center">
				<span className="home-title ">SDL</span>
				<div className="image-container d-flex justify-content-center align-items-center">
					<img className="profile-image mb-2" src={sergioDiaz} alt="Sergio Diaz Llobera" />
				</div>
				<div>
					<p className="home-content ">Desarrollador Full-Stack. </p>
					<p className="home-content ">Apasionado por los negocios y la tecnología.</p>
					<p className="home-content ">Siempre en continua renovación.</p>
				</div>
			</div>
		</>
	);
};
/*
			<div id="theme" className="section d-flex flex-column justify-content-center align-items-center">
				<span className="home-title ">SERGIO DIAZ LLOBERA</span>
				<img className="profile-image mb-2" src={sergioDiaz} alt="Sergio Diaz Llobera" />
				<p className="home-content ">Desarrollador Full-Stack, apasionado por los negocios.</p>
				<p className="home-content ">Siempre en continua renovación</p>
			</div>
            */

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
			<div id="theme" className="section d-flex flex-column justify-content-center align-items-center">
				<span className="home-title ">SERGIO DIAZ LLOBERA</span>
				<img className="profile-image mb-2" src={sergioDiaz} alt="Sergio Diaz Llobera" />
				<p className="home-content text-justify ">
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
					totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
					dicta sunt explicabo.
				</p>
			</div>
		</>
	);
};

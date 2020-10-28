import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import sergioDiaz from "../../img/sergioDiaz.jpg";

import "../../styles/section.scss";
import "../../styles/about.scss";

export const About = () => {
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
				<span className="about-title ">SERGIO DIAZ LLOBERA</span>
				<img className="profile-image mb-2" src={sergioDiaz} alt="Sergio Diaz Llobera" />
				<p className="about-content text-justify ">
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
					totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
					dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
					sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
					est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
					modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
					veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
					commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
					molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
				</p>
			</div>
		</>
	);
};

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import injectContext from "./store/appContext";

import { Home } from "./views/home";
import { About } from "./component/about";
import { Projects } from "./component/projects";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="h-100">
			<Router>
				<div className="d-flex h-100">
					<Navbar />

					<Switch>
						<Route path="/" exact>
							<About />
						</Route>
					</Switch>
					<Switch>
						<Route path="/projects">
							<Projects />
						</Route>
					</Switch>
				</div>
			</Router>
		</div>
	);
};

export default injectContext(Layout);

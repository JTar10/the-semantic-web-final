import React from "react";
import "./tabs.css";
import { useNavigate } from "react-router-dom";

import Logo from "../images/logo.png";

const Home = () => {
	const moveTab = useNavigate();
	const browse = () => {
		moveTab("/courseCatalog");
	};

	return (
		<div class="center">
			<br />
			<br />
			<img src={Logo} alt="logo" />
			<h1>THE SEMANTIC WEB</h1>
			<button type="button" className="home-button" onClick={browse}>
				View Courses
			</button>
		</div>
	);
};

export default Home;

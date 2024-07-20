import React from "react";
import "./tabs.css";
import { useNavigate } from "react-router-dom";
import Logo from "../images/logo.png";
import Button from "react-bootstrap/Button";

const Home = () => {
	const moveTab = useNavigate();
	const browse = () => {
		moveTab("/courseCatalog");
	};

	return (
		<div class="center">
			<br />
			<br />
			<img src={Logo} alt="company logo" />
			<h1>THE SEMANTIC WEB</h1>
			<Button className="home-button" onClick={browse}>
				View Courses
			</Button>
		</div>
	);
};

export default Home;

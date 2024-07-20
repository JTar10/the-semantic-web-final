import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import Profile from "../images/profile.png";
import Home from "../images/house.png";
import Catalog from "../images/book.png";
import Purchase from "../images/shoppingCart.png";
import Practice from "../images/mic.png";
import Schedule from "../images/calendar.png";
import Chat from "../images/message.png";
import Help from "../images/question.png";

const Navbar = () => {
	return (
		<nav>
			<img src={Logo} alt="company logo" className="logo" />
			<ul className="links">
				<li>
					<div style={{ display: "flex" }}>
						<Link to="/">Home</Link>
						<img src={Home} alt="home icon" className="icon" />
					</div>
				</li>
				<li>
					<div style={{ display: "flex" }}>
						<Link to="/courseCatalog">Course Catalog</Link>
						<img src={Catalog} alt="catalog icon" className="icon" />
					</div>
				</li>
				<li>
					<div style={{ display: "flex" }}>
						<Link to="/purchaseCourse">Purchase Course</Link>
						<img src={Purchase} alt="shopping cart icon" className="icon" />
					</div>
				</li>
				<li>
					<div style={{ display: "flex" }}>
						<Link to="/practice">Monitored Practice</Link>
						<img src={Practice} alt="microphone icon" className="icon" />
					</div>
				</li>
				<li>
					<div style={{ display: "flex" }}>
						<Link to="/schedule">Scheduling</Link>
						<img src={Schedule} alt="calendar icon" className="icon" />
					</div>
				</li>
				<li>
					<div style={{ display: "flex" }}>
						<Link to="/chat">Chat</Link>
						<img src={Chat} alt="message icon" className="icon" />
					</div>
				</li>
				<li>
					<div style={{ display: "flex" }}>
						<Link to="/help">Help</Link>
						<img src={Help} alt="question mark icon" className="icon" />
					</div>
				</li>
			</ul>
			<img src={Profile} alt="user profile picture" className="logo" />
		</nav>
	);
};

export default Navbar;

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./tabs.css";
import { useNavigate } from "react-router-dom";
import Mic from "../images/microphone.png";

const Practice = () => {
	const [remainingTime, setRemainingTime] = useState(null);

	const moveTab = useNavigate();
	const refresh = () => {
		moveTab("/practice");
	};

	const timerStart = () => {
		setRemainingTime(60);
	};

	useEffect(() => {
		if (remainingTime === null) {
			return;
		}
		if (remainingTime > 0) {
			const timer = setInterval(() => {
				setRemainingTime((currentTime) => currentTime - 1);
			}, 1000);
			return () => clearInterval(timer);
		}
	}, [remainingTime]);

	return (
		<div>
			<h2>Monitored Practice</h2>
			<p>
				Clicking the button will start a one-minute recording of your speech for
				your instructor to evaluate.
			</p>
			{remainingTime !== null ? (
				<div className="center">
					<br />
					<h4>RECORDING IN PROGRESS</h4>
					<br />
					<img src={Mic} alt="microphone" />
					<br />
					<h4>{remainingTime} seconds remaining</h4>
					<button type="button" className="home-button" onClick={refresh}>
						Refresh Page
					</button>
				</div>
			) : (
				<div className="center">
					<button type="button" className="home-button" onClick={timerStart}>
						Click to Start Recording
					</button>
				</div>
			)}
		</div>
	);
};

export default Practice;

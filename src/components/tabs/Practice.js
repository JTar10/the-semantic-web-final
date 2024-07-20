import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import "./tabs.css";
import Mic from "../images/microphone.png";

const Practice = () => {
	const [remainingTime, setRemainingTime] = useState(null);

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
		if (remainingTime === 0) {
			setPracticeState("recordingEnded");
		}
	}, [remainingTime]);

	const [practiceState, setPracticeState] = useState("default");

	const defaultPractice = () => {
		setPracticeState("default");
	};

	const practiceStarted = () => {
		setPracticeState("recordingStarted");
	};

	const practicePage = () => {
		switch (practiceState) {
			case "default":
				return (
					<div>
						<p>
							Clicking the button below will start a one-minute recording of
							your speech for your instructor to evaluate.
						</p>
						<div className="center">
							<Button
								type="button"
								className="home-button"
								onClick={() => {
									timerStart();
									practiceStarted();
								}}
							>
								Click to Start Recording
							</Button>
						</div>
					</div>
				);
			case "recordingStarted":
				return (
					<div className="center">
						<br />
						<h4>RECORDING IN PROGRESS</h4>
						<br />
						<img src={Mic} alt="microphone indicating recording in progress" />
						<br />
						<h4>{remainingTime} seconds remaining</h4>
						<br />
						<h4>If you would like to restart, click the button below.</h4>
						<Button className="home-button" onClick={defaultPractice}>
							Refresh Page
						</Button>
					</div>
				);
			case "recordingEnded":
				return (
					<div className="center">
						<h4>
							Recording completed! Your instructor will evaluate your
							submission. You can click the button below if you would like to
							send another recording.
						</h4>
						<div className="center">
							<Button
								type="button"
								className="home-button"
								onClick={defaultPractice}
							>
								Refresh Page
							</Button>
						</div>
					</div>
				);
		}
	};

	return (
		<>
			<h2>Monitored Practice</h2>
			{practicePage()}
		</>
	);
};

export default Practice;

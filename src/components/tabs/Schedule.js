import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Schedule = () => {
	const [chosenDate, setChosenDate] = useState(null);
	const [chosenTime, setChosenTime] = useState(null);
	const [chosenLanguage, setChosenLanguage] = useState(null);

	const [confirmScheduling, setConfirmScheduling] = useState(false);

	const submitSchedulingInfo = () => {
		setConfirmScheduling(true);
	};

	const organizeNewScheduling = () => {
		setChosenDate(null);
		setChosenTime(null);
		setChosenLanguage(null);
		setConfirmScheduling(false);
	};

	const schedulePage = () => {
		switch (confirmScheduling) {
			case true:
				return (
					<div className="center">
						<h2>We confirm that your interview has been scheduled!</h2>
						<Button className="home-button" onClick={organizeNewScheduling}>
							Schedule Another Interview
						</Button>
					</div>
				);
			case false:
				return (
					<div>
						<p>
							Schedule an interview session with a native speaker. Each
							interview is 30 minutes.
						</p>
						<br />
						<br />
						<div className="center">
							<Form>
								<Row>
									<div className="input-field">
										<label>Date</label>
										<DatePicker
											selected={chosenDate}
											onChange={(date) => setChosenDate(date)}
											dateFormat="yyyy/MM/dd"
										/>
									</div>
									<div className="input-field">
										<label>Time</label>
										<DatePicker
											selected={chosenTime}
											onChange={(time) => setChosenTime(time)}
											showTimeSelect
											showTimeSelectOnly
											dateFormat="hh:mm aa"
										/>
									</div>
								</Row>

								<div className="input-field">
									<label>Language to Practice</label>
									<Select
										options={[
											{ value: "English", label: "English" },
											{ value: "French", label: "French" },
											{ value: "Spanish", label: "Spanish" },
											{ value: "Arabic", label: "Arabic" },
											{ value: "German", label: "German" },
											{ value: "Russian", label: "Russian" },
										]}
										value={chosenLanguage}
										onChange={(language) => setChosenLanguage(language)}
									/>
								</div>
								<Button className="home-button" onClick={submitSchedulingInfo}>
									Schedule Interview
								</Button>
							</Form>
						</div>
					</div>
				);
		}
	};

	return (
		<>
			<h2>Scheduling</h2>
			{schedulePage()}
		</>
	);
};

export default Schedule;

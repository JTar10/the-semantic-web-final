import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Schedule = () => {
	const [chosenDate, setChosenDate] = useState(null);
	const [chosenTime, setChosenTime] = useState(null);
	const [chosenLanguage, setChosenLanguage] = useState(null);

	return (
		<>
			<h2>Scheduling</h2>
			<p>
				Schedule a practice session with a native speaker. Each session is 30
				minutes.
			</p>
			<br />
			<br />
			<div className="center">
				<Form>
					<div className="row">
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
					</div>

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
							onChange={(option) => setChosenLanguage(option)}
						/>
					</div>
					<Button className="home-button" type="submit">
						Schedule Session
					</Button>
				</Form>
			</div>
		</>
	);
};

export default Schedule;

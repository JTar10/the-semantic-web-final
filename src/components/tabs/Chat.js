import React from "react";
import { useState } from "react";
import Select from "react-select";

const Chat = () => {
	const [contact, setContact] = useState(null);

	return (
		<div>
			<h2>Chat with Others</h2>
			<p>Send a message to your friends or instructors.</p>
			<br />
			<br />
			<div className="center">
				<form>
					<div className="row">
						<div className="input-field">
							<label>Language to Practice</label>
							<Select
								options={[
									{ value: "Friend Tom", label: "Friend Tom" },
									{ value: "Friend Henry", label: "Friend Henry" },
									{ value: "Instructor Joseph", label: "Instructor Joseph" },
									{ value: "Friend Jacob", label: "Friend Jacob" },
									{ value: "Instructor Taz", label: "Instructor Taz" },
									{ value: "Friend Matthew", label: "Friend Matthew" },
								]}
								value={contact}
								onChange={(option) => setContact(option)}
							/>
						</div>
						<div className="input-field">
							<label>Message</label>
							<input type="text" />
						</div>
					</div>
					<button className="home-button" type="submit">
						Send Message
					</button>
				</form>
			</div>
		</div>
	);
};

export default Chat;

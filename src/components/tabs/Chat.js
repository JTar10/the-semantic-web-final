import React from "react";
import { useState } from "react";
import Select from "react-select";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Chat = () => {
	const [chosenContact, setChosenContact] = useState(null);

	const [messageSent, setMessageSent] = useState(false);

	const sendMessage = () => {
		setMessageSent(true);
	};

	const draftMessage = () => {
		setChosenContact(null);
		setMessageSent(false);
	};

	const purchasePage = () => {
		switch (messageSent) {
			case true:
				return (
					<div className="center">
						<h2>Your message has been sent!</h2>
						<Button className="home-button" onClick={draftMessage}>
							Send Another Message
						</Button>
					</div>
				);
			case false:
				return (
					<div>
						<p>Send a message to your friends or instructors.</p>
						<br />
						<br />
						<div className="center">
							<Form>
								<div className="input-field">
									<label>Contact</label>
									<Select
										options={[
											{ value: "Friend Tom", label: "Friend Tom" },
											{ value: "Friend Henry", label: "Friend Henry" },
											{
												value: "Instructor Joseph",
												label: "Instructor Joseph",
											},
											{ value: "Friend Jacob", label: "Friend Jacob" },
											{ value: "Instructor Taz", label: "Instructor Taz" },
											{ value: "Friend Matthew", label: "Friend Matthew" },
										]}
										value={chosenContact}
										onChange={(contact) => setChosenContact(contact)}
									/>
								</div>
								<br />
								<p>Message</p>
								<Form.Group
									className="mb-3"
									controlId="exampleForm.ControlTextarea1"
								>
									<Form.Control as="textarea" rows={3} />
								</Form.Group>
								<Button className="home-button" onClick={sendMessage}>
									Send Message
								</Button>
							</Form>
						</div>
					</div>
				);
		}
	};

	return (
		<>
			<h2>Chat</h2>
			{purchasePage()}
		</>
	);
};

export default Chat;

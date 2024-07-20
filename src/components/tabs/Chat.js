import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Chat = () => {
	return (
		<>
			<h2>Chat</h2>
			<p>Send a message to your friends or instructors.</p>
			<br />
			<br />
			<div className="center">
				<Form>
					<Form.Select aria-label="Default select example">
						<option>Select a contact to message</option>
						<option value="Friend Tom">Friend Tom</option>
						<option value="Friend Henry">Friend Henry</option>
						<option value="Instructor Joseph">Instructor Joseph</option>
						<option value="Friend Jacob">Friend Jacob</option>
						<option value="Instructor Taz">Instructor Taz</option>
						<option value="Friend Matthew">Friend Matthew</option>
					</Form.Select>
					<br />
					<p>Message</p>
					<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
						<Form.Control as="textarea" rows={3} />
					</Form.Group>
					<Button className="home-button" type="submit">
						Send Message
					</Button>
				</Form>
			</div>
		</>
	);
};

export default Chat;

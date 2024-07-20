import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./tabs.css";

const PurchaseCourse = () => {
	const [confirmPurchase, setConfirmPurchase] = useState(false);

	const submitPurchaseInfo = () => {
		setConfirmPurchase(true);
	};

	const makeNewPurchase = () => {
		setConfirmPurchase(false);
	};

	const purchasePage = () => {
		switch (confirmPurchase) {
			case true:
				return (
					<div className="center">
						<h2>We confirm that you have purchased a course!</h2>
						<Button className="home-button" onClick={makeNewPurchase}>
							Purchase Another Course
						</Button>
					</div>
				);
			case false:
				return (
					<Container className="center">
						<Form>
							<div className="input-field">
								<label>Course Code</label>
								<input type="text" placeholder="ENG111" />
							</div>
							<Row>
								<div className="input-field">
									<label>Name on Card</label>
									<input type="text" placeholder="John Doe" />
								</div>
								<div className="input-field">
									<label>CVV</label>
									<input type="number" placeholder="123" />
								</div>
							</Row>
							<Row>
								<div className="input-field">
									<label>Card Number</label>
									<input type="number" placeholder="1234567890123456" />
								</div>
								<div className="input-field">
									<label>Expiry Date</label>
									<input type="text" placeholder="MM/YY" />
								</div>
							</Row>
							<Button className="home-button" onClick={submitPurchaseInfo}>
								Confirm Course Purchase
							</Button>
						</Form>
					</Container>
				);
		}
	};

	return (
		<>
			<h2>Purchase a Course</h2>
			{purchasePage()}
		</>
	);
};

export default PurchaseCourse;

import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./tabs.css";

const PurchaseCourse = () => {
	const [confirmPurchase, setConfirmPurchase] = useState(false);

	const [courseCode, setCourseCode] = useState("");
	const [cardName, setCardName] = useState("");
	const [cvv, setCvv] = useState("");
	const [cardNumber, setCardNumber] = useState("");
	const [expiryDate, setExpiryDate] = useState("");

	const [courseCodeError, setCourseCodeError] = useState("");
	const [cardNameError, setCardNameError] = useState("");
	const [cvvError, setCvvError] = useState("");
	const [cardNumberError, setCardNumberError] = useState("");
	const [expiryDateError, setExpiryDateError] = useState("");

	const clearFields = () => {
		setCourseCode("");
		setCardName("");
		setCvv("");
		setCardNumber("");
		setExpiryDate("");
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		let isValid = true;

		if (!courseCode) {
			setCourseCodeError("Course code is required.");
			isValid = false;
		} else {
			setCourseCodeError("");
		}

		if (!cardName) {
			setCardNameError("Card name is required.");
			isValid = false;
		} else {
			setCardNameError("");
		}

		if (!cvv) {
			setCvvError("CVV is required.");
			isValid = false;
		} else {
			setCvvError("");
		}

		if (!cardNumber) {
			setCardNumberError("Card number is required.");
			isValid = false;
		} else {
			setCardNumberError("");
		}

		if (!expiryDate) {
			setExpiryDateError("Expiry date is required.");
			isValid = false;
		} else {
			setExpiryDateError("");
		}

		if (isValid) {
			setConfirmPurchase(true);
		}
	};

	const purchasePage = () => {
		switch (confirmPurchase) {
			case true:
				return (
					<div className="center">
						<h2>We confirm that you have purchased a course!</h2>
						<Button
							className="home-button"
							onClick={() => {
								clearFields();
								setConfirmPurchase(false);
							}}
						>
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
								<input
									type="text"
									placeholder="ENG111"
									value={courseCode}
									onChange={(e) => setCourseCode(e.target.value)}
								/>
								<p>{courseCodeError}</p>
							</div>

							<Row>
								<div className="input-field">
									<label>Name on Card</label>
									<input
										type="text"
										placeholder="John Doe"
										value={cardName}
										onChange={(e) => setCardName(e.target.value)}
									/>
									<p>{cardNameError}</p>
								</div>

								<div className="input-field">
									<label>CVV</label>
									<input
										type="number"
										placeholder="123"
										value={cvv}
										onChange={(e) => setCvv(e.target.value)}
									/>
									<p>{cvvError}</p>
								</div>
							</Row>
							<Row>
								<div className="input-field">
									<label>Card Number</label>
									<input
										type="number"
										placeholder="1234567890123456"
										value={cardNumber}
										onChange={(e) => setCardNumber(e.target.value)}
									/>
									<p>{cardNumberError}</p>
								</div>

								<div className="input-field">
									<label>Expiry Date</label>
									<input
										type="text"
										placeholder="MM/YY"
										value={expiryDate}
										onChange={(e) => setExpiryDate(e.target.value)}
									/>
									<p>{expiryDateError}</p>
								</div>
							</Row>
							<Button className="home-button" onClick={handleSubmit}>
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

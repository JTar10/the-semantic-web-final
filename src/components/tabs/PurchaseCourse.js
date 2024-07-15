import React from "react";
import "./tabs.css";

const PurchaseCourse = () => {
	return (
		<div>
			<h2>Purchase a Course</h2>
			<p>Fill in the following fields to purchase your course of choice:</p>
			<br />
			<br />
			<div className="center">
				<form>
					<div className="input-field">
						<label>Course Code</label>
						<input type="text" placeholder="ABC123" />
					</div>
					<div className="row">
						<div className="input-field">
							<label>Name on Card</label>
							<input type="text" placeholder="John Doe" />
						</div>
						<div className="input-field">
							<label>CVV</label>
							<input type="number" placeholder="123" />
						</div>
					</div>
					<div className="row">
						<div className="input-field">
							<label>Card Number</label>
							<input type="number" placeholder="1234 5678 9012 3456" />
						</div>
						<div className="input-field">
							<label>Expiry Date</label>
							<input type="text" placeholder="MM/YY" />
						</div>
					</div>
					<button className="home-button" type="submit">
						Confirm Course Purchase
					</button>
				</form>
			</div>
		</div>
	);
};

export default PurchaseCourse;

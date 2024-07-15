import React from "react";
import "./App.css";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from "react-router-dom";
import Home from "./components/tabs/Home";
import CourseCatalog from "./components/tabs/CourseCatalog";
import PurchaseCourse from "./components/tabs/PurchaseCourse";
import Practice from "./components/tabs/Practice";
import Schedule from "./components/tabs/Schedule";
import Chat from "./components/tabs/Chat";
import Navbar from "./components/navbar/navbar";

function App() {
	return (
		<Router>
			<div>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/courseCatalog" element={<CourseCatalog />} />
					<Route path="/purchaseCourse" element={<PurchaseCourse />} />
					<Route path="/practice" element={<Practice />} />
					<Route path="/schedule" element={<Schedule />} />
					<Route path="/chat" element={<Chat />} />
					<Route path="*" element={<Navigate to="/" />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;

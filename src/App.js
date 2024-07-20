import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/tabs/Home";
import CourseCatalog from "./components/tabs/CourseCatalog";
import PurchaseCourse from "./components/tabs/PurchaseCourse";
import Practice from "./components/tabs/Practice";
import Schedule from "./components/tabs/Schedule";
import Chat from "./components/tabs/Chat";
import Help from "./components/tabs/Help";
import Navbar from "./components/navbar/navbar";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/courseCatalog" element={<CourseCatalog />} />
				<Route path="/purchaseCourse" element={<PurchaseCourse />} />
				<Route path="/practice" element={<Practice />} />
				<Route path="/schedule" element={<Schedule />} />
				<Route path="/chat" element={<Chat />} />
				<Route path="/help" element={<Help />} />
				<Route path="*" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

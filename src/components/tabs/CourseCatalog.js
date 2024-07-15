import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CourseCatalog = () => {
	const courseList = [
		{
			code: "ENG111",
			level: "Beginner",
			class: "Individual",
			length: "9 Months",
			modality: "In Person",
			price: "$550 CAD",
		},
		{
			code: "ENG112",
			level: "Beginner",
			class: "Individual",
			length: "9 Months",
			modality: "Online",
			price: "$470 CAD",
		},
		{
			code: "ENG121",
			level: "Beginner",
			class: "Group",
			length: "1 Year",
			modality: "In Person",
			price: "$475 CAD",
		},
		{
			code: "ENG122",
			level: "Beginner",
			class: "Group",
			length: "1 Year",
			modality: "Online",
			price: "$400 CAD",
		},
		{
			code: "ENG211",
			level: "Intermediate",
			class: "Individual",
			length: "9 Months",
			modality: "In Person",
			price: "$650 CAD",
		},
		{
			code: "ENG212",
			level: "Intermediate",
			class: "Individual",
			length: "9 Months",
			modality: "Online",
			price: "$570 CAD",
		},
		{
			code: "ENG221",
			level: "Intermediate",
			class: "Group",
			length: "1 Year",
			modality: "In Person",
			price: "$575 CAD",
		},
		{
			code: "ENG222",
			level: "Intermediate",
			class: "Group",
			length: "1 Year",
			modality: "Online",
			price: "$500 CAD",
		},
		{
			code: "ENG311",
			level: "Advanced",
			class: "Individual",
			length: "9 Months",
			modality: "In Person",
			price: "$750 CAD",
		},
		{
			code: "ENG312",
			level: "Advanced",
			class: "Individual",
			length: "9 Months",
			modality: "Online",
			price: "$670 CAD",
		},
		{
			code: "ENG321",
			level: "Advanced",
			class: "Group",
			length: "1 Year",
			modality: "In Person",
			price: "$675 CAD",
		},
		{
			code: "ENG322",
			level: "Advanced",
			class: "Group",
			length: "1 Year",
			modality: "Online",
			price: "$600 CAD",
		},
		{
			code: "FRE111",
			level: "Beginner",
			class: "Individual",
			length: "9 Months",
			modality: "In Person",
			price: "$550 CAD",
		},
		{
			code: "FRE112",
			level: "Beginner",
			class: "Individual",
			length: "9 Months",
			modality: "Online",
			price: "$470 CAD",
		},
		{
			code: "FRE121",
			level: "Beginner",
			class: "Group",
			length: "1 Year",
			modality: "In Person",
			price: "$475 CAD",
		},
		{
			code: "FRE122",
			level: "Beginner",
			class: "Group",
			length: "1 Year",
			modality: "Online",
			price: "$400 CAD",
		},
		{
			code: "FRE211",
			level: "Intermediate",
			class: "Individual",
			length: "9 Months",
			modality: "In Person",
			price: "$650 CAD",
		},
		{
			code: "FRE212",
			level: "Intermediate",
			class: "Individual",
			length: "9 Months",
			modality: "Online",
			price: "$570 CAD",
		},
		{
			code: "FRE221",
			level: "Intermediate",
			class: "Group",
			length: "1 Year",
			modality: "In Person",
			price: "$575 CAD",
		},
		{
			code: "FRE222",
			level: "Intermediate",
			class: "Group",
			length: "1 Year",
			modality: "Online",
			price: "$500 CAD",
		},
		{
			code: "FRE311",
			level: "Advanced",
			class: "Individual",
			length: "9 Months",
			modality: "In Person",
			price: "$750 CAD",
		},
		{
			code: "FRE312",
			level: "Advanced",
			class: "Individual",
			length: "9 Months",
			modality: "Online",
			price: "$670 CAD",
		},
		{
			code: "FRE321",
			level: "Advanced",
			class: "Group",
			length: "1 Year",
			modality: "In Person",
			price: "$675 CAD",
		},
		{
			code: "FRE322",
			level: "Advanced",
			class: "Group",
			length: "1 Year",
			modality: "Online",
			price: "$600 CAD",
		},
		{
			code: "SPA111",
			level: "Beginner",
			class: "Individual",
			length: "9 Months",
			modality: "In Person",
			price: "$550 CAD",
		},
		{
			code: "SPA112",
			level: "Beginner",
			class: "Individual",
			length: "9 Months",
			modality: "Online",
			price: "$470 CAD",
		},
		{
			code: "SPA121",
			level: "Beginner",
			class: "Group",
			length: "1 Year",
			modality: "In Person",
			price: "$475 CAD",
		},
		{
			code: "SPA122",
			level: "Beginner",
			class: "Group",
			length: "1 Year",
			modality: "Online",
			price: "$400 CAD",
		},
		{
			code: "SPA211",
			level: "Intermediate",
			class: "Individual",
			length: "9 Months",
			modality: "In Person",
			price: "$650 CAD",
		},
		{
			code: "SPA212",
			level: "Intermediate",
			class: "Individual",
			length: "9 Months",
			modality: "Online",
			price: "$570 CAD",
		},
		{
			code: "SPA221",
			level: "Intermediate",
			class: "Group",
			length: "1 Year",
			modality: "In Person",
			price: "$575 CAD",
		},
		{
			code: "SPA222",
			level: "Intermediate",
			class: "Group",
			length: "1 Year",
			modality: "Online",
			price: "$500 CAD",
		},
		{
			code: "SPA311",
			level: "Advanced",
			class: "Individual",
			length: "9 Months",
			modality: "In Person",
			price: "$750 CAD",
		},
		{
			code: "SPA312",
			level: "Advanced",
			class: "Individual",
			length: "9 Months",
			modality: "Online",
			price: "$670 CAD",
		},
		{
			code: "SPA321",
			level: "Advanced",
			class: "Group",
			length: "1 Year",
			modality: "In Person",
			price: "$675 CAD",
		},
		{
			code: "SPA322",
			level: "Advanced",
			class: "Group",
			length: "1 Year",
			modality: "Online",
			price: "$600 CAD",
		},
		{
			code: "ARA111",
			level: "Beginner",
			class: "Individual",
			length: "9 Months",
			modality: "In Person",
			price: "$550 CAD",
		},
		{
			code: "ARA112",
			level: "Beginner",
			class: "Individual",
			length: "9 Months",
			modality: "Online",
			price: "$470 CAD",
		},
		{
			code: "ARA121",
			level: "Beginner",
			class: "Group",
			length: "1 Year",
			modality: "In Person",
			price: "$475 CAD",
		},
		{
			code: "ARA122",
			level: "Beginner",
			class: "Group",
			length: "1 Year",
			modality: "Online",
			price: "$400 CAD",
		},
		{
			code: "ARA211",
			level: "Intermediate",
			class: "Individual",
			length: "9 Months",
			modality: "In Person",
			price: "$650 CAD",
		},
		{
			code: "ARA212",
			level: "Intermediate",
			class: "Individual",
			length: "9 Months",
			modality: "Online",
			price: "$570 CAD",
		},
		{
			code: "ARA221",
			level: "Intermediate",
			class: "Group",
			length: "1 Year",
			modality: "In Person",
			price: "$575 CAD",
		},
		{
			code: "ARA222",
			level: "Intermediate",
			class: "Group",
			length: "1 Year",
			modality: "Online",
			price: "$500 CAD",
		},
		{
			code: "ARA311",
			level: "Advanced",
			class: "Individual",
			length: "9 Months",
			modality: "In Person",
			price: "$750 CAD",
		},
		{
			code: "ARA312",
			level: "Advanced",
			class: "Individual",
			length: "9 Months",
			modality: "Online",
			price: "$670 CAD",
		},
		{
			code: "ARA321",
			level: "Advanced",
			class: "Group",
			length: "1 Year",
			modality: "In Person",
			price: "$675 CAD",
		},
		{
			code: "ARA322",
			level: "Advanced",
			class: "Group",
			length: "1 Year",
			modality: "Online",
			price: "$600 CAD",
		},
		{
			code: "GER111",
			level: "Beginner",
			class: "Individual",
			length: "9 Months",
			modality: "In Person",
			price: "$550 CAD",
		},
		{
			code: "GER112",
			level: "Beginner",
			class: "Individual",
			length: "9 Months",
			modality: "Online",
			price: "$470 CAD",
		},
		{
			code: "GER121",
			level: "Beginner",
			class: "Group",
			length: "1 Year",
			modality: "In Person",
			price: "$475 CAD",
		},
		{
			code: "GER122",
			level: "Beginner",
			class: "Group",
			length: "1 Year",
			modality: "Online",
			price: "$400 CAD",
		},
		{
			code: "GER211",
			level: "Intermediate",
			class: "Individual",
			length: "9 Months",
			modality: "In Person",
			price: "$650 CAD",
		},
		{
			code: "GER212",
			level: "Intermediate",
			class: "Individual",
			length: "9 Months",
			modality: "Online",
			price: "$570 CAD",
		},
		{
			code: "GER221",
			level: "Intermediate",
			class: "Group",
			length: "1 Year",
			modality: "In Person",
			price: "$575 CAD",
		},
		{
			code: "GER222",
			level: "Intermediate",
			class: "Group",
			length: "1 Year",
			modality: "Online",
			price: "$500 CAD",
		},
		{
			code: "GER311",
			level: "Advanced",
			class: "Individual",
			length: "9 Months",
			modality: "In Person",
			price: "$750 CAD",
		},
		{
			code: "GER312",
			level: "Advanced",
			class: "Individual",
			length: "9 Months",
			modality: "Online",
			price: "$670 CAD",
		},
		{
			code: "GER321",
			level: "Advanced",
			class: "Group",
			length: "1 Year",
			modality: "In Person",
			price: "$675 CAD",
		},
		{
			code: "GER322",
			level: "Advanced",
			class: "Group",
			length: "1 Year",
			modality: "Online",
			price: "$600 CAD",
		},
		{
			code: "RUS111",
			level: "Beginner",
			class: "Individual",
			length: "9 Months",
			modality: "In Person",
			price: "$550 CAD",
		},
		{
			code: "RUS112",
			level: "Beginner",
			class: "Individual",
			length: "9 Months",
			modality: "Online",
			price: "$470 CAD",
		},
		{
			code: "RUS121",
			level: "Beginner",
			class: "Group",
			length: "1 Year",
			modality: "In Person",
			price: "$475 CAD",
		},
		{
			code: "RUS122",
			level: "Beginner",
			class: "Group",
			length: "1 Year",
			modality: "Online",
			price: "$400 CAD",
		},
		{
			code: "RUS211",
			level: "Intermediate",
			class: "Individual",
			length: "9 Months",
			modality: "In Person",
			price: "$650 CAD",
		},
		{
			code: "RUS212",
			level: "Intermediate",
			class: "Individual",
			length: "9 Months",
			modality: "Online",
			price: "$570 CAD",
		},
		{
			code: "RUS221",
			level: "Intermediate",
			class: "Group",
			length: "1 Year",
			modality: "In Person",
			price: "$575 CAD",
		},
		{
			code: "RUS222",
			level: "Intermediate",
			class: "Group",
			length: "1 Year",
			modality: "Online",
			price: "$500 CAD",
		},
		{
			code: "RUS311",
			level: "Advanced",
			class: "Individual",
			length: "9 Months",
			modality: "In Person",
			price: "$750 CAD",
		},
		{
			code: "RUS312",
			level: "Advanced",
			class: "Individual",
			length: "9 Months",
			modality: "Online",
			price: "$670 CAD",
		},
		{
			code: "RUS321",
			level: "Advanced",
			class: "Group",
			length: "1 Year",
			modality: "In Person",
			price: "$675 CAD",
		},
		{
			code: "RUS322",
			level: "Advanced",
			class: "Group",
			length: "1 Year",
			modality: "Online",
			price: "$600 CAD",
		},
	];

	const moveTab = useNavigate();
	const purchase = () => {
		moveTab("/purchaseCourse");
	};

	const [searchFilter, setSearchFilter] = useState("");
	const [languageFilter, setLanguageFilter] = useState("");
	const [levelFilter, setLevelFilter] = useState("");
	const [classFilter, setClassFilter] = useState("");
	const [modalityFilter, setModalityFilter] = useState("");

	const filteredCourses = courseList.filter((course) => {
		const matchesSearch = course.code.startsWith(searchFilter);
		const matchesLanguage = languageFilter
			? course.code.startsWith(languageFilter)
			: true;
		const matchesLevel = levelFilter ? course.level === levelFilter : true;
		const matchesClass = classFilter ? course.class === classFilter : true;
		const matchesModality = modalityFilter
			? course.modality === modalityFilter
			: true;

		return (
			matchesSearch &&
			matchesLanguage &&
			matchesLevel &&
			matchesClass &&
			matchesModality
		);
	});

	return (
		<div>
			<h2>Course Catalog</h2>
			<div>
				<div>
					<h4>Language</h4>
					<button
						className="filter-button"
						onClick={() => setLanguageFilter("ENG")}
					>
						English
					</button>
					<button
						className="filter-button"
						onClick={() => setLanguageFilter("FRE")}
					>
						French
					</button>
					<button
						className="filter-button"
						onClick={() => setLanguageFilter("SPA")}
					>
						Spanish
					</button>
					<button
						className="filter-button"
						onClick={() => setLanguageFilter("ARA")}
					>
						Arabic
					</button>
					<button
						className="filter-button"
						onClick={() => setLanguageFilter("GER")}
					>
						German
					</button>
					<button
						className="filter-button"
						onClick={() => setLanguageFilter("RUS")}
					>
						Russian
					</button>
					<button
						className="filter-button"
						onClick={() => setLanguageFilter("")}
					>
						All
					</button>
				</div>
				<div>
					<h4>Difficulty</h4>
					<button
						className="filter-button"
						onClick={() => setLevelFilter("Beginner")}
					>
						Beginner
					</button>
					<button
						className="filter-button"
						onClick={() => setLevelFilter("Intermediate")}
					>
						Intermediate
					</button>
					<button
						className="filter-button"
						onClick={() => setLevelFilter("Advanced")}
					>
						Advanced
					</button>
					<button className="filter-button" onClick={() => setLevelFilter("")}>
						All
					</button>
				</div>
				<div>
					<h4>Class Type</h4>
					<button
						className="filter-button"
						onClick={() => setClassFilter("Individual")}
					>
						Individual
					</button>
					<button
						className="filter-button"
						onClick={() => setClassFilter("Group")}
					>
						Group
					</button>
					<button className="filter-button" onClick={() => setClassFilter("")}>
						All
					</button>
				</div>
				<div>
					<h4>Modality</h4>
					<button
						className="filter-button"
						onClick={() => setModalityFilter("In Person")}
					>
						In Person
					</button>
					<button
						className="filter-button"
						onClick={() => setModalityFilter("Online")}
					>
						Online
					</button>
					<button
						className="filter-button"
						onClick={() => setModalityFilter("")}
					>
						All
					</button>
				</div>
				<div>
					<h4>Reset All Filters</h4>
					<button
						className="filter-button"
						onClick={() => {
							setLanguageFilter("");
							setLevelFilter("");
							setClassFilter("");
							setModalityFilter("");
						}}
					>
						Reset
					</button>
				</div>
			</div>
			<h4>Course Search</h4>
			<input
				type="text"
				className="input-field"
				value={searchFilter}
				onChange={(event) => setSearchFilter(event.target.value)}
				placeholder="SPA312"
			/>
			<div>
				{filteredCourses.map((course, index) => (
					<div key={index}>
						<p style={{ marginTop: "25px" }}>{course.code}</p>
						<p>• {course.level}</p>
						<p>• {course.class}</p>
						<p>• {course.length}</p>
						<p>• {course.modality}</p>
						<p>• {course.price}</p>
						<button type="button" className="filter-button" onClick={purchase}>
							Purchase Course
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default CourseCatalog;

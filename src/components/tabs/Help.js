import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Help = () => {
	const headerEn = "Help";
	const engButtonEn = "English";
	const freButtonEn = "French";
	const pretextEn =
		"Displayed below are answers to frequently asked questions:";
	const Q1En = "How do I use the filtered search in the course catalog?";
	const Q1AnsEn =
		"Clicking any of the buttons under the language header, the page will be refreshed to show only courses teaching that language, and the same idea applies to difficulty, class type, and modality of courses. If you click on a language filter, but would then like to remove that filter, you can click on the ‘all’ button under the language header to remove the language filter, and this idea applies with the rest of the course characteristic filters. If you would like all the filters to be removed, you can click on the ‘reset’ button. If you would like to view a course by searching for that course, you can do so by typing the course code exactly as it appears in the course search bar.";
	const Q2En = "How do I purchase a course?";
	const Q2AnsEn =
		"You can first browse through the selection of courses available in the course catalog and select a course by clicking the 'Purchase Course' button attached to the course. This should redirect you to the 'Purchase Course' page where the course code field should auto-populate with the course you selected. Fill in your financial information then click the 'Confirm Course Purchase' button, and now you are registered for the course.";

	const headerFr = "Aide";
	const engButtonFr = "Anglais";
	const freButtonFr = "Français";
	const pretextFr =
		"Vous trouverez ci-dessous les réponses aux questions fréquemment posées :";
	const Q1Fr =
		"Comment utiliser la recherche filtrée dans le catalogue de cours ?";
	const Q1AnsFr =
		"En cliquant sur l'un des boutons sous l'en-tête de la langue, la page sera actualisée pour afficher uniquement les cours enseignant cette langue, et la même idée s'applique à la difficulté, au type de cours et à la modalité des cours. Si vous cliquez sur un filtre de langue, mais que vous souhaitez ensuite supprimer ce filtre, vous pouvez cliquer sur le bouton « Tous » sous l'en-tête de langue pour supprimer le filtre de langue, et cette idée s'applique au reste des filtres de caractéristiques de cours. Si vous souhaitez que tous les filtres soient supprimés, vous pouvez cliquer sur le bouton « Réinitialiser ». Si vous souhaitez afficher un cours en recherchant ce cours, vous pouvez le faire en tapant le code du cours exactement tel qu'il apparaît dans la barre de recherche de cours.";
	const Q2Fr = "Comment acheter un cours ?";
	const Q2AnsFr =
		"Vous pouvez d'abord parcourir la sélection de cours disponibles dans le catalogue de cours et sélectionner un cours en cliquant sur le bouton « Acheter un cours » attaché au cours. Cela devrait vous rediriger vers la page « Acheter un cours » où le champ du code du cours devrait se remplir automatiquement avec le cours que vous avez sélectionné. Remplissez vos informations financières puis cliquez sur le bouton « Confirmer l'achat du cours » et vous êtes maintenant inscrit au cours.";

	const [header, setHeader] = useState(headerEn);
	const [engButton, setEngButton] = useState(engButtonEn);
	const [freButton, setFreButton] = useState(freButtonEn);
	const [pretext, setPretext] = useState(pretextEn);
	const [Q1, setQ1] = useState(Q1En);
	const [Q1Ans, setQ1Ans] = useState(Q1AnsEn);
	const [Q2, setQ2] = useState(Q2En);
	const [Q2Ans, setQ2Ans] = useState(Q2AnsEn);

	const changeLanguage = (language) => {
		if (language === "en") {
			setHeader(headerEn);
			setEngButton(engButtonEn);
			setFreButton(freButtonEn);
			setPretext(pretextEn);
			setQ1(Q1En);
			setQ1Ans(Q1AnsEn);
			setQ2(Q2En);
			setQ2Ans(Q2AnsEn);
		} else if (language === "fr") {
			setHeader(headerFr);
			setEngButton(engButtonFr);
			setFreButton(freButtonFr);
			setPretext(pretextFr);
			setQ1(Q1Fr);
			setQ1Ans(Q1AnsFr);
			setQ2(Q2Fr);
			setQ2Ans(Q2AnsFr);
		}
	};

	return (
		<>
			<Container>
				<Row>
					<Col sm={2}>
						<h2>{header}</h2>
					</Col>
					<Col sm={10}>
						<Button
							onClick={() => changeLanguage("en")}
							className="language-button"
						>
							{engButton}
						</Button>
						<Button
							onClick={() => changeLanguage("fr")}
							className="language-button"
						>
							{freButton}
						</Button>
					</Col>
				</Row>
			</Container>

			<p>{pretext}</p>
			<br />
			<h4>{Q1}</h4>
			<p>{Q1Ans}</p>
			<br />
			<h4>{Q2}</h4>
			<p>{Q2Ans}</p>
			<br />
		</>
	);
};

export default Help;

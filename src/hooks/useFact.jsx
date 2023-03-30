import { useEffect, useState } from "react";
import { CAT_FACT_URL } from "../config/constants";

export const useFact = () => {
	const [word, setWord] = useState();

	const fetchFact = async () => {
		const results = await fetch(CAT_FACT_URL);
		const { fact } = await results.json();
		setWord(fact.split(" ", 2).join(" "));
	};

	const handleReset = () => {
		fetchFact();
	};

	useEffect(() => {
		fetchFact();
	}, []);
	return { word, handleReset };
};

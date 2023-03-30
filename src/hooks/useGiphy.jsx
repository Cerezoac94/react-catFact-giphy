import { useState, useEffect } from "react";
import { GIPHY_URL } from "../config/constants";

// const API_KEY_GIPHY = import.meta.env.API_KEY_GIPHY
// console.log(API_KEY_GIPHY);
const API_KEY_GIPHY = "GCcfYLkxbuR1pclXCE1MQ8IzsuJmhMBX";

export const useGiphy = (word) => {
	const [gif, setGif] = useState();
	const fetchGif = async () => {
		const results = await fetch(
			`${GIPHY_URL}?api_key=${API_KEY_GIPHY}&q=${word}&limit=20`
		);
		const { data } = await results.json();
		const url = await data[0].images.original.url;
		setGif(url);
	};

	useEffect(() => {
		if (!word) return;
		fetchGif();
	}, [word]);

	return gif;
};

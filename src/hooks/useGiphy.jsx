import { useState, useEffect } from "react";
import { GIPHY_URL } from "../config/constants";

export const useGiphy = (word) => {
	const API_KEY_GIPHY = import.meta.env.VITE_API_KEY_GIPHY;
	const SUFFIX_URL = `?api_key=${API_KEY_GIPHY}&q=${word}&limit=20`;
	const [gif, setGif] = useState();
	const fetchGif = async () => {
		const results = await fetch(`${GIPHY_URL}${SUFFIX_URL}`);
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

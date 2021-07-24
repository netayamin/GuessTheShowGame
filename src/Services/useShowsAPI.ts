import axios from "axios";
import { useEffect, useState } from "react";
import { TVShowResult } from "../Interfaces/TVShowResult";

const base_uri = "https://api.themoviedb.org/3/tv/top_rated";
const keys = "92e78bb76a3b3dffd08e208a1e2fd37d";

const useShowsAPI = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [shows, setShows] = useState<TVShowResult[]>(null);

	useEffect(() => {
		axios
			.get(base_uri, {
				params: {
					api_key: keys,
					page: currentPage,
					language: "en-US",
				},
			})
			.then((val) => setShows(val.data.results));
	}, [currentPage]);

	useEffect(() => {
		if (shows && shows.length === 0) {
			setCurrentPage((val) => ++val);
		}
	}, [shows]);

	return [shows, setShows] as const;
};

export default useShowsAPI;

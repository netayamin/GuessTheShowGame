import { ButtonProps } from "evergreen-ui";
import { useEffect, useState } from "react";
import { isCorrectAnswer, pickRandomShow, useStateWithLocalStorage } from "../helper";
import { ButtonStyles, CustomBtnProps, GameState } from "../Interfaces/shared";
import useShowsAPI from "../Services/useShowsAPI";
import { TopBarProps } from "./Components/TopBar";
import { GameViewProps } from "./Components/Game";

const initialState: GameState = {
	score: 3,
	currentShow: null,
	shows: null,
	buttonStyle: ButtonStyles.defaultStyle,
	isShowHint: false,
	isStartGame: false,
	isGameOver: false,
};

export default function EntryViewController() {
	const [wins, setWins] = useStateWithLocalStorage("totalWins");

	const [loses, setLoses] = useStateWithLocalStorage("totalLoses");

	const [hints, setHints] = useStateWithLocalStorage("totalHints");

	const [shows, setShows] = useShowsAPI();

	const [gameState, setGameState] = useState(initialState);

	//* LOAD SHOWS
	useEffect(() => {
		if (shows) {
			setGameState((prevState) => ({ ...prevState, shows: shows }));
		}
	}, [shows]);

	//* CHECK IF GAME OVER
	useEffect(() => {
		if (gameState.score === 0)
			return setGameState((prevState) => ({
				...prevState,
				isGameOver: true,
				isStartGame: false,
			}));
	}, [gameState.score]);

	const showHint = () => {
		setHints((prev) => ++prev);
		setGameState((prevState) => ({
			...prevState,
			isShowHint: true,
		}));
	};

	const increaseScore = () => {
		setGameState((prevState) => ({ ...prevState, score: ++prevState.score }));
		setWins((val) => ++val);
	};

	const decreaseScore = () => {
		setGameState((prevState) => ({ ...prevState, score: --prevState.score }));
		setLoses((val) => ++val);
	};

	const changeBtnStyle = (style: CustomBtnProps) => {
		setGameState((prevState) => ({
			...prevState,
			buttonStyle: style,
		}));
	};

	const getNextWord = () => {
		const updatedList = shows.filter((show) => show !== gameState.currentShow);
		setShows(updatedList);

		setGameState((prevState) => ({
			...prevState,
			currentShow: pickRandomShow(shows),
			isShowHint: false,
			buttonStyle: ButtonStyles.defaultStyle,
		}));
	};

	const checkAnswer = (userInput: string) => {
		if (isCorrectAnswer(userInput, gameState.currentShow.name)) {
			increaseScore();
			changeBtnStyle(ButtonStyles.correctStyle);
		} else {
			decreaseScore();
			changeBtnStyle(ButtonStyles.wrongStyle);
		}

		setTimeout(() => {
			getNextWord();
		}, 1000);
	};

	const startGame = () => {
		setGameState((prevState) => ({
			...prevState,
			isStartGame: true,
			score: 3,
			isGameOver: false,
			currentShow: pickRandomShow(shows),
		}));
	};

	const gameViewProps: GameViewProps = {
		checkAnswer: checkAnswer,
		game: gameState,
	};

	const topBarProps: TopBarProps = {
		score: gameState.score,
		isDisabled: !gameState.isStartGame,
		loses: loses,
		wins: wins,
		hints: hints,
		showHint: showHint,
	};

	const startBtnProps: ButtonProps = {
		onClick: startGame,
		appearance: "primary",
		size: "large",
		intent: "danger",
		visibility: gameState.isStartGame ? "hidden" : "unset",
	};

	return {
		gameState,
		startBtnProps,
		gameViewProps,
		topBarProps,
	};
}

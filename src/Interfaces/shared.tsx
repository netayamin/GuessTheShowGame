import { ButtonProps } from "evergreen-ui";
import { TVShowResult } from "./TVShowResult";

export interface CustomBtnProps extends ButtonProps {
	btnText: string;
}

export interface GameState {
	score: number;
	currentShow: TVShowResult | null;
	shows: TVShowResult[] | null;
	isShowHint: boolean;
	isStartGame: boolean;
	isGameOver: boolean;
	buttonStyle: CustomBtnProps;
}

export interface ButtonStyle {
	wrongStyle: CustomBtnProps;
	correctStyle: CustomBtnProps;
	defaultStyle: CustomBtnProps;
}

export const ButtonStyles: ButtonStyle = {
	wrongStyle: {
		intent: "danger",
		appearance: "primary",
		btnText: "Wrong answer",
		onClick: () => {},
		height: 50,
	},

	correctStyle: {
		intent: "success",
		appearance: "primary",
		onClick: () => {},
		btnText: "Correct answer!",
		height: 50,
	},

	defaultStyle: {
		intent: "danger",
		appearance: "default",
		btnText: "Check answer",
		height: 50,
	},
};

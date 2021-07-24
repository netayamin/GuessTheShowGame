import { Button, Spinner } from "evergreen-ui";
import React from "react";
import { Container } from "../styles";
import Title from "./Components/Title";
import TopBar from "./Components/TopBar";
import EntryViewController from "./EntryViewController";
import Game from "./Components/Game";

export default function EntryView() {
	const { gameState, gameViewProps, startBtnProps, topBarProps } = EntryViewController();

	return gameState.shows ? (
		<Container>
			<TopBar {...topBarProps} />
			<Title {...gameState} />
			{gameState.isStartGame && <Game {...gameViewProps} />}
			<Button {...startBtnProps}>Start new game</Button>
		</Container>
	) : (
		<Spinner size={40} />
	);
}

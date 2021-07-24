import React from "react";
import { GameState } from "../../Interfaces/shared";

export default function Title(props: GameState) {
	return <h1>{props.isGameOver ? "GAME OVER" : "Can you guess the tv show?"}</h1>;
}

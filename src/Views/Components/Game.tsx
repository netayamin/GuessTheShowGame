import { TextInput } from "evergreen-ui";
import React, { useRef } from "react";
import styled from "styled-components";
import { GameState } from "../../Interfaces/shared";
import Boxes from "./Boxes";
import SubmitBtn from "./SubmitBtn";
import Hint from "./Hint";

export interface GameViewProps {
	checkAnswer: (val: string) => void;
	game: GameState;
}

export default function Game(props: GameViewProps) {
	const inputRef = useRef<HTMLInputElement>();

	const submitBtnHandle = () => {
		props.checkAnswer(inputRef.current.value);
		inputRef.current.value = "";
	};

	return (
		<GameWrapper>
			<Boxes show={props.game.currentShow} />
			<TextInput
				ref={inputRef}
				className='input'
				size='large'
				fontSize='16px'
				placeholder='Type your answer here'
				type='text'
			/>
			<SubmitBtn onClick={submitBtnHandle} {...props.game.buttonStyle} />
			<Hint isVisble={props.game.isShowHint} currentShow={props.game.currentShow} />
		</GameWrapper>
	);
}

const GameWrapper = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	background: black;
	border-radius: 10px;
	padding: 20px;
	.boxesContainer {
		display: flex;
	}

	.hint {
		span {
			font-weight: 600;
			color: red;
		}
		p {
			font-size: 13px;
			line-height: 20px;
			text-align: left;
			margin: 0;
		}
	}

	@media only screen and (max-width: 600px) {
		width: 100%;
	} ;
`;

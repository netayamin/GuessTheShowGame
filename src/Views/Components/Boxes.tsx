import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { filterLetters, findBoxSize, getRandomInt } from "../../helper";
import { TVShowResult } from "../../Interfaces/TVShowResult";

interface BoxProps {
	show: TVShowResult;
}

const difficultyLevel = 4;

function Boxes(props: BoxProps) {
	const [gameWord, setGameWord] = useState(props.show.name);
	const [filtredLetters, setFiltredLetters] = useState(
		filterLetters(gameWord, difficultyLevel)
	);

	useEffect(() => {
		setGameWord(props.show.name);
	}, [props.show]);

	return (
		<BoxesContainer>
			{gameWord.split(" ").map((arr: string, index: React.Key) => (
				<SentenceWrapper key={index}>
					{arr.split("").map((letter, index) => {
						return (
							<Box show={props.show} key={index}>
								{!filtredLetters.includes(letter) && letter.toUpperCase()}
							</Box>
						);
					})}
				</SentenceWrapper>
			))}
		</BoxesContainer>
	);
}

export default React.memo(Boxes);

const BoxesContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

const Box = styled.div<BoxProps>`
	background: #2c2c2c;
	border-radius: 5px;
	display: flex;
	justify-content: center;
	margin: 5px;
	align-items: center;
	height: ${(props) => findBoxSize(props.show.name, 400)};
	width: ${(props) => findBoxSize(props.show.name, 400)};

	@media only screen and (max-width: 600px) {
		height: ${(props) => findBoxSize(props.show.name, 200)};
		width: ${(props) => findBoxSize(props.show.name, 200)};
	}

	max-width: 50px;
	max-height: 50px;
	font-weight: 700;
	color: white;
`;

const SentenceWrapper = styled.div`
	display: flex;
	margin-top: 10px;
	margin-right: 10px;
`;

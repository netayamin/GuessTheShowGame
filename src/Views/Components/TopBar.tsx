import { Button, IconButton, LightbulbIcon, Popover } from "evergreen-ui";
import React from "react";
import styled from "styled-components";
import Statics from "./Statics";

export interface TopBarProps {
	score: number;
	loses: number;
	wins: number;
	hints: number;
	isDisabled: boolean;
	showHint: () => void;
}

export default function TopBar(props: TopBarProps) {
	return (
		<TopBarWrapper>
			<div className='score'>
				<p>Score: {props.score} </p>
			</div>
			<div className='btns'>
				<Popover
					content={
						<Statics
							totalLoses={props.loses}
							totalWins={props.wins}
							TotalHints={props.hints}
						/>
					}>
					<Button intent='danger' appearance='default'>
						Show statics
					</Button>
				</Popover>
				<IconButton
					intent='danger'
					appearance='primary'
					marginLeft='10px'
					icon={<LightbulbIcon color='white' />}
					disabled={props.isDisabled}
					onClick={props.showHint}
				/>
			</div>
		</TopBarWrapper>
	);
}

const TopBarWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	.score {
		padding: 10px 20px;
		background-color: #ffffff3b;
		border-radius: 5px;
		p {
			font-size: 12px;
			padding: 0;
			margin: 0;
		}
	}
`;

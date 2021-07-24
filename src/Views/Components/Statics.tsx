import { Pane, StatusIndicator } from "evergreen-ui";
import React from "react";

export interface StaticsProps {
	totalWins: number;
	totalLoses: number;
	TotalHints: number;
}

export default function Statics(props: StaticsProps) {
	return (
		<Pane display='flex' padding={10} justifyContent='center' flexDirection='column'>
			<StatusIndicator marginBottom={10} color='success'>
				Right answers: {props.totalWins}
			</StatusIndicator>
			<StatusIndicator marginBottom={10} color='danger'>
				Wrong answers: {props.totalLoses}
			</StatusIndicator>
			<StatusIndicator color='disabled'>Hints used: {props.TotalHints}</StatusIndicator>
		</Pane>
	);
}

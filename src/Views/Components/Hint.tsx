import React from "react";
import { TVShowResult } from "../../Interfaces/TVShowResult";

interface HintProps {
	currentShow: TVShowResult;
	isVisble: boolean;
}

export default function Hint(props: HintProps) {
	return (
		props.isVisble && (
			<div className='hint'>
				<p>
					<span>HINT: </span>
					{`${props.currentShow.overview}`}{" "}
				</p>
			</div>
		)
	);
}

import React, { useEffect, useState } from "react";
import { TVShowResult } from "./Interfaces/TVShowResult";

export function pickRandomShow(arr: TVShowResult[]) {
	if (arr == null) return;
	let random = Math.floor(Math.random() * arr.length);
	return arr[random];
}

export function isCorrectAnswer(val1: string, val2: string) {
	if (val1.toLowerCase() == val2.toLowerCase()) return true;
	return false;
}

export function getRandomInt(max: number) {
	return Math.floor(Math.random() * max);
}

export function filterLetters(word: string, level: number) {
	const hideAmount = Math.floor(word.length / level);

	return Array.apply(null, { length: hideAmount }).map(() => {
		return word.split("")[getRandomInt(word.length)];
	});
}

export function findBoxSize(word: string, width: number) {
	var maxNum = 0;
	word.split(" ").forEach((arr) => {
		if (arr.length > maxNum) maxNum = arr.length;
	});
	return `${width / maxNum}px`;
}

export const useStateWithLocalStorage = (sessionKey: string) => {
	const [value, setValue] = useState<number>(
		Number(sessionStorage.getItem(sessionKey)) | 0
	);

	useEffect(() => {
		sessionStorage.setItem(sessionKey, value.toString());
	}, [value]);

	return [value, setValue] as const;
};

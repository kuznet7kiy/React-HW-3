import { WIN_PATTERNS } from '../constants';

export const CheckWin = (field, currentPlayer) => {
	return WIN_PATTERNS.some((pattern) => {
		const [a, b, c] = pattern;
		return (
			field.at(a) === currentPlayer &&
			field.at(b) === currentPlayer &&
			field.at(c) === currentPlayer
		);
	});
};

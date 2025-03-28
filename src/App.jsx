import { useState } from 'react';
import AppLayout from './AppLayout';
import { PLAYER } from './constants/player';
import { CheckWin } from './utils';

export const App = () => {
	const [currentPlayer, setCurrentPlayer] = useState(PLAYER.CROSS);
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(Array(9).fill(PLAYER.NOBODY));

	const handleRestartClick = () => {
		const clearField = Array(9).fill(PLAYER.NOBODY);
		setIsGameEnded(false);
		setIsDraw(false);
		setCurrentPlayer(PLAYER.CROSS);
		setField(clearField);
	};

	const handleCellClick = (cellIndex) => {
		if (isGameEnded || isDraw || field[cellIndex] !== PLAYER.NOBODY) {
			return;
		}

		const tempField = [...field];

		tempField[cellIndex] = currentPlayer;
		setField(tempField);

		if (CheckWin(tempField, currentPlayer)) {
			setIsGameEnded(true);
			return;
		} else if (
			tempField.some((cell) => {
				return cell === PLAYER.NOBODY;
			})
		) {
			setCurrentPlayer(
				currentPlayer === PLAYER.CROSS ? PLAYER.NOUGHT : PLAYER.CROSS,
			);
			return;
		} else {
			setIsDraw(true);
		}
	};

	return (
		<AppLayout
			currentPlayer={currentPlayer}
			isGameEnded={isGameEnded}
			isDraw={isDraw}
			field={field}
			handleCellClick={handleCellClick}
			handleRestartClick={handleRestartClick}
		/>
	);
};

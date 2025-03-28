import PropTypes from 'prop-types';
import { PLAYER_NAME } from '../../constants';
import InformationLayout from './InformationLayout';

export default function InformationContainer({ isDraw, isGameEnded, currentPlayer }) {
	let status = 'Крестики Нолики';
	switch (true) {
		case isDraw:
			status = 'Упс! Ничья!';
			break;
		case isGameEnded:
			status = `Победили ${PLAYER_NAME[currentPlayer]}и!`;
			break;
		default:
			status = `Ходит: ${PLAYER_NAME[currentPlayer]}`;
	}
	return <InformationLayout status={status} />;
}

InformationContainer.propTypes = {
	isDraw: PropTypes.bool.isRequired,
	isGameEnded: PropTypes.bool.isRequired,
	currentPlayer: PropTypes.number.isRequired,
};

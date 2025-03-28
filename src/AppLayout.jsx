import PropTypes from 'prop-types';
import styles from './App.module.css';
import { ButtonContainer, FieldContainer, InformationContainer } from './components';

export default function AppLayout({
	field,
	currentPlayer,
	isGameEnded,
	isDraw,
	handleCellClick,
	handleRestartClick,
}) {
	return (
		<div className={styles.app}>
			<InformationContainer
				currentPlayer={currentPlayer}
				isGameEnded={isGameEnded}
				isDraw={isDraw}
			/>
			<FieldContainer field={field} handleClick={handleCellClick} />
			<ButtonContainer
				isGameEnded={isGameEnded}
				isDraw={isDraw}
				handleRestartClick={handleRestartClick}
			/>
		</div>
	);
}

AppLayout.propTypes = {
	field: PropTypes.array.isRequired,
	currentPlayer: PropTypes.number.isRequired,
	isGameEnded: PropTypes.bool.isRequired,
	isDraw: PropTypes.bool.isRequired,
	handleCellClick: PropTypes.func.isRequired,
	handleRestartClick: PropTypes.func.isRequired,
};

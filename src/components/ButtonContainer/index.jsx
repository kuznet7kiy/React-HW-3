import PropTypes from 'prop-types';
import ButtonLayout from './ButtonLayout';

export default function ButtonContainer({ handleRestartClick, isGameEnded, isDraw }) {
	return (
		<ButtonLayout
			handleClick={handleRestartClick}
			isDraw={isDraw}
			isGameEnded={isGameEnded}
		/>
	);
}

ButtonContainer.propTypes = {
	handleRestartClick: PropTypes.func.isRequired,
	isGameEnded: PropTypes.bool.isRequired,
	isDraw: PropTypes.bool.isRequired,
};

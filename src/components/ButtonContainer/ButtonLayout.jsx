import PropTypes from 'prop-types';
import styles from './styles.module.css';

export default function ButtonLayout({ handleClick, isDraw, isGameEnded }) {
	const btnClass =
		isGameEnded || isDraw
			? `${styles.restartButton} ${styles.restartButtonNeeded}`
			: styles.restartButton;
	return (
		<button className={btnClass} onClick={handleClick}>
			Начать заново
		</button>
	);
}

ButtonLayout.propTypes = {
	handleClick: PropTypes.func.isRequired,
	isGameEnded: PropTypes.bool.isRequired,
	isDraw: PropTypes.bool.isRequired,
};

import PropTypes from 'prop-types';
import { PLAYER_SIGN } from '../../constants';
import styles from './styles.module.css';

export default function FieldLayout({ field, handleClick }) {
	return (
		<div className={styles.field}>
			{field.map((cellValue, index) => {
				return (
					<button
						className={styles.cell}
						key={index}
						onClick={() => {
							handleClick(index);
						}}
					>
						{PLAYER_SIGN[cellValue]}
					</button>
				);
			})}
		</div>
	);
}

FieldLayout.propTypes = {
	field: PropTypes.array.isRequired,
	handleClick: PropTypes.func.isRequired,
};

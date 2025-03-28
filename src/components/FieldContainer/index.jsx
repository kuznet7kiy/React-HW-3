import PropTypes from 'prop-types';
import FieldLayout from './FieldLayout';

export default function FieldContainer({ field, handleClick }) {
	return <FieldLayout field={field} handleClick={handleClick} />;
}

FieldContainer.propTypes = {
	field: PropTypes.array.isRequired,
	handleClick: PropTypes.func.isRequired,
};

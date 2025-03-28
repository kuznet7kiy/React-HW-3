import PropTypes from 'prop-types';
import styles from './styles.module.css';

export default function InformationLayout({ status }) {
	return <h1 className={styles.heading1}>{status}</h1>;
}

InformationLayout.propTypes = {
	status: PropTypes.string.isRequired,
};

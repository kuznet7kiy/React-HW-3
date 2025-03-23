import styles from './App.module.css';

export const App = () => {
	const currentYear = new Date().getFullYear();
	return <div className={styles.app}></div>;
};

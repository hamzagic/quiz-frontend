import styles from './Header.module.css';

const Header = () => {
    return(
        <div className={styles.container}>
            <div className={styles.logo}>QuizShine</div>
            <ul>
                <li>Home</li>
                <li>Quizzes</li>
                <li>About</li>
            </ul>
            <div className={styles.profile}>Profile</div>
        </div>
    );
}

export default Header;
import { Link } from 'react-router-dom';

import styles from './Header.module.css';

const Header = () => {
    return(
        <div className={styles.container}>
            <div className={styles.logo}>QuizShine</div>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/quizzes">Quizzes</Link></li>
                <li><Link to="#">About</Link></li>
            </ul>
            <div className={styles.profile}>Profile</div>
        </div>
    );
}

export default Header;
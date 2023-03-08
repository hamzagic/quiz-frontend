import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './Header.module.css';

const Header = ({isFinished}) => {
    const headerStyles = classNames(styles.container, {
        [styles.blur]: !isFinished
    })
    return(
        <div className={headerStyles}>
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
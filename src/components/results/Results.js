import { Link, useNavigate } from 'react-router-dom';
import useQuiz from '../../store/context/AppContext';

import styles from './Results.module.css';

const Results = (props) => {
    const navigate = useNavigate();
    const { resetQuiz } = useQuiz();
    const handleReset = () => {
        resetQuiz();
        navigate('/home');
    }
    return(
        <>
        <div className={styles.container}>
            <div>
                <p>Your results:</p>
                <p>Total correct answers: {props.correct}</p>
                <p>Total wrong answers: {props.incorrect}</p>
                <p> Score: {props.correct} / {props.totalQuestions}</p>
            </div>
        </div>
        <div onClick={handleReset} className={styles.return}><span>Return to the Home Page</span></div> 
        </>
    );
}

export default Results;
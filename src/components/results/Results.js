import { Link } from 'react-router-dom';

import styles from './Results.module.css';

const Results = (props) => {
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
        <div>Return to <Link to='/home'>Home Page</Link></div> 
        </>
    );
}

export default Results;
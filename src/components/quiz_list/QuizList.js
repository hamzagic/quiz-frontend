import { useContext } from "react";
import { AppContext } from "../../App";
import quizList from "../../data/quizList";
import styles from './QuizList.module.css';

const QuizList = () => {
    const appContext = useContext(AppContext);
    console.log('adf', appContext)
    const handleClick = (id) => {
        console.log('dddd', id)
    }
    const quizzes = appContext.map(quiz => 
        <div key={quiz.id}>
            <span>{quiz.name}</span><button onClick={() => handleClick(quiz.id)}>Start Quiz</button>
        </div>);

    return(
        <div className={styles.container}>
            <p>Quiz List</p>
            {quizzes}
        </div>
    );
}

export default QuizList;
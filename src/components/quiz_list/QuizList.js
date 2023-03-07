import useQuiz from "../../store/context/AppContext";
import styles from './QuizList.module.css';

const QuizList = () => {
    const quizData = useQuiz();
    const quizList = quizData.state.quizzes;

    const handleClick = (id) => {
        console.log('dddd', id)
    }

    const quizzes = quizList.map(quiz => 
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
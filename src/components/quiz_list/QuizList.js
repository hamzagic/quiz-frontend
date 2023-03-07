import { useNavigate } from "react-router-dom";
import useQuiz from "../../store/context/AppContext";
import styles from './QuizList.module.css';

const QuizList = () => {
    const quizData = useQuiz();
    const quizList = quizData.state.quizzes;
    const navigate = useNavigate();

    const handleClick = (data) => {
        quizData.startNewQuiz(data);
        navigate('/home');
    }

    const quizzes = quizList.map(quiz => 
        <div key={quiz.id}>
            <span>{quiz.name}</span><button onClick={() => handleClick(quiz)}>Start Quiz</button>
        </div>);

    return(
        <div className={styles.container}>
            <p>Quiz List</p>
            {quizzes}
        </div>
    );
}

export default QuizList;
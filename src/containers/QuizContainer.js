import { useState, useEffect } from "react";
import Quiz from "../components/quizzes/Quiz";
// import { QuizSet } from '../data/quiz';
import ResultsContainer from "./ResultsContainer";
import useQuiz from "../store/context/AppContext";

const QuizContainer = () => {
    const defaultMessage = {
        message: '',
        type: ''
    }

    const { state } = useQuiz();
    console.log('blah', state)

    const initialUserAnswers = [];

    const [questions, setQuestions] = useState(state.currentQuiz);
    const [answer, setAnswer] = useState('');
    const [idx, setIdx] = useState(0);
    const [message, setMessage] = useState(defaultMessage);
    const [next, setNext] = useState(false);
    // const [userAnswers, setUserAnswers] = useState(initialUserAnswers);
    const [resultVisible, setResultVisible] = useState(false);
    const [correct, setCorrect] = useState(0);
    const [incorrect, setIncorrect] = useState(0);

    let qty;

    useEffect(() => {
        // need state var to render component again
        console.log('idx', idx)
    }, [idx, next, answer, resultVisible])

    const handleClick = (currentQuestion, currentIndex) => {
        setMessage(defaultMessage);
        if(!answer) {
            setMessage({
                message: 'Please choose an answer',
                type: 'danger'
            });
        };
        if (answer) {
            setNext(true);
            checkCorrectAnswer(currentQuestion, currentIndex);
            // setUserAnswers(initialUserAnswers => [...initialUserAnswers, answer]);
        }
    }

    const checkCorrectAnswer = (current) => {
        if(answer == current.correct) {
            setCorrect(correct + 1);
            setMessage({
                message: 'Correct!',
                type: 'success'
            });
        } else {
            setIncorrect(incorrect + 1);
            setMessage({
                message: 'Sorry, that\'s not correct',
                type: 'danger'
            });
        }
    }

    const handleNext = (quiz) => {
        setMessage(defaultMessage);
        qty = quiz.question_set.length;
        setIdx(idx + 1);
        const data = questions;
        // data.userAnswers = userAnswers;

        if(idx < qty) {
            data.question_set[idx].display = false;
            if(data.question_set[idx + 1]) {
                data.question_set[idx + 1].display = true;
            } else {
                // see results & back to start
                setMessage({
                    message: '',
                    type: 'neutral'
                });
                setResultVisible(true);
            }
            setQuestions(data);
            setNext(false)
            setAnswer('');
        }
    }

    const onChange = (e) => {
        setAnswer(e.target.value);
    }

    return(
        <>
            <Quiz
                questions={questions}
                message={message}
                handleClick={handleClick}
                onChange={onChange}
                handleNext={handleNext}
                next={next}
            />
            {resultVisible && <ResultsContainer
                // userAnswers={userAnswers} 
                // questions={questions} 
                correct={correct}
                incorrect={incorrect}
                totalQuestions={questions.question_set.length}
            />}
        </>
    );
}

export default QuizContainer;
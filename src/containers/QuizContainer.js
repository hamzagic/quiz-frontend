import { useState, useEffect } from "react";
import Quiz from "../components/quizzes/Quiz";
import { QuizSet } from '../data/quiz';
import ResultsContainer from "./ResultsContainer";

const QuizContainer = () => {
    const defaultMessage = {
        message: '',
        type: ''
    }

    const initialUserAnswers = [];

    const [questions, setQuestions] = useState(QuizSet);
    const [answer, setAnswer] = useState('');
    const [idx, setIdx] = useState(0);
    const [message, setMessage] = useState(defaultMessage);
    const [next, setNext] = useState(false);
    const [userAnswers, setUserAnswers] = useState(initialUserAnswers);
    const [resultVisible, setResultVisible] = useState(false);

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
            setUserAnswers(initialUserAnswers => [...initialUserAnswers, answer]);
        }
    }

    const checkCorrectAnswer = (current) => {
        if(answer == current.correct) {
            setMessage({
                message: 'Correct!',
                type: 'success'
            });
        } else {
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
        
        if(idx < qty) {
            data.question_set[idx].display = false;
            if(data.question_set[idx + 1]) {
                data.question_set[idx + 1].display = true;
            } else {
                // see results & back to start
                setMessage({
                    message: 'No more questions',
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
                userAnswers={userAnswers} 
                questions={questions} 
            />}
        </>
    );
}

export default QuizContainer;
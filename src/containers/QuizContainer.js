import { useState, useEffect } from "react";
import Quiz from "../components/quizzes/Quiz";
import { QuizSet } from '../data/quiz';

const QuizContainer = () => {
    const defaultMessage = {
        message: '',
        type: ''
    }
    const [questions, setQuestions] = useState(QuizSet);
    const [answer, setAnswer] = useState('');
    const [idx, setIdx] = useState(0);
    const [message, setMessage] = useState(defaultMessage);
    const [next, setNext] = useState(false);
    let qty;

    useEffect(() => {
        // need state var to render component again
        console.log('idx', idx)
    }, [idx, next])

    const handleClick = (currentQuestion, currentIndex) => {
        setMessage(defaultMessage);
        if(!answer) {
            setMessage({
                message: 'Please choose an answer',
                type: 'danger'
            });
            // setMessage('Please choose an answer');
            return console.log('NO DATA!')
        };
        if (answer) {
            setNext(true);
            checkCorrectAnswer(currentQuestion, currentIndex);
        }
    }

    // style messages red and green
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
        console.log(data.question_set[idx])
        if(idx < qty) {
            data.question_set[idx].display = false;
            if(data.question_set[idx + 1]) {
                data.question_set[idx + 1].display = true;
            } else {
                // style message
                // see results & back to start
                setMessage({
                    message: 'No more questions',
                    type: 'neutral'
                });
                // setMessage('No more questions');
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
        <Quiz
            questions={questions}
            message={message}
            handleClick={handleClick}
            onChange={onChange}
            handleNext={handleNext}
            next={next}
        />
    );
}

export default QuizContainer;
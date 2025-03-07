import { useState, useEffect } from "react";
import Quiz from "../components/quizzes/Quiz";
import { QuizSet } from '../data/quiz';

const QuizContainer = () => {
    const [questions, setQuestions] = useState(QuizSet);
    const [answer, setAnswer] = useState('');
    const [idx, setIdx] = useState(0);
    const [message, setMessage] = useState('');
    const [next, setNext] = useState(false);
    let qty;

    useEffect(() => {
        // need state var to render component again
        console.log('idx', idx)
    }, [idx, next])

    const handleClick = (currentQuestion, currentIndex) => {
        setMessage('')
        if(!answer) {
            setMessage('Please choose an answer');
            return console.log('NO DATA!')
        };
        if (answer) {
            setIdx(idx + 1);
            setNext(true);
            checkCorrectAnswer(currentQuestion, currentIndex);
        }
    }

    const checkCorrectAnswer = (current) => {
        if(answer == current.correct) {
            console.log('CORRECT!')
        } else {
            console.log('WRONG!')
        }

        const qty = current.answers.length;
        
        // handleNext(current, qty);
        
        const data = questions;
        if(idx < qty) {
            data.question_set[idx].display = false;
            if(data.question_set[idx + 1]) {
                data.question_set[idx + 1].display = true;
            } else {
                // style message
                // see results & back to start
                setMessage('No more questions');
            }
            setQuestions(data);
            setAnswer('');
        }
    }

    const handleNext = (quiz) => {
        qty = quiz.question_set.length;
        const data = questions;
        if(idx < qty) {
            data.question_set[idx].display = false;
            if(data.question_set[idx + 1]) {
                data.question_set[idx + 1].display = true;
            } else {
                // style message
                // see results & back to start
                setMessage('No more questions');
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
import { useState, useEffect } from "react";
import Question from "../components/questions/Question";
import { QuestionsList } from '../data/questions';


const QuestionContainer = () => {
    const [questions, setQuestions] = useState(QuestionsList());
    const [answer, setAnswer] = useState('');
    const [idx, setIdx] = useState(0);
    const [message, setMessage] = useState('');
    const qty = questions.length;

    useEffect(() => {
        // need state var to render component again
        console.log('idx', idx)
    }, [idx])

    const handleClick = (currentQuestion, currentIndex) => {
        setMessage('')
        if(!answer) {
            setMessage('Please choose an answer');
            return console.log('NO DATA!')
        };
        if (answer) {
            setIdx(idx + 1);
            checkCorrectAnswer(currentQuestion, currentIndex);
        }
    }

    const checkCorrectAnswer = (current) => {
        const data = questions;

        if(answer == current.correct) {
            console.log('CORRECT!')
        } else {
            console.log('WRONG!')
        }

        if(idx < qty) {
            data[idx].display = false;
            if(data[idx + 1]) {
                data[idx + 1].display = true;
            } else {
                // style message
                // see results & back to start
                setMessage('No more questions');
            }
            setQuestions(data);
            setAnswer('');
        }
    }

    const onChange = (e) => {
        setAnswer(e.target.value);
    }
    return(
        <Question
            questions={questions}
            message={message}
            handleClick={handleClick}
            onChange={onChange}
        />
    );
}

export default QuestionContainer;
import { createContext, useReducer, useContext } from 'react';
import quizReducer, { defaultState } from '../reducers/quizReducer';

const QuizContext = createContext(defaultState);

export const QuizProvider = ({ children }) => {
    const [state, dispatch] = useReducer(quizReducer, defaultState);
    const startNewQuiz = (payload) => {
        dispatch({type: "NEW_QUIZ", payload })
    }

    const value = {
        state,
        startNewQuiz
    }

    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}

const useQuiz = () => {
    const context = useContext(QuizContext);

    if (context === undefined) {
        throw new Error('useQuiz must be used within QuizContext');
    }

    return context;
}

export default useQuiz;
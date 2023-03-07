import quizList from "../../data/quizList";
export const defaultState = {
    quizzes: quizList,
    currentQuiz: {}
}

export const NEW_QUIZ = 'new_quiz';

const quizReducer = (state, action) => {
    const { type, payload } = action;
    console.log('sssss', payload)
    switch (type) {
        case "NEW_QUIZ":
            return {
                ...state,
                currentQuiz: payload
            }
        case "RESET_QUIZ":
            return defaultState;
        default:
            return defaultState;
    }
}

export default quizReducer;
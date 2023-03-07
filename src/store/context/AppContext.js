import { createContext, useReducer } from 'react';
import quizReducer from './store/reducers/quizReducer';
import quizList from './data/quizList';

export const AppContext = createContext();
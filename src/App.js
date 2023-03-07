import { Route, Routes } from 'react-router-dom';
import { createContext } from 'react';
import './App.css';
import HeaderContainer from './containers/HeaderContainer';
import QuizList from './components/quiz_list/QuizList';
import Home from './components/home/Home';
import quizList from './data/quizList';

export const AppContext = createContext();
export const CurrentQuiz = createContext();

function App() {
  return (
    <div>
      <AppContext.Provider value={quizList}>
        <HeaderContainer />
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/quizzes' element={<QuizList />} />
            {/* <QuizContainer /> */}
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;

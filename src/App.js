import { Route, Routes } from 'react-router-dom';
// import { createContext } from 'react';
import './App.css';
import HeaderContainer from './containers/HeaderContainer';
import QuizList from './components/quiz_list/QuizList';
import Home from './components/home/Home';
import { QuizProvider } from './store/context/AppContext';

function App() {
  return (
    <div>
      <QuizProvider>
        <HeaderContainer />
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/quizzes' element={<QuizList />} />
        </Routes>
      </QuizProvider>
    </div>
  );
}

export default App;

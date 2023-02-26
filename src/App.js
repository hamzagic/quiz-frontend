import './App.css';
import HeaderContainer from './containers/HeaderContainer';
import QuizContainer from './containers/QuizContainer';


function App() {
  return (
    <div>
      <HeaderContainer />
      <h1>My Quiz</h1>
      <QuizContainer />
    </div>
  );
}

export default App;

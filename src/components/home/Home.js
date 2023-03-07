import QuizContainer from "../../containers/QuizContainer";
import useQuiz from "../../store/context/AppContext";

const Home = () => {
    const { state } = useQuiz();
    return (
        <div>
            { Object.keys(state.currentQuiz).length === 0 && <h1>Home Page</h1> }
            { Object.keys(state.currentQuiz).length > 0 && <QuizContainer /> }
        </div>
    );
}

export default Home;
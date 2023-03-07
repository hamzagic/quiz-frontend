import QuizContainer from "../../containers/QuizContainer";
import HomeContent from "./HomeContent";
import useQuiz from "../../store/context/AppContext";

const Home = () => {
    const { state } = useQuiz();
    return (
        <div>
            { Object.keys(state.currentQuiz).length === 0 && <HomeContent /> }
            { Object.keys(state.currentQuiz).length > 0 && <QuizContainer /> }
        </div>
    );
}

export default Home;
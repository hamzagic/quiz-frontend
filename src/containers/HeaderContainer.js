import Header from "../components/header/Header";
import useQuiz from "../store/context/AppContext";

const HeaderContainer = () => {
    const { state } = useQuiz();
    const isFinished = Object.keys(state.currentQuiz).length === 0;
    
    return(
        <Header isFinished={isFinished} />
    );
}

export default HeaderContainer;
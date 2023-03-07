import Results from '../components/results/Results';

const ResultsContainer = (props) => {
    return(
        <Results
            correct={props.correct}
            incorrect={props.incorrect}
            totalQuestions={props.totalQuestions}
        />
    );
}

export default ResultsContainer;
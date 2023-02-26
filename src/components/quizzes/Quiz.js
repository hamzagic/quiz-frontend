import styles from './Quiz.module.css';

const Quiz = (props) => {
    const quiz = props.questions;
    const questions = quiz.question_set;
   
    const element = questions.map((el,index) =>
        el.display && <div className={styles.question} key={el.id}>
            <p>{el.question}</p>
            <div className={styles.answers}>
                {el.answers.map((ans, idx) => 
                <div key={idx}>
                    <input type="radio" name="q1" value={ans} onChange={props.onChange} />
                    <label>{ans}</label>
                </div>
                )}   
            </div>
            <button onClick={() => props.handleClick(el, index)}>Submit</button>
            {/* {props.next && <button onClick={() => props.handleNext(quiz)}>Next</button>} */}
        </div>
    );
    
    return(
        <>
            {element}
            <div className={styles.message}>
                {props.message}
            </div>
        </>
    );
}

export default Quiz;
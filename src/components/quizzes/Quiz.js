import styles from './Quiz.module.css';
import classNames from 'classnames';

const Quiz = (props) => {
    const quiz = props.questions;
    const questions = quiz.question_set;

    const messageStyles = classNames(styles.message, {
        [styles.success]: props.message.type === 'success',
        [styles.danger]: props.message.type === 'danger'
    });
   
    const element = questions && questions.map((el,index) =>
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
            {!props.next && <button onClick={() => props.handleClick(el, index)}>Submit</button>}
            {props.next && <button onClick={() => props.handleNext(quiz)}>Next</button>}
        </div>
    );
    
    return(
        <>  
            <h2 className={styles.title}>{quiz.name}</h2>
            {element}
            <div className={messageStyles}>
                {props.message.message}
            </div>
        </>
    );
}

export default Quiz;
import styles from './Quiz.module.css';
import classNames from 'classnames';

const Quiz = (props) => {
    const quiz = props.questions;
    const questions = quiz.question_set;

    const isSame = (x, y) => {
        if(x === y) {
            return true
        }
        return false;
    }

    const messageStyles = classNames(styles.message, {
        [styles.success]: props.message.type === 'success',
        [styles.danger]: props.message.type === 'danger'
    });

   
    const element = questions && questions.map((el,index) =>
        el.display && 
        <div className={styles.question} key={el.id}>
            <p className={styles.question_title}>{el.question}</p>
            <div className={styles.answers}>
                {el.answers.map((ans, idx) => 
                <div key={idx} className={isSame(ans, el.correct) && props.answered ? styles.ok : ''}>
                    <input type="radio" id={`opt${idx}`} name="q1" value={ans} onChange={props.onChange} disabled={props.block} />
                    <label htmlFor={`opt${idx}`}>{ans}</label>
                </div>
                )}   
            </div>
            {!props.next && <button onClick={() => props.handleClick(el, index)} className={styles.submitBtn}>Submit</button>}
            {props.next && <button onClick={() => props.handleNext(quiz)} className={styles.nextBtn}>Next</button>}
        </div>
    );
    
    return(
        <div className={styles.container}>  
            <h2 className={styles.title}>{quiz.name}</h2>
            {element}
            <div className={messageStyles}>
                {props.message.message}
            </div>
        </div>
    );
}

export default Quiz;
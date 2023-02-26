import styles from './Question.module.css';

const Question = (props) => {
    const element = props.questions.map((el,index) =>
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
        </div>
    )
    
    return(
        <>
            {element}
            {props.message}
        </>
    );
}

export default Question;
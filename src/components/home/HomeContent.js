import styles from './HomeContent.module.css';

const HomeContent = () => {
    return(
        <div className={styles.container}>
            <h1>Welcome to QuizFun!</h1>
            <p>Your latest quizzes:</p>
            <p>Here's some quizzes that might interest you:</p>
        </div>
    );
}

export default HomeContent;
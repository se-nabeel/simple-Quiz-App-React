import { React, useContext } from 'react';
import { quizContext } from '../contexts/Context';
import { GeneralQs } from '../Questions/GeneralQs';
import '../App.css';

const EndScreen = () => {
    const { gameState, setgameState, Score ,setScore } = useContext(quizContext);
    const RestartQuiz=()=>{
        setScore(0);
        setgameState('menu');
    }
    return (
        <div className='EndScreen'>
            <h2>Quiz Finished </h2>
            <h2>Total Score</h2>
            <h1>{Score}/{GeneralQs.length}</h1>
        <button onClick={RestartQuiz}>Restart Quiz </button>


        </div>
    );
}

export default EndScreen;

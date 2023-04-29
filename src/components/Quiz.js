import { React, useContext, useState } from 'react';
import { quizContext } from '../contexts/Context';
import '../App.css';
import { GeneralQs } from '../Questions/GeneralQs';

const Quiz = () => {
    const { Score, setScore, setgameState } = useContext(quizContext);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [OptionChoosen, SetOptionChoosen] = useState("");

  

    const RightWrongQs=()=>{
        if (OptionChoosen == GeneralQs[currentQuestion].answer) {
            setScore(Score+1)
        }
        setCurrentQuestion(currentQuestion+1)
    }
    const FinishQuiz=()=>{
        if (OptionChoosen==GeneralQs[currentQuestion].answer) {
            setScore(Score+1)
        }
        setgameState('endscreen')
    }


    return (
        <div className='Quiz'>
            <h2>Quiz</h2>
            <h2>
            {GeneralQs[currentQuestion].prompt}
            </h2>

            <div className='Anwers'>
                <button onClick={() => SetOptionChoosen("A")}>{GeneralQs[currentQuestion].optionA}</button>
                <button onClick={() => SetOptionChoosen("B")}>{GeneralQs[currentQuestion].optionB}</button>
                <button onClick={() => SetOptionChoosen("C")}>{GeneralQs[currentQuestion].optionC}</button>
                <button onClick={() => SetOptionChoosen("D")}>{GeneralQs[currentQuestion].optionD}</button>

            </div>

            {currentQuestion == GeneralQs.length-1 ? (
                <button onClick={FinishQuiz}>Finish Quiz </button>
            )
                : (
                    <button onClick={RightWrongQs}>Next Question </button>

                    )
                    
                }






        </div>
    );
}

export default Quiz;

import {React ,useContext} from 'react';
import { quizContext } from '../contexts/Context';
import '../App.css';

const MainMenu = () => {
    const {gameState ,setgameState} = useContext(quizContext);
    return (
        <div className='Menu'>
            <h2>Menu</h2>
            < button onClick={()=>{ setgameState('quiz')}}>Quiz</button>
        </div>
    );
}

export default MainMenu;

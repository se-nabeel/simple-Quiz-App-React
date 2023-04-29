import './App.css';
import { useState } from 'react';
import MainMenu from './components/MainMenu';
import Quiz from './components/Quiz';
import EndScreen from './components/EndScreen';
import { quizContext } from './contexts/Context';

function App() {
  const [gameState, setgameState] = useState('menu');
  const [Score, setScore] = useState(0);


  return (
    <div className="App">
      <h1>Quiz App</h1>

      <quizContext.Provider value={{ gameState, setgameState, Score, setScore }}>

        {gameState === 'menu' && <MainMenu />}
        {gameState === 'quiz' && <Quiz />}
        {gameState === 'endscreen' && <EndScreen />}

      </quizContext.Provider>

    </div>
  );
}

export default App;

import React from 'react';

const GameEndPopup = ({ result, word, points, onRestart }) => (
  <div className="game-end-popup">
    <p>{result === 'win' ? 'Congratulations! You won!' : 'Game Over! You lost.'}</p>
    <p>The correct word was: {word}</p>
    <p>The you gained was: {points}</p>
    <button onClick={onRestart}>Play Again</button>
  </div>
);

export default GameEndPopup;

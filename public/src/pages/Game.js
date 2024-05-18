// import React, { useState, useEffect } from 'react';
// import GameGrid from '../components/GameGrid';
// import Keyboard from '../components/Keyboard';
// import OpponentProgress from '../components/OpponentProgress';
// import GameEndPopup from '../components/GameEndPopup';
// import { useSocket } from '../hooks/useSocket';

// const Game = ({ user, opponent }) => {
//   const [guesses, setGuesses] = useState([]);
//   const [currentGuess, setCurrentGuess] = useState('');
//   const [feedback, setFeedback] = useState([]);
//   const [gameOver, setGameOver] = useState(false);
//   const [result, setResult] = useState('');
//   const [points, setPoints] = useState(0);
//   const [word, setWord] = useState(''); 
//   const { socket } = useSocket();

//   useEffect(() => {
//     socket.on('gameData', (data) => {
//       setWord(data.word);
//     });

//     socket.on('gameOver', (data) => {
//       setGameOver(true);
//       setResult(data.result);
//       setPoints(data.points);
//     });
//   }, [socket]);

//   const handleKeyPress = (key) => {
//     if (gameOver) return;

//     if (key === 'ENTER') {
//       if (currentGuess.length === 5) {
//         // Validate the guess and provide feedback
//         const newFeedback = checkGuess(currentGuess);
//         setFeedback([...feedback, newFeedback]);
//         setGuesses([...guesses, currentGuess]);
//         setCurrentGuess('');

//         if (newFeedback.every((letter) => letter === 'green')) {
//           // If all letters are green, the user has guessed the word correctly
//           const gainedPoints = calculatePoints(guesses.length);
//           setPoints(gainedPoints);
//           setGameOver(true);
//           setResult('win');
//           socket.emit('gameOver', { result: 'win', points: gainedPoints });
//         } else if (guesses.length === 5) {
//           // If 6 guesses are used and the word is not guessed correctly
//           setGameOver(true);
//           setResult('lose');
//           socket.emit('gameOver', { result: 'lose', points: 0 });
//         }
//       }
//     } else if (key === 'BACKSPACE') {
//       setCurrentGuess(currentGuess.slice(0, -1));
//     } else if (/^[A-Za-z]$/.test(key) && currentGuess.length < 5) {
//       setCurrentGuess(currentGuess + key.toUpperCase());
//     }
//   };

//   const checkGuess = (guess) => {
//     const feedback = Array(5).fill('gray');

//     for (let i = 0; i < 5; i++) {
//       if (guess[i] === word[i]) {
//         feedback[i] = 'green';
//       } else if (word.includes(guess[i])) {
//         feedback[i] = 'yellow';
//       }
//     }

//     return feedback;
//   };

//   const calculatePoints = (attempts) => {
//     switch (attempts) {
//       case 0: return 500;
//       case 1: return 400;
//       case 2: return 300;
//       case 3: return 200;
//       case 4: return 100;
//       case 5: return 50;
//       default: return 0;
//     }
//   };

//   return (
//     <div className="game-page">
//       <h1>Wordle 1v1</h1>
//       <div className="player-info">
//         <div className="player">
//           <OpponentProgress
//             avatarUrl={user.avatarUrl}
//             username={user.username}
//             guessesLeft={6 - guesses.length}
//           />
//         </div>
//         <div className="player">
//           <OpponentProgress
//             avatarUrl={opponent.avatarUrl}
//             username={opponent.username}
//             guessesLeft={opponent.guessesLeft}
//           />
//         </div>
//       </div>
//       <GameGrid guesses={guesses} feedback={feedback} />
//       <Keyboard onKeyPress={handleKeyPress} />
//       {gameOver && (
//         <GameEndPopup
//           result={result}
//           word={word}
//           points={points}
//           onRestart={() => window.location.reload()}
//         />
//       )}
//     </div>
//   );
// };

// export default Game;

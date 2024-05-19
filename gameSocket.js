const socketIo = require('socket.io');
const Game = require('./models');

const gameSockets = (server) => {
  const io = socketIo(server);

  io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('createLobby', async () => {
      const roomCode = generateRoomCode();
      const word = getRandomWord();  // Generate a random word for the game
      const newGame = new Game({ gameID: roomCode, players: [], winner: null, score: [], word });
      await newGame.save();

      socket.join(roomCode);
      socket.emit('lobbyCreated', { roomCode });
    });

    socket.on('joinLobby', async (data) => {
      const { roomCode, playerID } = data;
      socket.join(roomCode);
      const game = await Game.findOne({ gameID: roomCode });
      game.players.push(playerID);
      await game.save();

      socket.emit('gameData', { word: game.word });  // Send the word to the client
      socket.emit('lobbyJoined', { roomCode });
    });

    socket.on('startGame', (data) => {
      const { roomCode } = data;
      io.to(roomCode).emit('gameStarted');
    });

    socket.on('gameOver', async (data) => {
      const { roomCode, result, points, playerID } = data;
      const game = await Game.findOne({ gameID: roomCode });

      if (result === 'win') {
        game.winner = playerID;
      }

      await game.save();
      io.to(roomCode).emit('gameOver', { result, points });
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });
};

const generateRoomCode = () => {
  return Math.random().toString(36).substring(2, 7).toUpperCase();
};

const words = ['APPLE', 'BANANA', 'CHERRY', 'DATES', 'ELDER'];

const getRandomWord = () => words[Math.floor(Math.random() * words.length)];

module.exports = gameSockets;

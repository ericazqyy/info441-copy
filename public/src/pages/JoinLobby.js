import React, { useState } from 'react';

const JoinLobby = ({ user }) => {
  const [roomCode, setRoomCode] = useState('');
  const [opponent, setOpponent] = useState(null);

  const handleJoinLobby = async () => {
    try {
      const response = await fetch('/api/join-lobby', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ roomCode, playerID: user.userID }),
      });
      const data = await response.json();
      setOpponent(data.opponent);
    } catch (error) {
      console.error('Error joining lobby:', error);
    }
  };

  return (
    <div className="join-lobby-page">
      <h1>Join Lobby</h1>
      <input
        type="text"
        value={roomCode}
        onChange={(e) => setRoomCode(e.target.value)}
        placeholder="Enter Room Code"
      />
      <button onClick={handleJoinLobby}>Join</button>
      {opponent && (
        <div className="opponent-info">
          <p>Opponent: {opponent.username}</p>
        </div>
      )}
    </div>
  );
};

export default JoinLobby;

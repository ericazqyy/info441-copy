import React, { useState } from 'react';

const CreateLobby = ({ user }) => {
  const [roomCode, setRoomCode] = useState('');
  const [guest, setGuest] = useState(null);

  const handleCreateLobby = async () => {
    try {
      const response = await fetch('/api/create-lobby', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ playerID: user.userID }),
      });
      const data = await response.json();
      setRoomCode(data.roomCode);
    } catch (error) {
      console.error('Error creating lobby:', error);
    }
  };

  return (
    <div className="create-lobby-page">
      <h1>Create Lobby</h1>
      <button onClick={handleCreateLobby}>Create</button>
      {roomCode && (
        <div className="lobby-info">
          <p>Room Code: {roomCode}</p>
          <p>Host: {user.username}</p>
          {guest ? <p>Guest: {guest.username}</p> : <p>Waiting for guest...</p>}
        </div>
      )}
    </div>
  );
};

export default CreateLobby;

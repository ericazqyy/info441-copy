import React, { useState, useEffect } from 'react';
import UserAvatar from '../components/UserAvatar';
import { useSocket } from '../hooks/useSocket';

const CreateLobby = ({ user }) => {
    const [roomCode, setRoomCode] = useState('');
    const [guest, setGuest] = useState(null);
    const { socket } = useSocket();

    useEffect(() => {
        socket.emit('createLobby');
        socket.on('lobbyCreated', (data) => setRoomCode(data.roomCode));
        socket.on('guestJoined', (data) => setGuest(data.guest));
    }, [socket]);

    const handleReadyUp = () => {
        if (guest) {
            socket.emit('startGame', { roomCode });
        }
    };

    return (
        <div className="create-lobby-page">
            <h1>Create Lobby</h1>
            <p>Room Code: {roomCode}</p>
            <h2>Host:</h2>
            <UserAvatar avatarUrl={user.avatarUrl} username={user.username} />
            <h2>Guest:</h2>
            {guest ? (
                <UserAvatar avatarUrl={guest.avatarUrl} username={guest.username} />
            ) : (
                <p>Waiting for guest...</p>
            )}
            <button onClick={handleReadyUp} disabled={!guest}>Ready Up</button>
        </div>
    );
};

export default CreateLobby;

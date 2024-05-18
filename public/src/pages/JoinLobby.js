import React, { useState } from 'react';
import { useSocket } from '../hooks/useSocket';
import UserAvatar from '../components/UserAvatar';

const JoinLobby = ({ user }) => {
    const [roomCode, setRoomCode] = useState('');
    const [host, setHost] = useState(null);
    const { socket } = useSocket();

    const handleJoinLobby = () => {
    socket.emit('joinLobby', { roomCode });
    socket.on('lobbyJoined', (data) => setHost(data.host));
    };

    return (
        <div className="join-lobby-page">
            <h1>Join Lobby</h1>
            <input
                type="text"
                placeholder="Enter Room Code"
                value={roomCode}
                onChange={(e) => setRoomCode(e.target.value)}
            />
            <button onClick={handleJoinLobby}>Join Lobby</button>
            <h2>Host:</h2>
            <UserAvatar avatarUrl={host.avatarUrl} username={host.username} />
            <h2>Guest:</h2>
            <UserAvatar avatarUrl={user.avatarUrl} username={user.username} />
        </div>
    );
};

export default JoinLobby;

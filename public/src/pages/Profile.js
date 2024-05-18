import React, { useState } from 'react';
import UserAvatar from '../components/UserAvatar';

const Profile = ({ user, games}) => {
    const [newFriend, setNewFriend] = useState('');

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="profile-page">
            <h1>Profile</h1>
            <UserAvatar avatarUrl={user.avatarUrl} username={user.username} />
            <h2>User Stats:</h2>
            <p>ELO Rating: {user.elo}</p>
            <p>Total Games Played: {user.gamesPlayed.length}</p>
            <p>Games Won: {user.gamesWon}</p>
            <p>Games Lost: {user.gamesLost}</p>
            <h2>Leaderboard:</h2>
            
            <h2>Friends List:</h2>
            
            <h2>Previous Game History:</h2>
        
            <h2>Add a Friend:</h2>
            
            <button>Logout</button>
        </div>
    );
};

export default Profile;

import React from 'react';

const UserAvatar = ({ avatarUrl, username }) => (
    <div className="user-avatar">
        <img src={avatarUrl} alt={`${username}'s avatar`} />
        <p>{username}</p>
    </div>
);

export default UserAvatar;

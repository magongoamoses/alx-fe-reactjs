import React, { useContext } from 'react';
import UserContext from './UserContext';

const UserProfile = () => {
    const { name, age, bio } = useContext(UserContext);

    return (
        <div style={{
            fontFamily: 'sans-serif',
            color: 'lightblue',
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '15px',
            margin: '20px auto',
            maxWidth: '400px'
        }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>{name}</h2>
            <p>Age: {age}</p>
            <p>Bio: {bio}</p>
        </div>
    );
}

export default UserProfile;
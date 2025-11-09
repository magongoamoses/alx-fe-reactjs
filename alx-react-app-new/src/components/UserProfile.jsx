const UserProfile = (props) => {
    return (
        <div style={{ fontFamily: 'sans-serif', color: 'lightblue', border: '1px solid #ccc', borderRadius: '8px', padding: '15px', margin: '20px auto', maxWidth: '400px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>{props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Bio: {props.bio}</p>
        </div>
    );
}

export default UserProfile;
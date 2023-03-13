import Avatar from 'react-avatar';

function User() {
    return (
        <div>
            <Avatar name='User Name' size='80' round />
            <div className='text-muted fs-6 fw-light'>Welcome,</div>
            <h2>User Name</h2>
        </div>
    );
}

export default User;

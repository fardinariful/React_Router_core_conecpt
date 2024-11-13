import './User.css'
const User = ({user}) => {
    const {name,id,email,phone}=user;
    return (
        <div className='userstyle'>
            <h2>{name}</h2>
            <p>Email:{email}</p>
            <p>Phone:{phone}</p>
        </div>
    );
};

export default User;
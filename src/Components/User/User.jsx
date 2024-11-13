import { Link } from 'react-router-dom';
import './User.css'
const User = ({user}) => {
    const {name,id,email,phone}=user;
    return (
        <div className='userstyle'>
            <h2>{name}</h2>
            <p>Email:{email}</p>
            <p>Phone:{phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;
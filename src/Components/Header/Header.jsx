import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact us</Link>
            <Link to="/about">About us</Link>
            <Link to="/users">Users</Link>
            <Link to="/posts">Post</Link>
            
        </nav>
    );
};

export default Header;
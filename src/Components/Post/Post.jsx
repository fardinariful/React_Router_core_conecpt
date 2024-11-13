import { Link, useNavigate } from 'react-router-dom';
import './Post.css'
const Post = ({post}) => {
    const {id,title,body}=post;
        const navigate=useNavigate();
    const handleclick1=()=>{
        navigate(`/post/${id}`);
    }
    return (
        <div className="poststyle">
            <h3>Userid:{id}</h3>
            <p>{title}</p>
            <p>{body}</p>
             <Link to={`/post/${id}`}>Show Details</Link>
             <br />
             <button onClick={handleclick1}>Click me for details</button>
        </div>
    );
};

export default Post;
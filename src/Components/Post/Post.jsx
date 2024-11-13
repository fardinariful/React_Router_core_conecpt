import { Link } from 'react-router-dom';
import './Post.css'
const Post = ({post}) => {
    const {id,title,body}=post;
    return (
        <div className="poststyle">
            <h3>Userid:{id}</h3>
            <p>{title}</p>
            <p>{body}</p>
             <Link to={`/post/${id}`}>Show Details</Link>
        </div>
    );
};

export default Post;
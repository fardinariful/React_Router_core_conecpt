import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
    const PostDetail=useLoaderData();
    const navigate=useNavigate();
    const {id,title,body}=PostDetail;
    const handleclick2=()=>{
      navigate(-1);
    }
    return (
        <div>
            <h3>ID:{id}</h3>
            <p>{title}</p>
            <p>{body}</p>
            <button onClick={handleclick2}>GO Back</button>
        </div>
    );
};

export default PostDetails;
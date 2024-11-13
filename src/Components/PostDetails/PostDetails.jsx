import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const PostDetail=useLoaderData();
    const {id,title,body}=PostDetail;
    return (
        <div>
            <h3>ID:{id}</h3>
            <p>{title}</p>
            <p>{body}</p>
        </div>
    );
};

export default PostDetails;
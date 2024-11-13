import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const userdetails=useLoaderData();
    const {name,username,email,phone,website}=userdetails;
    return (
        <div>
            <h3>User Details are there</h3>
            <p>{name}</p>
            <p>{username}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{website}</p>
        </div>
    );
};

export default UserDetails;
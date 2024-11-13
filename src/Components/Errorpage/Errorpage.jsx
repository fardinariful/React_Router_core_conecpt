import { useRouteError } from "react-router-dom";

const Errorpage = () => {
    const error=useRouteError();
    console.log(error);
    return (
        <div>
            <h1>Oops</h1>
        </div>
    );
};

export default Errorpage;
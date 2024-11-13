import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <h3>This is home section</h3>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;
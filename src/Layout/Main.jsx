import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";


const Main = () => {
    return (
        <div >
            <div className="max-w-screen-xl mx-auto"><NavBar></NavBar></div>
            <div className="max-w-screen-xl mx-auto"><Outlet></Outlet></div>
            <Footer></Footer>
        </div>
    );
};

export default Main;
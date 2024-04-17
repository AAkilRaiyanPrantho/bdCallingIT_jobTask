import Banner from "../../Components/Banner/Banner";
import Events from "../../Components/Events/Events";
import HostEventBanner from "../../Components/HostEventBanner/HostEventBanner";
import QRCode from "../../Components/QRCode/QRCode";
import Ticket from "../../Components/Ticket/Ticket";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Events></Events>
            <HostEventBanner></HostEventBanner>
            <QRCode></QRCode>
            <Ticket></Ticket>
        </div>
    );
};

export default Home;
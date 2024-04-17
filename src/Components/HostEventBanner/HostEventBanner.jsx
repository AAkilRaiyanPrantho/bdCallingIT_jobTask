import eventImage from '../../../Event host/Resourcess/Group 29.png'
import eventClock from '../../../Event host/Resourcess/Group.png'

import { FaCheckCircle } from "react-icons/fa";

const HostEventBanner = () => {
  return (
    <div>
      <div className="card lg:card-side text-white bg-[#7342F9] shadow-xl p-10 w-[1160px] h-[574px] my-10">
        <figure>
          <img
            src={eventImage}
            alt="Album"
          />
        </figure>
        <div className="card-body flex flex-col gap-4 relative">
          <h1 className="text-3xl font-semibold">Host Your Event Easily and Automatedly With Us</h1>
          <h2 className="text-2xl">We Provide The Best Event Ticketing & Management Solutions</h2>
          <p className='flex items-center gap-2 text-lg'><span><FaCheckCircle /></span> Host Your Event With Easy Steps!</p>
          <p className='flex items-center gap-2 text-lg'><span><FaCheckCircle /></span> Automated Payment System & Ticket Will Be Sent To Mail.</p>
          <p className='flex items-center gap-2 text-lg'><span><FaCheckCircle /></span> Access To Registration And Transaction Reports</p>
          <p className='flex items-center gap-2 text-lg'><span><FaCheckCircle /></span> Send Bulk Personalized Mail With Attachments</p>
          <div className='absolute bottom-[-40px] right-[-40px]'>
            <img src={eventClock}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostEventBanner;

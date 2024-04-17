import bkash from "../../../Event host/Resourcess/image 9.png";
import nagad from "../../../Event host/Resourcess/Group 40.png";
import rocket from "../../../Event host/Resourcess/dutch-bangla-rocket-logo-B4D1CC458D-seeklogo 1.png";

import sheild from "../../../Event host/Resourcess/icon/fi-sr-shield-check.png";

const Ticket = () => {
  return (
    <div className="bg-gradient-to-b from-[#FFFFFF] to-[#F1F3FF] w-[#1160px] h-[#740px] rounded-3xl my-16">
      <div className="flex flex-col items-center my-5">
        <h1 className="mb-5 text-4xl font-semibold">Simplify Ticketing</h1>
        <h1 className="mb-5 text-center text-2xl text-[#7342F9]">
          First Ever Unique QR Ticketing <br /> Platform For Event Registration
          & Booking
        </h1>
        <button className="btn text-white bg-[#7342F9] border-0">
          <img src={sheild}></img> Secure Payment With
        </button>
      </div>
      <div className="flex items-center justify-center mt-16 overflow-hidden">
        <div className="artboard phone-1 bg-[#8C3494] rounded-2xl relative top-32 left-16 border-2 border-white flex flex-col items-center gap-10 z-0">
          <div className="badge w-[78px] h-[16px] my-4"></div>
          <img src={rocket}></img>
        </div>
        <div className="artboard phone-1 bg-[#ED0A80] rounded-2xl relative border-2 border-white flex flex-col items-center top-12 gap-10 z-10">
          <div className="badge w-[78px] h-[16px] my-4"></div>
          <img src={bkash}></img>
        </div>
        <div className="artboard phone-1 bg-gradient-to-r from-[#F7941D] to-[#ED1C24] rounded-2xl relative top-32 right-16 border-2 border-white flex flex-col items-center gap-10 z-0">
          <div className="badge w-[78px] h-[16px] my-4"></div>
          <img src={nagad}></img>
        </div>
      </div>
    </div>
  );
};

export default Ticket;

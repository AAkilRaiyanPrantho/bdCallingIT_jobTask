import banner from "../../../Event host/Resourcess/Rectangle 8.png";
import vector from "../../../Event host/Resourcess/icon/Vector.png";


const Banner = () => {
  return (
    <div>
      <div
        className="hero w-[1160px] h-[440px] relative"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="hero-overlay bg-opacity-60 rounded-[35px]"></div>
        <div className="hero-content text-left text-white absolute left-20">
          <div className="">
            <h1 className="mb-5 text-4xl font-semibold">CMA Fest</h1>
            <p className="mb-5 text-lg">
            Make Memories That Will Last A Lifetime. See Your Favorite <br/> Artists Live At CMA Fest!
            </p>
            <div className="flex">
            <button className="btn btn-primary border-0 bg-[#7342F9] mr-2"><img src={vector}></img> Get Ticket</button>
            <button className="btn btn-outline text-white">Explore All Events</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import heart from "../../../Event host/Resourcess/icon/Heart.png";
import vector from "../../../Event host/Resourcess/icon/Vector.png";

import cardImage1 from "../../../Event host/Resourcess/Rectangle 16.png"
import cardImage2 from "../../../Event host/Resourcess/Rectangle 16-1.png"
import cardImage3 from "../../../Event host/Resourcess/Rectangle 16-2.png"

const Events = () => {
  return (
    <div>
      <div className="flex flex-col items-center my-5">
        <h1 className="mb-5 text-4xl font-semibold">Events</h1>
        <div role="tablist" className="tabs gap-2">
          <a role="tab" className="tab btn btn-ghost">
            All
          </a>
          <a role="tab" className="tab btn btn-ghost">
            For You
          </a>
          <a role="tab" className="tab btn btn-ghost">
            This Day
          </a>
          <a role="tab" className="tab btn btn-ghost">
            This Week
          </a>
          <a
            role="tab"
            className="tab text-white btn bg-[#7342F9] border-0  tab-active"
          >
            Music
          </a>
          <a role="tab" className="tab btn btn-ghost">
            Union
          </a>
        </div>
      </div>
      <div className="flex gap-4">
        {/* card 1 */}
        <div className="card w-96 bg-[#F1F3FF] shadow-xl">
          <div className="flex justify-around relative">
            <div className="badge badge-primary absolute left-12 top-12 p-3 bg-[#7342F9] border-0">
              Online
            </div>
            <div className="badge badge-primary p-3 absolute right-12 top-12 bg-[#7342F9] border-0">
              <span className="mr-1">
                <img src={heart} />
              </span>{" "}
              Favorite
            </div>
          </div>
          <figure className="px-10 pt-10">
            <img
              src={cardImage1}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>

          <div className="card-body text-center">
            <hr
              style={{
                color: "#7342F9",
                height: 2,
                borderTop: "dashed"
              }}
            />
            <div className="flex gap-10">
              <div className="text-left">
                <div className="badge badge-primary left-12 top-12 p-3 border-0 bg-[#7342F9] mb-1">
                  Music
                </div>
                <p>Celebrity Convention Hall</p>
                <h2 className="card-title">Roufian's HSC-24 Rag</h2>
              </div>
              <div>
                <p className="bg-[#FFFFFF] text-lg">
                  Apr <br />
                  <span className="text-[#7342F9] text-2xl font-semibold">
                    20
                  </span>
                  <br />
                  <span>10.00 PM</span>
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="btn text-white bg-[#7342F9] border-0">
               <img src={vector}></img> See Tickets
              </button>
              <button className="btn btn-outline border-0 bg-[#FFFFFF]">
                <span className="text-[#7342F9] text-2xl">20</span> Seat <br />{" "}
                Left
              </button>
              <button className="btn btn-link text-[#7342F9] no-underline">
                See More
              </button>
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div className="card w-96 bg-[#F1F3FF] shadow-xl">
          <div className="flex justify-around relative">
            <div className="badge badge-primary absolute left-12 top-12 p-3 bg-[#7342F9] border-0">
              Online
            </div>
            <div className="badge badge-primary p-3 absolute right-12 top-12 bg-[#7342F9] border-0">
              <span className="mr-1">
                <img src={heart} />
              </span>{" "}
              Favorite
            </div>
          </div>
          <figure className="px-10 pt-10">
            <img
              src={cardImage2}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>

          <div className="card-body text-center">
            <hr
              style={{
                color: "#7342F9",
                height: 2,
                borderTop: "dashed"
              }}
            />
            <div className="flex gap-10">
              <div className="text-left">
                <div className="badge badge-primary left-12 top-12 p-3 border-0 bg-[#7342F9] mb-1">
                  Music
                </div>
                <p>Celebrity Convention Hall</p>
                <h2 className="card-title">Roufian's HSC-24 Rag</h2>
              </div>
              <div>
                <p className="bg-[#FFFFFF] text-lg">
                  Apr <br />
                  <span className="text-[#7342F9] text-2xl font-semibold">
                    20
                  </span>
                  <br />
                  <span>10.00 PM</span>
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="btn text-white bg-[#7342F9] border-0">
               <img src={vector}></img> See Tickets
              </button>
              <button className="btn btn-outline border-0 bg-[#FFFFFF]">
                <span className="text-[#7342F9] text-2xl">20</span> Seat <br />{" "}
                Left
              </button>
              <button className="btn btn-link text-[#7342F9] no-underline">
                See More
              </button>
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div className="card w-96 bg-[#F1F3FF] shadow-xl">
          <div className="flex justify-around relative">
            <div className="badge badge-primary absolute left-12 top-12 p-3 bg-[#7342F9] border-0">
              Online
            </div>
            <div className="badge badge-primary p-3 absolute right-12 top-12 bg-[#7342F9] border-0">
              <span className="mr-1">
                <img src={heart} />
              </span>{" "}
              Favorite
            </div>
          </div>
          <figure className="px-10 pt-10">
            <img
              src={cardImage3}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>

          <div className="card-body text-center">
            <hr
              style={{
                color: "#7342F9",
                height: 2,
                borderTop: "dashed"
              }}
            />
            <div className="flex gap-10">
              <div className="text-left">
                <div className="badge badge-primary left-12 top-12 p-3 border-0 bg-[#7342F9] mb-1">
                  Music
                </div>
                <p>Celebrity Convention Hall</p>
                <h2 className="card-title">Roufian's HSC-24 Rag</h2>
              </div>
              <div>
                <p className="bg-[#FFFFFF] text-lg">
                  Apr <br />
                  <span className="text-[#7342F9] text-2xl font-semibold">
                    20
                  </span>
                  <br />
                  <span>10.00 PM</span>
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="btn text-white bg-[#7342F9] border-0">
               <img src={vector}></img> See Tickets
              </button>
              <button className="btn btn-outline border-0 bg-[#FFFFFF]">
                <span className="text-[#7342F9] text-2xl">20</span> Seat <br />{" "}
                Left
              </button>
              <button className="btn btn-link text-[#7342F9] no-underline">
                See More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;

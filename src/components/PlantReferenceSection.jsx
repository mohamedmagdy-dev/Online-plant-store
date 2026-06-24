// imgs
import LivingRoomImg from "../assets/imgs/living-room.png";
import GuestRoomImg from "../assets/imgs/guest-room.png";
import BedRoomImg from "../assets/imgs/bed-room.png";

export default function PlantReferenceSection() {
  return (
    <section className="pb-35">
      <div className="heading text-center mb-20.5">
        <h2 className="mb-6.75 font-medium text-5xl md:text-[64px] text-abyss px-5">
          Interior Plant Reference
        </h2>
        <p className="text-gray-dark text-xl md:text-2xl ">
          make your home so comfortable with refreshing plants
        </p>
      </div>
      <div className="container px-5 min-h-248.75 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col">
          <div
            className="card h-137.25 lg:h-[50%] mb-8 bg-cover bg-no-repeat bg-center rounded-[50px]"
            style={{ backgroundImage: `url(${LivingRoomImg})` }}
          >
            <div className="overlay w-full h-full flex justify-center items-center text-white font-semibold text-5xl md:text-[64px] bg-[#0000004D] rounded-[50px]">
              <h3>Living Room</h3>
            </div>
          </div>
          <div
            className="card h-137.25 lg:h-[50%] bg-cover bg-no-repeat bg-center rounded-[50px]"
            style={{ backgroundImage: `url(${BedRoomImg})` }}
          >
            <div className="overlay w-full h-full flex justify-center items-center text-white font-semibold text-5xl md:text-[64px] bg-[#0000004D] rounded-[50px]">
              <h3>Bed Room</h3>
            </div>
          </div>
        </div>
        <div
          className="card h-137.25 lg:h-full bg-cover bg-no-repeat bg-center rounded-[50px]"
          style={{ backgroundImage: `url(${GuestRoomImg})` }}
        >
          <div className="overlay w-full h-full flex justify-center items-center text-white font-semibold text-5xl md:text-[64px] bg-[#0000004D] rounded-[50px]">
            <h3>Guest Room</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

// imgs
import SideImg from "../assets/imgs/plants-care-img.png";

// Icons
import AkarWaterIcon from "../assets/icons/akar-icons_water.png";
import CharmPlantPot from "../assets/icons/charm_plant-pot.png";
import ParkOutlineSun from "../assets/icons/icon-park-outline_sun.png";
import TablerTemperatureIcon from "../assets/icons/tabler_temperature.png";

export default function PlantsCareSection() {
  return (
    <section className="pb-35">
      <div className="container px-5 flex max-lg:flex-col justify-between items-center gap-10">
        <div className="info">
          <h2 className="font-medium text-5xl md:text-[64px] text-abyss mb-7">
            How to care <br /> for plants
          </h2>
          <p className="text-gray-dark text-xl md:text-2xl font">
            Take care of plants with all your heart
          </p>
          <div className="care-points flex flex-col gap-8 mt-20.5 lg:w-146.25">
            <Point
              title="Adjust Lighting"
              desc="When caring for indoor plants, make sure the room temperature is neither too cold nor too hot"
              img={ParkOutlineSun}
            />
            <Point
              title="Don't water too often"
              desc="Watering ornamental plants indoors does not have to be done every day."
              img={AkarWaterIcon}
            />
            <Point
              title="Don't water too often"
              desc="Watering ornamental plants indoors does not have to be done every day."
              img={CharmPlantPot}
            />
            <Point
              title="Fertilize regularly"
              desc="The nutrients most indoor houseplants need are nitrogen for balance and potassium for stem strength"
              img={TablerTemperatureIcon}
            />
          </div>
        </div>
        <div className="xl:h-154.5 w-full md:w-164 rounded-[50px]">
          <img src={SideImg} alt="plants care img" className="w-full h-full" />
        </div>
      </div>
    </section>
  );
}

function Point({ title, desc, img }) {
  return (
    <div className="point flex gap-6 items-start">
      <img src={img} alt={title + "Icon"} width={68} height={68} />
      <div className="content">
        <h3 className="mb-2 text-black font-medium text-[32px]">{title}</h3>
        <p className="text-gray-dark text-[20px]">{desc}</p>
      </div>
    </div>
  );
}

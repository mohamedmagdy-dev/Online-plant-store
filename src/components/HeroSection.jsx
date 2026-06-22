// img
import roomBg from "../assets/imgs/modern-living-roombackground.jpg";

// Icons
import searchIcon from "../assets/icons/searchIcon.svg";


//UI Elements
import { Input, RoundedButton } from "./ui/UiElements";

export default function HeroSection() {
  return (
    <section
      className="w-full min-h-352.5 bg-cover bg-no-repeat pt-5.5 text-white relative"
      style={{ backgroundImage: `url(${roomBg})` }}
    >
      <h1 className="font-bold text-5xl md:text-6xl lg:text-[82px] text-center pt-45.5">
        Bring Serenity to Your Place <br /> With Interior Plants
      </h1>
      <p className="text-center text-lg md:text-xl/normal lg:text-2xl/normal mt-6 mb-10.5">
        find your dream plant for you home decoration
        <br /> with us, and we will make it happen.
      </p>
      <div className="m-auto relative  md:w-fit px-2">
        <Input placeHolder="Search plant" />
        <RoundedButton
          buttonIcon={searchIcon}
          altText="Search Icon"
          style="absolute right-5 top-2.5"
        />
      </div>
      <div className="absolute bg-linear-to-b from-white/0 to-white w-full bottom-0 h-52"></div>
    </section>
  );
}

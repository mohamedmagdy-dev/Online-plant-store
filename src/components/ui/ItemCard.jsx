// Icon
import starIcon from "../../assets/icons/starIcon.png";
import pluseIcon from "../../assets/icons/pluse-icon.svg";

// Ui elements
import { RoundedButton } from "./UiElements";

export default function ItemCard({
  rate = 5,
  title = "Title",
  price = 40,
  plantImg,
}) {
  return (
    <article className="h-158.5 w-full md:w-82.25 flex flex-col justify-between items-center  relative">
      <img src={plantImg} alt={title + " plant"} width={325} height={333} />
      <div className="cardActions w-full h-65 p-9.5 bg-white rounded-[50px]  flex flex-col justify-between drop-shadow-[0_7px_7px_#00000040] mt-10">
        <div>
          <h3 className="text-abyss text-[32px] font-medium mb-1.75">
            {title}
          </h3>
          <div className="flex gap-1">
            <Rate rate={rate} />
          </div>
        </div>
        <div className="flex justify-between items-center ">
          <span className="text-abyss text-[32px] font-medium">${price}</span>
          <RoundedButton
            buttonIcon={pluseIcon}
            altText="Pluse Icon"
            style="from-white to-white"
          />
        </div>
      </div>
      <div className="cardBg h-127.5 w-full -z-1 bg-mist absolute bottom-0 rounded-[50px]"></div>
    </article>
  );
}

function Rate({ rate }) {
  let result = [];

  for (let i = 1; i <= Math.ceil(rate); i++) {
    result.push(<img key={i} src={starIcon} alt="Star Icon" />);
  }

  return result;
}

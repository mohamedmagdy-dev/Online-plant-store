//clsx
import clsx from "clsx";

// Icons
import starIcon from "../../assets/icons/starIcon.png";

export function Input({ placeHolder = "" }) {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder={placeHolder}
        className="text-white rounded-[50px] text-[20px] py-6 px-7.5 border border-white w-full md:w-115.75 h-17.75 outline-white"
      />
    </div>
  );
}

export function RoundedButton({ buttonIcon, altText, style = "",onClick=()=>{} }) {
  return (
    <button
    onClick={onClick}
      className={clsx(
        "cursor-pointer w-12.5 h-12.5 rounded-full bg-linear-to-r from-mint to-sky flex justify-center items-center",
        style,
      )}
    >
      <img src={buttonIcon} alt={altText} />
    </button>
  );
}

export function CurvedButton({ buttonContent = "", style = "", onClick=()=>{} }) {
  return (
    <button
    onClick={onClick}
      className={clsx(
        "cursor-pointer h-11.75 rounded-[50px] text-[20px] text-center px-6 py-3 text-white bg-linear-to-r from-mint to-sky flex justify-center items-center",
        style,
      )}
    >
      {buttonContent}
    </button>
  );
}

export function Rate({ rate }) {
  let result = [];

  for (let i = 1; i <= Math.ceil(rate); i++) {
    result.push(<img key={i} src={starIcon} alt="Star Icon" />);
  }

  return result;
}

export function PriceSlider({
  min = 0,
  max = 100,
  step = 1,
  value = 0,
  style = "",
  handleChange = () => {},
}) {
  return (
    <input
      className={clsx(style)}
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={handleChange}
    />
  );
}

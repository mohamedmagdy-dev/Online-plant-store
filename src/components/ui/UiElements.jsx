//clsx
import clsx from "clsx";

export function Input({ placeHolder = "" }) {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder={placeHolder}
        className="text-white rounded-[50px] text-[20px] py-6 px-7.5 border border-white w-115.75 h-17.75 outline-white"
      />
    </div>
  );
}

export function RoundedButton({buttonIcon, altText, style = ""}) {
  return (
    <button
      className={clsx(
        "cursor-pointer w-12.5 h-12.5 rounded-full bg-linear-to-r from-mint to-sky flex justify-center items-center",
        style,
      )}
    >
      <img src={buttonIcon} alt={altText} />
    </button>
  );
}

export function CurvedButton({buttonContent ="", style = ""}) {
  return (
    <button
      className={clsx(
        "cursor-pointer h-11.75 rounded-[50px] text-[20px] text-center px-6 py-3 text-white bg-linear-to-r from-mint to-sky flex justify-center items-center",
        style,
      )}
    >
      {buttonContent}
    </button>
  );
}

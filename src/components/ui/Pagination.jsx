import clsx from "clsx";
import { useState } from "react";

export default function Pagination() {
  const [activePage, setActivePage] = useState(2);
  return (
    <div className="mt-15 flex justify-center items-center gap-4">
      <button
        className={clsx(
          "cursor-pointer min-w-12.5 h-12.5 flex items-center justify-center font-bold text-lg",
          activePage === 1 &&
            "bg-linear-to-r from-mint to-sky text-white rounded-md",
        )}
      >
        1
      </button>
      <button
        className={clsx(
          "cursor-pointer min-w-12.5 h-12.5 flex items-center justify-center font-bold text-lg",
          activePage === 2 &&
            "bg-linear-to-r from-mint to-sky text-white rounded-md",
        )}
      >
        2
      </button>
            <button
        className={clsx(
          "cursor-pointer min-w-12.5 h-12.5 flex items-center justify-center font-bold text-lg",
          activePage === 3 &&
            "bg-linear-to-r from-mint to-sky text-white rounded-md",
        )}
      >
        3
      </button>
            <button
        className={clsx(
          "cursor-pointer min-w-12.5 h-12.5 flex items-center justify-center font-bold text-lg",
          activePage === 4 &&
            "bg-linear-to-r from-mint to-sky text-white rounded-md",
        )}
      >
        4
      </button>
    </div>
  );
}

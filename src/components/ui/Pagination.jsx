import clsx from "clsx";
import { useState } from "react";

export default function Pagination({
  currentPage,
  setCurrentPage,
  totalItems,
  itemsPerPage,
}) {
  const buttonsCount = Math.ceil(totalItems / itemsPerPage);
  const pageButtons = [];
  for (let i = 0; i < buttonsCount; i++) {
    pageButtons.push(
      <button
        key={i + 1}
        onClick={() => setCurrentPage(i + 1)}
        className={clsx(
          "cursor-pointer min-w-12.5 h-12.5 flex items-center justify-center font-bold text-lg",
          currentPage === i + 1 &&
            "bg-linear-to-r from-mint to-sky text-white rounded-md",
        )}
      >
        {i + 1}
      </button>,
    );
  }

  return (
    <div className="mt-15 flex justify-center items-center gap-4">
      {pageButtons}
    </div>
  );
}

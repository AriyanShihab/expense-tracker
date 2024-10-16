import React from "react";

export default function AmountShower({ amountToDisplay, amountTypeText,isNegetiveRed }) {
  return (
    <div className="bg-[#F9FAFB] flex lg:max-w-xs flex-col px-4 py-4">
      <dt className="text-base leading-7 text-gray-600">{amountTypeText}</dt>
      <dd
        className={`order-first text-xl font-semibold tracking-tight  sm:text-3xl ${ isNegetiveRed?
          amountToDisplay < 0 ? "text-red-300" : "text-gray-700":"text-gray-700"
        }`}
      >
        BDT {amountToDisplay}
      </dd>
    </div>
  );
}

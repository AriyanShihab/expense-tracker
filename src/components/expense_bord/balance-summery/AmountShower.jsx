import React from "react";

export default function AmountShower({ amountType, amount }) {
  return (
    <div className="bg-[#F9FAFB] flex lg:max-w-xs flex-col px-4 py-4">
      <dt className="text-base leading-7 text-gray-600">{amountType}</dt>
      <dd
        className={`order-first text-xl font-semibold tracking-tight  sm:text-3xl ${
          amount < 0 ? "text-red-300" : "text-gray-700"
        }`}
      >
        BDT {amount}
      </dd>
    </div>
  );
}

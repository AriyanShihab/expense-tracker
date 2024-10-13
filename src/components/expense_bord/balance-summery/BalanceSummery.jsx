import React from "react";
import AmountShower from "./AmountShower";

export default function BalanceSummery() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl">
        <dl className="grid grid-cols-1 text-center lg:grid-cols-3 divide-x-2 border rounded-md overflow-hidden">
          <AmountShower amountType={"Balance"} amount={20000} />
          <AmountShower amountType={"Total Income"} amount={20000} />
          <AmountShower amountType={"Total Expense"} amount={20000} />
        </dl>
      </div>
    </div>
  );
}

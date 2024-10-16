import React from "react";
import ExpenseTitleIcon from "./ExpenseTitleIcon";
import ExpanseShorting from "./ExpanseShorting";
import ExpanseRow from "./ExpanseRow";
import ExpanseFilter from "./ExpanseFilter";

export default function Expense({ expenseTransactions, shortEntrys }) {
  return (
    <div className="border rounded-md relative">
      <div className="flex items-center justify-between gap-2 bg-[#F9FAFB] py-4 px-4 rounded-md">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 bg-pink-600 text-white rounded-md text-center object-center place-content-center text-base">
            <ExpenseTitleIcon />
          </div>

          <div>
            <h3 className="text-xl font-semibold leading-7 text-gray-800">
              Expense
            </h3>
          </div>
        </div>

        <div>
          <ExpanseShorting shortEntrys={shortEntrys} />

          <ExpanseFilter />
        </div>
      </div>
      <div className="p-4 divide-y">
        {expenseTransactions.map((entry) => (
          <ExpanseRow key={entry.id} data={entry} />
        ))}
      </div>
    </div>
  );
}

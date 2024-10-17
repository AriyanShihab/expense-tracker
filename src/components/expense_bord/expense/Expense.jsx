import React, { useState } from "react";
import ExpenseTitleIcon from "./ExpenseTitleIcon";
import ExpanseShorting from "./ExpanseShorting";
import ExpanseRow from "./ExpanseRow";
import ExpanseFilter from "./ExpanseFilter";

export default function Expense({ expenseTransactions, shortEntrys ,handleEditOfEntry}) {
  const [activeFilters, setActiveFilters] = useState({
    Education: false,
    Food: false,
    Helth: false,
    Bill: false,
    Insurance: false,
    Transport: false,
    Telephone: false,
  });

  const handleFilterChange = (filterName, isChecked) => {
    setActiveFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: isChecked,
    }));
  };

  const filteredEntry = expenseTransactions.filter((entry) => {
    const isFilterApplyed = Object.keys(activeFilters).some(
      (key) => activeFilters[key] === true
    );
    if (isFilterApplyed) {
      return Object.keys(activeFilters).some(
        (category) => activeFilters[category] && entry.category === category
      );
    } else return expenseTransactions;
  });
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

          <ExpanseFilter
            activeFilters={activeFilters}
            handleFilterChange={handleFilterChange}
          />
        </div>
      </div>
      <div className="p-4 divide-y">
        {filteredEntry.map((entry) => (
          <ExpanseRow key={entry.id} data={entry}  handleEditOfEntry={handleEditOfEntry}/>
        ))}
      </div>
    </div>
  );
}

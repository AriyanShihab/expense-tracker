import React, { useState } from "react";
import IncomeTitleIcon from "./IncomeTitleIcon";
import IncomeRow from "./IncomeRow";
import IncomeFilter from "./IncomeFilter";
import IncomeShorting from "./IncomeShorting";

export default function Income({ incomeTransactions, shortEntrys ,handleEditOfEntry}) {
  // catrgory of income for filterring income entry..

  const [activeFilters, setActiveFilters] = useState({
    Salary: false,
    Outsourcing: false,
    Bond: false,
    Dividend: false,
  });

  // funtion for handeling filter change

  const handleFilterChange = (filterName, isChecked) => {
    setActiveFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: isChecked,
    }));
  };

  const filteredEntry = incomeTransactions.filter((entry) => {
    const isFilterApplyed = Object.keys(activeFilters).some(
      (key) => activeFilters[key] === true
    );
    if (isFilterApplyed) {
      return Object.keys(activeFilters).some(
        (category) => activeFilters[category] && entry.category === category
      );
    } else return incomeTransactions;
  });
  

  return (
    <div className="border rounded-md relative">
      <div className="flex items-center justify-between gap-2 bg-[#F9FAFB] py-4 px-4 rounded-md">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 bg-teal-600 text-white rounded-md text-center object-center place-content-center text-base">
            <IncomeTitleIcon />
          </div>

          <div>
            <h3 className="text-xl font-semibold leading-7 text-gray-800">
              Income
            </h3>
          </div>
        </div>
        <div>
          <IncomeShorting shortEntrys={shortEntrys} />

          <IncomeFilter
            activeFilters={activeFilters}
            handleFilterChange={handleFilterChange}
          />
        </div>
      </div>
      <div className="p-4 divide-y">
        {filteredEntry.map((entry) => (
          <IncomeRow key={entry.id} data={entry} handleEditOfEntry={handleEditOfEntry} />
        ))}
      </div>
    </div>
  );
}

import React from "react";
import IncomeTitleIcon from "./IncomeTitleIcon";
import ShortIcon from "../../../global-icons/ShortIcon";
import FilterIcon from "../../../global-icons/FilterIcon";
import EditIcon from "../../../global-icons/EditIcon";
import DeleteIcon from "../../../global-icons/DeleteIcon";
import IncomeRow from "./IncomeRow";
import IncomeFilter from "./IncomeFilter";
import IncomeShorting from "./IncomeShorting";

export default function Income() {
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
          {/* Sorting */}
          <IncomeShorting />
          {/* Filtering */}
          <IncomeFilter />
        </div>
      </div>
      <div className="p-4 divide-y">
        <IncomeRow />
      </div>
    </div>
  );
}

import React, { useState } from "react";
import FilterIcon from "../../../global-icons/FilterIcon";

export default function ExpanseFilter({ activeFilters, handleFilterChange }) {
  const [show, setShow] = useState(false);
  function handleChackBoxChange(event) {
    const name = event.target.name;
    const isChecked = event.target.checked;
    handleFilterChange(name, isChecked)
  }

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={() => setShow(!show)}
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          id="filter-button-2"
          aria-expanded="true"
          aria-haspopup="true"
        >
          <FilterIcon />
        </button>
      </div>

      {show ? (
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="filter-button-2"
          tabIndex={-1}
          id="filter-dropdown2"
        >
          
          <div className="py-1" role="none">
            <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                id="filter-option-1"
                name={"Education"}
                checked={activeFilters.Education}
                onChange={handleChackBoxChange}
              />
              <span className="ml-2">Education</span>
            </label>
            <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                id="filter-option-2"
                name={"Food"}
                checked={activeFilters.Food}
                onChange={handleChackBoxChange}
              />
              <span className="ml-2">Food</span>
            </label>
            <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                id="filter-option-3"
                name={"Helth"}
                checked={activeFilters.Helth}
                onChange={handleChackBoxChange}
              />
              <span className="ml-2">Helth</span>
            </label>
            <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                id="filter-option-3"
                name={"Bill"}
                checked={activeFilters.Bill}
                onChange={handleChackBoxChange}
              />
              <span className="ml-2">Bill</span>
            </label>
            <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                id="filter-option-3"
                name={"Transport"}
                checked={activeFilters.Transport}
                onChange={handleChackBoxChange}
              />
              <span className="ml-2">Transport</span>
            </label>
            
            <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                id="filter-option-3"
                name={"Insurance"}
                checked={activeFilters.Insurance}
                onChange={handleChackBoxChange}
              />
              <span className="ml-2">Insurance</span>
            </label>
            <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                id="filter-option-3"
                name={"Telephone"}
                checked={activeFilters.Telephone}
                onChange={handleChackBoxChange}
              />
              <span className="ml-2">Telephone</span>
            </label>
          </div>
        </div>
      ) : null}
    </div>
  );
}

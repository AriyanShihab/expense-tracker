import React, { useState } from "react";
import ShortIcon from "../../../global-icons/ShortIcon";

export default function IncomeShorting({ shortEntrys }) {
  const [show, setShow] = useState(false);
  function handleSortAndCloaseSortPopup(order, whereToPerform) {
    shortEntrys(order, whereToPerform);
    setShow(false);
  }
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={() => setShow(!show)}
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          <ShortIcon />
        </button>
      </div>
      {show ? (
        <div
          className="absolute z-10 mt-2 left-5 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-1" role="none">
            <span
              onClick={() =>handleSortAndCloaseSortPopup("asc", "Income")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all cursor-pointer"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-0"
             
            >
              Low to High
            </span>
            <span
              onClick={() =>handleSortAndCloaseSortPopup("desc", "Income")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all cursor-pointer"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-0"
            >
              High to Low
            </span>
          </div>
        </div>
      ) : null}
    </div>
  );
}

import React, { useState } from "react";

export default function Form({
  onSubmission,
  type,
  setType,
  transaction,
  setTransaction,
  typeOfFormAction,
}) {
  const handleChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;
    setTransaction({
      ...transaction,
      [name]: value,
    });
  };
  return (
    <div className="p-6 py-8 bg-[#F9FAFB] border rounded-md relative">
      <h2 className="text-3xl font-semibold leading-7 text-gray-800 text-center">
        Expense Tracker
      </h2>
      {/* {typeOfFormAction.type === "Edit" ? (
        <span className="text-sm text-red-300 bg-red-100/70 px-4 py-2 rounded-sm absolute top-0 right-0">
          * Edit Mode
        </span>
      ) : null} */}

      <form onSubmit={() => onSubmission(event, transaction, typeOfFormAction.type)}>
        <div className="flex divide-x divide-slate-400/20 overflow-hidden rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 shadow-sm ring-1 ring-slate-700/10 mt-6">
          <div
            onClick={() => {
              setType("Expense");
            }}
            className={`cursor-pointer text-center flex-1 px-4 py-2 hover:bg-slate-50 hover:text-slate-900 ${
              type === "Expense" ? "active" : ""
            }`}
          >
            Expense
          </div>
          <div
            onClick={() => {
              setType("Income");
            }}
            className={`cursor-pointer text-center flex-1 px-4 py-2 hover:bg-slate-50 hover:text-slate-900 ${
              type === "Income" ? "active" : ""
            }`}
          >
            Income
          </div>
        </div>

        <div className="mt-3">
          <label
            htmlFor="category"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Category
          </label>
          <div className="mt-2">
            <select
              id="category"
              name="category"
              required
              value={transaction.category}
              onChange={handleChange}
              autoComplete="category-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
            >
              <option value="" disabled>
                Select a category
              </option>
              {type === "Expense" ? (
                <>
                  <option>Education</option>
                  <option>Food</option>
                  <option>Health</option>
                  <option>Bill</option>
                  <option>Insurance</option>
                  <option>Transport</option>
                  <option>Telephone</option>
                </>
              ) : (
                <>
                  <option>Salary</option>
                  <option>Outsourcing</option>
                  <option>Bond</option>
                  <option>Dividend</option>
                </>
              )}
            </select>
          </div>
        </div>

        <div className="mt-3">
          <label
            htmlFor="amount"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Amount
          </label>
          <div className="mt-2">
            <input
              type="number"
              name="amount"
              required
              value={transaction.amount}
              onChange={handleChange}
              autoComplete="off"
              placeholder="Enter Amount"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="mt-3">
          <label
            htmlFor="date"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Date
          </label>
          <div className="mt-2">
            <input
              type="date"
              name="date"
              required
              value={transaction.date}
              onChange={handleChange}
              autoComplete="off"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 rounded-md bg-teal-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 w-full capitalize"
        >
          {typeOfFormAction.type === "Edit" ? `Update ${type} Entry` : `add new ${type}`}
        </button>
      </form>
    </div>
  );
}

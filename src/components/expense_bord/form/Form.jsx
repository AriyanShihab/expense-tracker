import React, { useState } from "react";

export default function Form({ formData, setFormData }) {
  const [type, setType] = useState("Expense");
  const [tempFormData, setTempFormData] = useState({
    category: "", // Initially empty
    amount: 10,
    date: "",
    typeOfAmmount: type,
  });

  const categories = {
    Expense: [
      "Education",
      "Food",
      "Health",
      "Bill",
      "Insurance",
      "Tax",
      "Transport",
      "Telephone",
    ],
    Income: ["Salary", "Outsourcing", "Bond", "Dividend"],
  };

  function handleChange(e) {
    let elementName = e.target.name;
    let elementValue = e.target.value;
    setTempFormData({ ...tempFormData, [elementName]: elementValue });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Automatically select the first category if none is selected
    if (!tempFormData.category) {
      tempFormData.category = categories[type][0]; // Set to the first category based on type
    }

    setFormData([...formData, tempFormData]);

    // Optionally, reset tempFormData after submission if needed
    setTempFormData({
      category: "",
      amount: 10,
      date: "",
      typeOfAmmount: type,
    });
  }

  return (
    <div className="p-6 py-8 bg-[#F9FAFB] border rounded-md">
      <h2 className="text-3xl font-semibold leading-7 text-gray-800 text-center">
        Expense Tracker
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="flex divide-x divide-slate-400/20 overflow-hidden rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 shadow-sm ring-1 ring-slate-700/10 mt-6">
          <div
            onClick={() => {
              setType("Expense");
              setTempFormData((prevData) => ({
                ...prevData,
                category: "", // Reset category to force selection
                typeOfAmmount: "Expense", // Update typeOfAmmount
              }));
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
              setTempFormData((prevData) => ({
                ...prevData,
                category: "", // Reset category to force selection
                typeOfAmmount: "Income", // Update typeOfAmmount
              }));
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
              value={tempFormData.category}
              onChange={handleChange}
              autoComplete="category-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
            >
              <option value="" disabled>
                Select a category
              </option>
              {categories[type].map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
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
              value={tempFormData.amount}
              onChange={handleChange}
              required
              id="amount"
              autoComplete="off"
              placeholder="12931"
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
              value={tempFormData.date}
              onChange={handleChange}
              required
              id="date"
              autoComplete="off"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 rounded-md bg-teal-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 w-full"
        >
          Save
        </button>
      </form>
    </div>
  );
}

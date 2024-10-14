import React, { useState } from "react";
import Form from "./form/Form";
import BalanceSummery from "./balance-summery/BalanceSummery";
import Expense from "./expense/Expense";
import Income from "./income/Income";

export default function ExpanseBord() {
  const [formData, setFormData] = useState([]);
  // filter out data for income and expense component
  const onlyIncomeEntrys = formData.filter((entry) => {
    return entry.typeOfAmmount == "Income";
  });
  const onlyExpenseEntrys = formData.filter((entry) => {
    return entry.typeOfAmmount == "Expense";
  });
 ;

  return (
    <main className="relative mx-auto mt-10 w-full max-w-7xl">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* left column */}
        <Form formData={formData} setFormData={setFormData} />
        {/* Right Column */}
        <div className="lg:col-span-2">
          <BalanceSummery data={formData} />

          {/* List Down */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
            <Income entrys={onlyIncomeEntrys} />
            <Expense entrys={onlyExpenseEntrys} />
          </div>
        </div>
      </section>
    </main>
  );
}

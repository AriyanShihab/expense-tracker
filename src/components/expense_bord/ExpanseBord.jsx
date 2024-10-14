import React from "react";
import Form from "./form/Form";
import BalanceSummery from "./balance-summery/BalanceSummery";
import Expense from "./expense/Expense";
import Income from "./income/Income";

export default function ExpanseBord() {
  return (
    <main className="relative mx-auto mt-10 w-full max-w-7xl">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Form />
        {/* Right Column */}
        <div className="lg:col-span-2">
          <BalanceSummery />

          {/* List Down */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
            <Income />
            <Expense />
          </div>
        </div>
      </section>
    </main>
  );
}

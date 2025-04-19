import React, { useState } from "react";
import Input from "../Inputs/Input";

const AddIncomeForm = ({ onAddIncome }) => {
  const [income, setIncome] = useState({
    source: "",
    amount: "",
    date: "",
  });

  const handleChange = (key, value) => {
    setIncome({ ...income, [key]: value });
  };

  const handleSubmit = () => {
    onAddIncome(income);
    setIncome({ source: "", amount: "", date: "" }); // Clear form after submit (optional)
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl">
      <div className="flex justify-between items-center border-b pb-3 mb-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Add Income</h2>
      </div>

      <div className="space-y-4">
        <Input
          value={income.source}
          onChange={({ target }) => handleChange("source", target.value)}
          label="Income Source"
          placeholder="Freelance, Salary, etc"
          type="text"
        />

        <Input
          value={income.amount}
          onChange={({ target }) => handleChange("amount", target.value)}
          label="Amount"
          placeholder="0.00"
          type="number"
        />

        <Input
          value={income.date}
          onChange={({ target }) => handleChange("date", target.value)}
          label="Date"
          type="date"
        />

        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-blue-600 text-white py-2 px-5 rounded-lg hover:bg-blue-700 transition duration-300 font-medium"
          >
            Add Income
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddIncomeForm;

import React, { useState } from "react";
import Input from "../Inputs/Input";

const AddExpenseForm = ({ onAddExpense }) => {
  const [expense, setExpense] = useState({
    category: "",
    amount: "",
    date: "",
  });

  const handleChange = (key, value) =>
    setExpense({ ...expense, [key]: value });

  const handleSubmit = () => {
    onAddExpense(expense);
    setExpense({ category: "", amount: "", date: "" }); // Clear after submit
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl">
      <div className="flex justify-between items-center border-b pb-3 mb-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Add Expense
        </h2>
      </div>

      <div className="space-y-4">
        <Input
          value={expense.category}
          onChange={({ target }) => handleChange("category", target.value)}
          label="Expense Category"
          placeholder="Rent, Groceries, etc"
          type="text"
        />

        <Input
          value={expense.amount}
          onChange={({ target }) => handleChange("amount", target.value)}
          label="Amount"
          placeholder="0.00"
          type="number"
        />

        <Input
          value={expense.date}
          onChange={({ target }) => handleChange("date", target.value)}
          label="Date"
          type="date"
        />

        <div className="flex justify-end">
          <button
            type="button"
            className="bg-blue-600 text-white py-2 px-5 rounded-lg hover:bg-blue-700 transition duration-300 font-medium"
            onClick={handleSubmit}
          >
            Add Expense
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddExpenseForm;

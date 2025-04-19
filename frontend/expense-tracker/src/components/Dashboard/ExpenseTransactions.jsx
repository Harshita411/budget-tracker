import moment from "moment";
import React from "react";

import TransactionInfoCard from "../cards/TransactionInfoCard";

const ExpenseTransactions = ({ transactions, onSeeMore }) => {
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        {/* Simplified heading font */}
        {/* <h5 className="text-lg font-medium">Expenses</h5> */}
        <h5 className="text-xl text-gray-900 font-bold">Expenses</h5>


        {/* Simplified "See All" button */}
        <button className="text-blue-500 hover:underline" onClick={onSeeMore}>
          See All
        </button>
      </div>

      <div className="mt-4">
        {transactions?.slice(0, 5)?.map((expense) => (
          <TransactionInfoCard
            key={expense._id}
            title={expense.category}
            icon={expense.icon}
            date={moment(expense.date).format("Do MMM YYYY")}
            amount={`₹ ${expense.amount}`} // Corrected this line
            type="expense"
            hideDeleteBtn
          />
        ))}
      </div>
    </div>
  );
};

export default ExpenseTransactions;

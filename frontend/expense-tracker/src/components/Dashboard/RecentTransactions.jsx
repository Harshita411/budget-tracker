import React from "react";
import moment from "moment";
import TransactionInfoCard from "../cards/TransactionInfoCard";

const RecentTransactions = ({ transactions, onSeeMore }) => (
  <div className="card">
    <div className="flex items-center justify-between">
    <h5 className="text-xl text-gray-900 font-bold">Recent Transactions</h5>

       <button className="text-blue-500 hover:underline" onClick={onSeeMore}>
          See All
        </button>
    </div>

    <div className="mt-6">
      {transactions?.slice(0, 4).map(({ _id, type, category, source, date, amount }) => (
        <TransactionInfoCard
          key={_id}
          title={type === "expense" ? category : source}
          date={moment(date).format("Do MMM YYYY")}
          amount={`₹${amount.toLocaleString("en-IN")}`}
          type={type}
          hideDeleteBtn
        />
      ))}
    </div>
  </div>
);

export default RecentTransactions;

import React from "react";
import CustomPieChart from "../charts/CustomPieChart";

const FinanceOverview = ({ totalBalance, totalIncome, totalExpense }) => {
  // Blue color palette for the chart
  const COLORS = ["#3b82f6", "#60a5fa", "#93c5fd"];  // Blue tones

  const balanceData = [
    { name: "Total Balance", amount: totalBalance },
    { name: "Total Expenses", amount: totalExpense },
    { name: "Total Income", amount: totalIncome },
  ];

  return (
    <div className="card bg-lightblue p-5 rounded-lg shadow-sm">
      <div className="flex items-center justify-between">
        <h5 className="text-xl text-gray-900 font-bold">Financial Overview</h5>
      </div>

      <CustomPieChart
        data={balanceData}
        label="Total Balance"
        totalAmount={`₹${totalBalance}`}
        colors={COLORS}
        showTextAnchor
      />
    </div>
  );
};

export default FinanceOverview;

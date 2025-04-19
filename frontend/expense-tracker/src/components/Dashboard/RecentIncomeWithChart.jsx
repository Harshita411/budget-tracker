import React, { useEffect, useState } from "react";
import CustomPieChart from "../charts/CustomPieChart";

// Updated color palette to match theme
const COLORS = ["#00B0FF", "#80D4FF", "#1E88E5", "#0288D1"];

const RecentIncomeWithChart = ({ data, totalIncome }) => {
  const [chartData, setChartData] = useState([]);

  const prepareChartData = () => {
    const dataArr = data?.map((item) => ({
      name: item?.source,
      amount: item?.amount,
    }));

    setChartData(dataArr);
  };

  useEffect(() => {
    prepareChartData();

    return () => {};
  }, [data]);

  return (
    <div className="card">
      <div className="flex items-center justify-between ">
      <h5 className="text-xl text-gray-900 font-bold">Last 60 Days Income</h5>

      </div>

      <CustomPieChart
        data={chartData}
        label="Total Income"
        totalAmount={`₹${totalIncome.toLocaleString("en-IN")}`} // Display INR
        showTextAnchor
        colors={COLORS}
      />
    </div>
  );
};

export default RecentIncomeWithChart;

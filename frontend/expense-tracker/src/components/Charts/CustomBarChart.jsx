import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const CustomBarChart = ({ data, chartType = "income" }) => {

  // Function to alternate colors for the bars
  const getBarColor = (index) => {
    if (chartType === "income") {
      return index % 2 === 0 ? "#00B0FF" : "#80D4FF"; // Light blue shades for income
    }
    return index % 2 === 0 ? "#875cf5" : "#b2a0ff"; // Purple shades for expense
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white shadow-sm p-2 rounded-md">
          <p className="text-sm">{payload[0].payload.category}</p>
          <p className="text-sm">₹{payload[0].payload.amount.toLocaleString("en-IN")}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white mt-6">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid stroke="#f0f0f0" strokeDasharray="3 3" />
          <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#555" }} />
          <YAxis tick={{ fontSize: 12, fill: "#555" }} />
          
          <Tooltip content={CustomTooltip} />

          <Bar dataKey="amount" fill="#875cf5" radius={[10, 10, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={index} fill={getBarColor(index)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomBarChart;

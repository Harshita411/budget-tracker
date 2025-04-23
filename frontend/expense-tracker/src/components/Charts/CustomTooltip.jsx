import React from "react";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length > 0 && payload[0].value > 0) {
    const { name, value } = payload[0];
    return (
      <div className="bg-white p-2 rounded shadow text-sm text-gray-700">
        <p>{name}</p>
        <p className="font-semibold">₹{value.toLocaleString()}</p>
      </div>
    );
  }

  return null; // Don’t render anything if no valid data
};

export default CustomTooltip;

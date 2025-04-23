import React from "react";
import { MdDelete } from "react-icons/md";

const TransactionInfoCard = ({
  title,
  date,
  amount,
  type,
  hideDeleteBtn,
  onDelete
}) => {
  // Only applying text color based on type
  const getAmountStyles = () =>
    type === "income" ? "text-green-500" : "text-red-500";

  return (
    <div className="group relative flex items-center gap-4 mt-2 p-3 rounded-lg hover:bg-gray-100/60">
      {/* Removed circle and icon section */}

      <div className="flex-1 flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-700 font-medium">{title}</p>
          <p className="text-xs text-gray-400 mt-1">{date}</p>
        </div>

        <div className="flex items-center gap-2">
          {!hideDeleteBtn && (
            <button
            className="text-gray-400 hover:text-red-500 transition-opacity cursor-pointer"
            onClick={onDelete}
          >
            <MdDelete size={18} />
          </button>
          )}

          <div className={`flex items-center gap-2 ${getAmountStyles()}`}>
            <h6 className="text-xs font-medium">
              {type === "income" ? "+" : "-"} ₹{amount}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionInfoCard;

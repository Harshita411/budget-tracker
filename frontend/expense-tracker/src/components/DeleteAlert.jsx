import React from "react";

const DeleteAlert = ({ content, onDelete }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
      <p className="text-sm text-gray-600">{content}</p>

      <div className="flex justify-end mt-6">
        <button
          type="button"
          className="px-5 py-2 rounded-lg bg-red-500 text-white font-medium shadow hover:bg-red-600 transition duration-200"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteAlert;

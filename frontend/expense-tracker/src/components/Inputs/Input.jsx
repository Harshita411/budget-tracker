import React from "react";

const Input = ({ label, value, onChange, placeholder, type }) => {
  return (
    <div>
      <label className="text-[13px] text-gray-800">{label}</label>

      <div className="input-box">
        <input
          type={type}
          placeholder={placeholder}
          className="w-full bg-transparent outline-none"
          value={value}
          onChange={(e) => onChange(e)}
        />
      </div>
    </div>
  );
};

export default Input;

import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#d2f1f9]">
      <div className="w-full max-w-md px-6 py-8 bg-white rounded-xl shadow-md">
        <h2 className="text-4xl font-semibold text-black mb-6 text-center bg-blue-100 py-4 px-4 rounded-md" style={{ fontFamily: 'Poppins, sans-serif' }}>
        Expense Tracker
        </h2>

      

     

        {children}
      </div>
    </div>
  );
};

export default AuthLayout;

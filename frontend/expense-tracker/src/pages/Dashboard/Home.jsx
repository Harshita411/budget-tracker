import React, { useEffect, useState } from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";

import { MdAccountBalance } from "react-icons/md"; // Account balance icon
import { FaMoneyBillAlt } from "react-icons/fa"; // Money bill icon for income
import { IoMdWallet } from "react-icons/io"; // Wallet icon for expenses

import { useNavigate } from "react-router-dom";
import InfoCard from "../../components/cards/InfoCard";
import { useUserAuth } from "../../hooks/useUserAuth";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import { addThousandsSeparator } from "../../utils/helper";
import RecentTransactions from "../../components/Dashboard/RecentTransactions";
import FinanceOverview from "../../components/Dashboard/FinanceOverview";
import ExpenseTransactions from "../../components/Dashboard/ExpenseTransactions";
import Last30DaysExpenses from "../../components/Dashboard/Last30DaysExpenses";
import RecentIncome from "../../components/Dashboard/RecentIncome";
import RecentIncomeWithChart from "../../components/Dashboard/RecentIncomeWithChart";

const Home = () => {
  useUserAuth();

  const navigate = useNavigate();

  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchDashboardData = async () => {
    if (loading) return;

    setLoading(true);

    try {
      const response = await axiosInstance.get(
        `${API_PATHS.DASHBOARD.GET_DATA}`
      );

      if (response.data) {
        setDashboardData(response.data);
      }
    } catch (error) {
      console.log("Something went wrong. Please try again.", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();

    return () => {};
  }, []);

  return (
    <DashboardLayout activeMenu="Dashboard">
      <div className="my-5 mx-auto">
        {/* Adjusting the layout and styling of the info cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Total Balance Card */}
          <InfoCard
            icon={<MdAccountBalance className="text-3xl" />}
            label="Total Balance"
            value={`₹${addThousandsSeparator(dashboardData?.totalBalance || 0)}`}
            color="bg-gradient-to-r from-blue-400 to-blue-600 text-white"
          />

          {/* Total Income Card */}
          <InfoCard
            icon={<FaMoneyBillAlt className="text-3xl" />}
            label="Total Income"
            value={`₹${addThousandsSeparator(dashboardData?.totalIncome || 0)}`}
            color="bg-gradient-to-r from-green-400 to-green-600 text-white"
          />

          {/* Total Expenses Card */}
          <InfoCard
            icon={<IoMdWallet className="text-3xl" />}
            label="Total Expenses"
            value={`₹${addThousandsSeparator(dashboardData?.totalExpenses || 0)}`}
            color="bg-gradient-to-r from-red-400 to-red-600 text-white"
          />
        </div>

        {/* Additional Information Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Recent Transactions */}
          <RecentTransactions
            transactions={dashboardData?.recentTransactions}
            onSeeMore={() => navigate("/expense")}
          />

          {/* Finance Overview */}
          <FinanceOverview
            totalBalance={dashboardData?.totalBalance || 0}
            totalIncome={dashboardData?.totalIncome || 0}
            totalExpense={dashboardData?.totalExpenses || 0}
          />

          {/* Last 30 Days Expenses */}
          <ExpenseTransactions
            transactions={dashboardData?.last30DaysExpenses?.transactions || []}
            onSeeMore={() => navigate("/expense")}
          />

          {/* Last 30 Days Expenses Chart */}
          <Last30DaysExpenses
            data={dashboardData?.last30DaysExpenses?.transactions || []}
          />

          {/* Recent Income Chart */}
          <RecentIncomeWithChart
            data={dashboardData?.last60DaysIncome?.transactions?.slice(0, 4) || []}
            totalIncome={dashboardData?.totalIncome || 0}
          />

          {/* Recent Income */}
          <RecentIncome
            transactions={dashboardData?.last60DaysIncome?.transactions || []}
            onSeeMore={() => navigate("/income")}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Home;

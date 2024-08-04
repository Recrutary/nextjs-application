"use client";
import ProtectedRoute from "@/app/components/protected.route";
import DashboardCandidate from "@/app/components/dashboard/candidate";

const Dashboard = () => {
  return (
    <ProtectedRoute>
      <DashboardCandidate/>
    </ProtectedRoute>
  );
};

export default Dashboard;

"use client";
import ProtectedRoute from "@/app/components/protected.route";
import DashboardCandidate from "@/app/components/dashboard/candidate";

const Dashboard = () => {
  return (
    <ProtectedRoute>
      <main className="bg-[#f9f9f9] flex items-center justify-center min-h-screen">
        <section className="relative w-full sm:w-8/12 bg-white p-6 rounded-lg shadow-lg mx-4 sm:mx-0">
          <DashboardCandidate/>
        </section>
      </main>
    </ProtectedRoute>
  );
};

export default Dashboard;

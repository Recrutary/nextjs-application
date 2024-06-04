"use client";

import UserForm from "../components/forms/user.form";
import ProtectedRoute from "../components/protected.route";
import { useAuth } from "../context/auth.context";


const Dashboard = () => {
  const { authUser, signOut } = useAuth();

  return (
    <ProtectedRoute>
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <p className="mb-4">Welcome, {authUser?.displayName}</p>
        <UserForm />
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;

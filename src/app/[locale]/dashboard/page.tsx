"use client";

import { useEffect } from 'react';
import { usePage } from '@/app/context/page.context';
import ProtectedRoute from "@/app/components/protected.route";
import { useAuth } from "@/app/context/auth.context";
import UserForm from "@/app/components/forms/user.form";
import { useTranslations } from "next-intl";

const Dashboard = () => {
  const { authUser } = useAuth();
  const t = useTranslations('translation');
  const { setPage } = usePage();

  useEffect(() => {
    setPage('dashboard');
  }, [setPage]);

  return (
    <ProtectedRoute>
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-2xl font-bold mb-4">{t('dashboard')}</h1>
        <p className="mb-4">{t('welcomeMessage', { name: authUser?.name || 'User' })}</p>
        <UserForm />
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;

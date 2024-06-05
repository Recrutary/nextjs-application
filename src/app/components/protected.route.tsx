"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/auth.context';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { authUser, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !authUser) {
      router.push('/');
    }
  }, [authUser, loading, router]);

  if (loading || !authUser) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default ProtectedRoute;

// src/context/auth.context.tsx
"use client";

import { createContext, useContext, ReactNode } from 'react';
import useFirebaseAuth from '@/lib/use.firebase.auth';

const AuthUserContext = createContext<any>(null);

export const AuthUserProvider = ({ children }: { children: ReactNode }) => {
  const auth = useFirebaseAuth();
  return <AuthUserContext.Provider value={auth}>{children}</AuthUserContext.Provider>;
};

export const useAuth = () => useContext(AuthUserContext);

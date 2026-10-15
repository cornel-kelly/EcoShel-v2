"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import type { UserRole } from "../components/Header";

export interface AuthContextValue {
  isAuthenticated: boolean;
  userRole: UserRole;
  signIn: (role: UserRole) => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<UserRole>("tenant");

  const signIn = useCallback((role: UserRole) => {
    setIsAuthenticated(true);
    setUserRole(role);
  }, []);

  const signOut = useCallback(() => {
    setIsAuthenticated(false);
    setUserRole("tenant");
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, userRole, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used inside <AuthProvider>");
  }
  return ctx;
}

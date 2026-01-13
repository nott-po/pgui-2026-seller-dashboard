"use client";

export default function useAuth() {
  return {
    user: null,
    isAuthenticated: false,
    login: () => {},
    logout: () => {},
  };
}

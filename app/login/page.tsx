import type { Metadata } from "next";
import Login from "../components/Login";

export const metadata: Metadata = {
  title: "Log In – Ecoshel",
  description: "Sign in to your Ecoshel account to manage your rentals or contact landlords.",
};

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-surface px-4 py-10">
      <Login />
    </main>
  );
}

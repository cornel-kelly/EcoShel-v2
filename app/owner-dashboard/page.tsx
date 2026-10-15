import type { Metadata } from "next";
import OwnerDashboard from "../components/OwnerDashboard";

export const metadata: Metadata = {
  title: "Owner Dashboard – Ecoshel",
  description: "Manage your listed properties, view enquiries, and track rental income.",
};

export default function OwnerDashboardPage() {
  return <OwnerDashboard />;
}

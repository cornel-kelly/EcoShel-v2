import type { Metadata } from "next";
import UserSettings from "../components/UserSettings";

export const metadata: Metadata = {
  title: "Account Settings – Ecoshel",
  description: "Update your Ecoshel profile, notification preferences, and account details.",
};

export default function SettingsPage() {
  return <UserSettings />;
}

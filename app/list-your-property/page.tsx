import type { Metadata } from "next";
import ListProperty from "../components/ListProperty";

export const metadata: Metadata = {
  title: "List Your Property – Ecoshel",
  description:
    "Add your Accra rental to Ecoshel. Reach verified tenants with zero agent lock-ups.",
};

export default function ListYourPropertyPage() {
  return <ListProperty />;
}

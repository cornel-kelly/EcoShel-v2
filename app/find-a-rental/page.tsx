import type { Metadata } from "next";
import Home from "../components/Home";

export const metadata: Metadata = {
  title: "Find a Rental – Ecoshel | Verified Accra Rentals",
  description:
    "Browse verified long-term and monthly rentals across Greater Accra. Filter by neighbourhood, price, and property type.",
};

export default function FindARentalPage() {
  return <Home />;
}

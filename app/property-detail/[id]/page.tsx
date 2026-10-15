import type { Metadata } from "next";
import PropertyDetail from "../../components/PropertyDetail";

export const metadata: Metadata = {
  title: "Property Detail – Ecoshel",
  description: "Full details, photos, and contact information for this Accra rental property.",
};

interface Props {
  params: { id: string };
  searchParams: { price?: string };
}

export default function PropertyDetailPage({ params, searchParams }: Props) {
  const monthlyRent = searchParams.price ? Number(searchParams.price) : 6500;

  return <PropertyDetail id={params.id} monthlyRent={monthlyRent} />;
}

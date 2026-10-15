import { redirect } from "next/navigation";

/** Root page – redirect to the main listing view. */
export default function RootPage() {
  redirect("/find-a-rental");
}

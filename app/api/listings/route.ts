import { NextResponse } from "next/server";
import { SEED_LISTINGS } from "../../data/mockListings";

export async function GET() {
  return NextResponse.json(SEED_LISTINGS);
}

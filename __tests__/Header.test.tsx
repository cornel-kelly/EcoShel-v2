import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../app/components/Header";
import { AuthProvider } from "../app/context/AuthContext";

// Mock next/navigation
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    back: jest.fn(),
  }),
  usePathname: () => "/find-a-rental",
}));

describe("Header Component", () => {
  it("renders the Ecoshel brand name and navigation links", () => {
    render(
      <AuthProvider>
        <Header activePath="find-a-rental" />
      </AuthProvider>
    );

    expect(screen.getByText("Ecoshel")).toBeInTheDocument();
    expect(screen.getByText("Accra Rentals")).toBeInTheDocument();
    expect(screen.getByText("Find a Rental")).toBeInTheDocument();
    expect(screen.getByText("Accra Neighborhoods")).toBeInTheDocument();
    expect(screen.getByText("How it Works")).toBeInTheDocument();
  });

  it("shows Log in link when unauthenticated", () => {
    render(
      <AuthProvider>
        <Header activePath="find-a-rental" />
      </AuthProvider>
    );

    expect(screen.getByText("Log in")).toBeInTheDocument();
  });
});

import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Layout from "../pages/Layout";

// Mock the child components and router
vi.mock("../components/Navbar", () => ({
  default: ({ totalQuantity }) => (
    <div data-testid="mock-navbar">Cart: {totalQuantity}</div>
  ),
}));

vi.mock("../components/Footer", () => ({
  default: () => <div data-testid="mock-footer">Footer</div>,
}));

vi.mock("react-router-dom", () => ({
  Outlet: () => <div data-testid="mock-outlet">Page Content</div>,
}));

describe("Layout Component", () => {
  it("renders layout structure", () => {
    render(<Layout totalQuantity={5} />);

    // Check if all main parts are rendered
    const navbar = screen.getByTestId("mock-navbar");
    const outlet = screen.getByTestId("mock-outlet");
    const footer = screen.getByTestId("mock-footer");

    expect(navbar).toBeInTheDocument();
    expect(outlet).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });

  it("displays correct cart quantity", () => {
    render(<Layout totalQuantity={3} />);

    const navbar = screen.getByTestId("mock-navbar");
    expect(navbar).toHaveTextContent("Cart: 3");
  });

  it("renders with zero items", () => {
    render(<Layout totalQuantity={0} />);

    const navbar = screen.getByTestId("mock-navbar");
    expect(navbar).toHaveTextContent("Cart: 0");
  });
});

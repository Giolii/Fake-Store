import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import OrderPlaced from "../pages/OrderPlaced";

// Mock useNavigate hook
const mockNavigate = vi.fn();
vi.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));

describe("OrderPlaced Component", () => {
  beforeEach(() => {
    // Clear mock data before each test
    mockNavigate.mockClear();
    render(<OrderPlaced />);
  });

  it("renders thank you message", () => {
    const thankYouMessage = screen.getByText(/thank you!/i);
    expect(thankYouMessage).toBeInTheDocument();
  });

  it("shows order confirmation message", () => {
    const confirmationMessage = screen.getByText(/your order has been placed/i);
    expect(confirmationMessage).toBeInTheDocument();
  });

  it("displays shopping dog image", () => {
    const image = screen.getByAltText(/a dog with a shopping cart/i);
    expect(image).toBeInTheDocument();
  });

  it("has a working back to store button", () => {
    const backButton = screen.getByRole("button", {
      name: /go back to store/i,
    });

    // Click the button
    fireEvent.click(backButton);

    // Check if navigation was called with correct path
    expect(mockNavigate).toHaveBeenCalledWith("/store");
  });

  it("renders all main elements", () => {
    // Check if all required elements are present
    expect(
      screen.getByAltText(/a dog with a shopping cart/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/thank you!/i)).toBeInTheDocument();
    expect(screen.getByText(/your order has been placed/i)).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});

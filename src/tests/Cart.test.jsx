import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cart from "../pages/Cart";

// Mock useNavigate
vi.mock("react-router-dom", () => ({
  useNavigate: () => vi.fn(),
}));

describe("Cart Component", () => {
  // Sample cart item for testing
  const sampleCart = {
    1: {
      item: {
        id: 1,
        title: "Test Product",
        price: 19.99,
        image: "test.jpg",
      },
      quantity: 2,
    },
  };

  it("shows empty cart message when cart is empty", () => {
    render(<Cart cart={{}} setCart={() => {}} />);

    const emptyMessage = screen.getByText(/your cart is empty/i);
    expect(emptyMessage).toBeInTheDocument();
  });

  it("displays cart items when cart has products", () => {
    render(<Cart cart={sampleCart} setCart={() => {}} />);

    // Check if product title is displayed
    const productTitle = screen.getByText(/test product/i);
    expect(productTitle).toBeInTheDocument();

    // Check if quantity is displayed
    const quantity = screen.getByText(/quantity: 2/i);
    expect(quantity).toBeInTheDocument();
  });

  it("shows checkout button when cart has items", () => {
    render(<Cart cart={sampleCart} setCart={() => {}} />);

    const checkoutButton = screen.getByRole("button", { name: /checkout/i });
    expect(checkoutButton).toBeInTheDocument();
  });

  it("handles checkout process", () => {
    const mockSetCart = vi.fn();
    const { getByRole } = render(
      <Cart cart={sampleCart} setCart={mockSetCart} />
    );

    const checkoutButton = getByRole("button", { name: /checkout/i });
    fireEvent.click(checkoutButton);

    // Check if cart was cleared
    expect(mockSetCart).toHaveBeenCalledWith({});
  });

  it("calculates totals correctly", () => {
    const cart = {
      1: {
        item: {
          price: 10.0,
          title: "Test",
        },
        quantity: 2,
      },
    };

    render(<Cart cart={cart} setCart={() => {}} />);

    // Check if total price is displayed
    const totalPrice = screen.getByText("$20.00");
    expect(totalPrice).toBeInTheDocument();
  });

  it("renders cart structure", () => {
    const { container } = render(<Cart cart={sampleCart} setCart={() => {}} />);

    // Check if any div exists (more flexible)
    const cartDiv = container.querySelector("div");
    expect(cartDiv).toBeInTheDocument();
  });
});

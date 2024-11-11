import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Store from "../pages/Store";

// Mock the Card component
vi.mock("../components/Card/Card", () => ({
  default: ({ item }) => <div data-testid="mock-card">{item.title}</div>,
}));

// Mock the LoadingSpinner component
vi.mock("../components/LoadinSpinner", () => ({
  default: () => <div data-testid="loading-spinner">Loading...</div>,
}));

// Mock fetch
const mockFetch = vi.fn();
global.fetch = mockFetch;

describe("Store Component", () => {
  // Sample product data
  const mockProducts = [
    { id: 1, title: "Product 1", price: 10 },
    { id: 2, title: "Product 2", price: 20 },
  ];

  beforeEach(() => {
    mockFetch.mockClear();
  });

  it("shows loading state initially", () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockProducts,
    });

    render(<Store cart={{}} setCart={() => {}} />);

    const loadingSpinner = screen.getByTestId("loading-spinner");
    expect(loadingSpinner).toBeInTheDocument();
  });

  it("renders products after successful fetch", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockProducts,
    });

    render(<Store cart={{}} setCart={() => {}} />);

    // Wait for products to load
    await waitFor(() => {
      mockProducts.forEach((product) => {
        expect(screen.getByText(product.title)).toBeInTheDocument();
      });
    });
  });

  it("shows error message on fetch error", async () => {
    mockFetch.mockRejectedValueOnce(new Error("Failed to fetch"));

    render(<Store cart={{}} setCart={() => {}} />);

    await waitFor(() => {
      expect(screen.getByText(/error:/i)).toBeInTheDocument();
    });
  });

  it("shows no products message when data is empty", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => [],
    });

    render(<Store cart={{}} setCart={() => {}} />);

    await waitFor(() => {
      expect(screen.getByText(/no products found/i)).toBeInTheDocument();
    });
  });

  it("handles network error", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 404,
    });

    render(<Store cart={{}} setCart={() => {}} />);

    await waitFor(() => {
      expect(screen.getByText(/error:/i)).toBeInTheDocument();
    });
  });
});

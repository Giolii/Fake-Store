import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";
import { AppRoutes } from "../App";

const renderApp = (initialRoute = "/") => {
  const cart = {};
  const setCart = vi.fn();
  const totalQuantity = 0;

  return render(
    <MemoryRouter initialEntries={[initialRoute]}>
      <AppRoutes cart={cart} setCart={setCart} totalQuantity={totalQuantity} />
    </MemoryRouter>
  );
};
describe("App Component", () => {
  // Let's start with simpler tests that check for elements we know exist
  it("renders basic page structure", () => {
    renderApp();
    // Use getByRole when possible as it's more accessible
    const nav = screen.getByRole("navigation");
    expect(nav).toBeInTheDocument();
  });

  // If you have a header with these links
  it("renders navigation links", () => {
    renderApp();
    const links = screen.getAllByRole("link");
    expect(links.length).toBeGreaterThan(0); // Verify we have some links
  });

  it("renders Home component on default route", () => {
    renderApp("/");
    expect(screen.getByText(/welcome/i)).toBeInTheDocument();
  });

  it("renders Store component on /store route", () => {
    renderApp("/store");
    expect(screen.getByText(/store/i)).toBeInTheDocument();
  });

  it("renders About component on /About route", () => {
    renderApp("/About");
    expect(screen.getByText(/about fakemarket/i)).toBeInTheDocument();
  });

  it("renders Contact component on /Contact route", () => {
    renderApp("/Contact");
    expect(screen.getByText(/contact us/i)).toBeInTheDocument();
  });

  it("renders Cart component on /Cart route", () => {
    renderApp("/Cart");
    expect(screen.getByText(/cart/i)).toBeInTheDocument();
  });

  it("renders Cart img on /Cart route", () => {
    renderApp("/Cart");
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("renders OrderPlaced component on /OrderPlaced route", () => {
    renderApp("/OrderPlaced");
    expect(screen.getByText(/Your order has been placed/i)).toBeInTheDocument();
  });
});

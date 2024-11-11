import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Navbar from "../components/Navbar";

const renderNavbar = (totalQuantity = 0) => {
  return render(
    <MemoryRouter>
      <Navbar totalQuantity={totalQuantity} />
    </MemoryRouter>
  );
};

describe("Navbar Component", () => {
  it("renders logo", () => {
    renderNavbar();
    const logo = screen.getByText(/fake market/i);
    expect(logo).toBeInTheDocument();
  });

  it("renders all navigation links", () => {
    renderNavbar();

    // Check main navigation links
    ["Home", "Store", "Contact", "About"].forEach((linkText) => {
      const link = screen.getByRole("link", { name: linkText });
      expect(link).toBeInTheDocument();
    });
  });

  it("renders navigation structure", () => {
    renderNavbar();

    // Check for nav element
    const nav = screen.getByRole("navigation");
    expect(nav).toBeInTheDocument();

    // Check for list items
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(5); // Home, Store, Contact, About, Cart
  });

  describe("Cart Functionality", () => {
    it("shows cart quantity when items are present", () => {
      renderNavbar(5);
      const quantity = screen.getByText("5");
      expect(quantity).toBeInTheDocument();
    });

    it("does not show cart quantity when cart is empty", () => {
      renderNavbar(0);
      const quantity = screen.queryByText("0");
      expect(quantity).not.toBeInTheDocument();
    });
  });

  describe("Navigation Links", () => {
    it("has all required list items", () => {
      renderNavbar();
      const listItems = screen.getAllByRole("listitem");
      expect(listItems.length).toBeGreaterThanOrEqual(5);
    });

    it("contains navigation list", () => {
      renderNavbar();
      const nav = screen.getByRole("navigation");
      const list = nav.querySelector("ul");
      expect(list).toBeTruthy();
    });
  });
});

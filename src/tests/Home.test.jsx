import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Home from "../pages/Home"; // adjust the import path as needed

vi.mock("./styles/Home.module.css", () => ({
  default: {
    home: "home",
    hero: "hero",
    heroContent: "heroContent",
    heroButton: "heroButton",
  },
}));

// Helper function to render Home component with Router
const renderHome = () => {
  return render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
};

describe("Home Component", () => {
  beforeEach(() => {
    renderHome();
  });

  it("displays the welcome heading", () => {
    const heading = screen.getByRole("heading", {
      name: /welcome to fakemarket/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it("displays the promotional text", () => {
    const promoText = screen.getByText(/discover amazing deals/i);
    expect(promoText).toBeInTheDocument();
  });

  it("has a shop now button with correct link", () => {
    const shopButton = screen.getByRole("link", {
      name: /shop now/i,
    });
    expect(shopButton).toBeInTheDocument();
    expect(shopButton).toHaveAttribute("href", "/store");
  });

  it("includes all required elements", () => {
    // Check for main structural elements
    const welcomeText = screen.getByText(/welcome to fakemarket/i);
    const promoText = screen.getByText(/discover amazing deals/i);
    const shopButton = screen.getByRole("link", { name: /shop now/i });

    expect(welcomeText).toBeInTheDocument();
    expect(promoText).toBeInTheDocument();
    expect(shopButton).toBeInTheDocument();
  });
});

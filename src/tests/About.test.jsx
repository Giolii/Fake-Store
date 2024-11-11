// About.test.jsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import About from "../pages/About"; // adjust the import path as needed

describe("About Component", () => {
  beforeEach(() => {
    render(<About />);
  });

  it("renders main heading", () => {
    const mainHeading = screen.getByRole("heading", { level: 1 });
    expect(mainHeading).toBeInTheDocument();
  });

  it("renders statistics section", () => {
    const stats = screen.getAllByRole("heading", { level: 3 });
    // We know we have stats and values, both using h3
    expect(stats.length).toBeGreaterThan(0);
  });

  it("renders mission section", () => {
    const missionHeading = screen.getByRole("heading", {
      level: 2,
      name: /mission/i,
    });
    expect(missionHeading).toBeInTheDocument();
  });

  it("renders values section", () => {
    const valuesHeading = screen.getByRole("heading", {
      level: 2,
      name: /values/i,
    });
    expect(valuesHeading).toBeInTheDocument();
  });

  it("renders team section", () => {
    const teamHeading = screen.getByRole("heading", {
      level: 2,
      name: /team/i,
    });
    expect(teamHeading).toBeInTheDocument();
  });
});

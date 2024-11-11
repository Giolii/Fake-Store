import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../pages/Contact";

describe("Contact Component", () => {
  beforeEach(() => {
    render(<Contact />);
  });

  it("renders contact form", () => {
    // Check if form exists
    const form = screen.getByRole("form");
    expect(form).toBeInTheDocument();
  });

  it("renders form inputs", () => {
    // Check for all form inputs
    const nameInput = screen.getByRole("textbox", { name: /name/i });
    const emailInput = screen.getByRole("textbox", { name: /email/i });
    const subjectInput = screen.getByRole("textbox", { name: /subject/i });
    const messageInput = screen.getByRole("textbox", { name: /message/i });
    const submitButton = screen.getByRole("button", { name: /send message/i });

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(subjectInput).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it("handles form input changes", () => {
    const nameInput = screen.getByRole("textbox", { name: /name/i });

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    expect(nameInput.value).toBe("John Doe");
  });

  it("handles form submission", () => {
    const mockConsoleLog = vi.spyOn(console, "log");
    const form = screen.getByRole("form");

    // Fill out the form
    const nameInput = screen.getByRole("textbox", { name: /name/i });
    const emailInput = screen.getByRole("textbox", { name: /email/i });
    const subjectInput = screen.getByRole("textbox", { name: /subject/i });
    const messageInput = screen.getByRole("textbox", { name: /message/i });

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    fireEvent.change(subjectInput, { target: { value: "Test Subject" } });
    fireEvent.change(messageInput, { target: { value: "Test Message" } });

    // Submit the form
    fireEvent.submit(form);

    // Check if console.log was called with form data
    expect(mockConsoleLog).toHaveBeenCalled();
  });

  it("renders FAQ section", () => {
    const faqSection = screen.getByRole("heading", {
      name: /frequently asked questions/i,
    });
    expect(faqSection).toBeInTheDocument();

    // Check if FAQ items exist
    const faqHeadings = screen.getAllByRole("heading", { level: 3 });
    expect(faqHeadings.length).toBeGreaterThan(0);
  });
});

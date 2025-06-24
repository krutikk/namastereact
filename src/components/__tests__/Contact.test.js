import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Case", () => {
  it("renders correctly", () => {
    render(<ContactUs />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("Should load button", () => {
    render(<ContactUs />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("Should load input box", () => {
    render(<ContactUs />);
    const input = screen.getByPlaceholderText("name");
    expect(input).toBeInTheDocument();
  });

  it("Should load email box", () => {
    render(<ContactUs />);
    const input = screen.getByPlaceholderText("email");
    expect(input).toBeInTheDocument();
  });

  it("Should load 2 input boxes on the Contact component", () => {
    render(<ContactUs />);

    // Querying
    const inputBoxes = screen.getAllByRole("textbox");

    // console.log(inputBoxes);

    // Assertion

    expect(inputBoxes.length).toBe(3);
  });
});

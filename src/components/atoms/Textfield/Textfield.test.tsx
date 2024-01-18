import { render, screen } from "@testing-library/react";
import { Textfield } from "./Textfield";

describe("Textfield component", () => {
  it("should show test value", () => {
    render(<Textfield value={"test"} readOnly />);
    expect(screen.getByDisplayValue("test")).toBeInTheDocument();
  });
});

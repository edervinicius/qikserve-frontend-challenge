import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./Button";

test("renders button and test props and styles", () => {
  let clicked = false;

  const buttonChildren = "any_text";

  render(
    <Button
      onClick={() => {
        clicked = true;
      }}
      primaryColour="#000"
      primaryColourHover="#000"
    >
      {buttonChildren}
    </Button>
  );

  const buttonElement = screen.getByRole("button");

  expect(buttonElement).toBeInTheDocument();

  fireEvent.click(buttonElement);

  expect(clicked).toBe(true);
});

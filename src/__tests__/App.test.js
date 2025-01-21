import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { format } from "date-fns";
import App from "../components/App";

beforeEach(() => {
  render(<App />);
});

test('should include "Now" in the header instead of a time', () => {
  expect(
    screen.queryByText(format(new Date(), "MMMM do yyyy, h:mm:ss a"))
  ).not.toBeInTheDocument();  
  
  expect(screen.queryByText(/Now/g)).toBeInTheDocument();  
});

test("should include the <ExampleComponent />", () => {
  expect(screen.queryByText("Whoa!")).toBeInTheDocument();
});

test("should include the <TestComponent />", () => {
  expect(screen.queryByText("This is a test component!")).toBeInTheDocument();  
});

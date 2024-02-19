import { render, screen } from "@testing-library/react";
import HomeLinkShortenerComponent from "./link";
import user from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import LinkHistory from "./list_history";

test("On load of the home page, shortlink form component should be rendered (input and button)", () => {
  render(<HomeLinkShortenerComponent />);

  const input = screen.getByPlaceholderText("Shorten a link here");

  const submitButton = screen.getByRole("button", { name: /Shorten it!/i });

  expect(input).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test("On type inside the input component, input state should update correctly", () => {
  render(<HomeLinkShortenerComponent />);

  const input = screen.getByPlaceholderText("Shorten a link here");

  user.click(input);

  act(() => {
    user.keyboard("https://yann.com");
  });

  expect(input).toHaveValue("https://yann.com");
});

// Mock Axios
jest.mock("axios", () => ({
  interceptors: {
    request: { use: jest.fn(), eject: jest.fn() },
    response: { use: jest.fn(), eject: jest.fn() },
  },
  post: jest.fn(() =>
    Promise.resolve({
      data: { url: "https://yann.com", shrtlnk: "https://shrtlnk.com/123" },
    })
  ),
  create: jest.fn(() => {}),
}));
test("On form submitted, if input is empty, display error message", async () => {
  render(<HomeLinkShortenerComponent />);

  const button = screen.getByRole("button", { name: /Shorten it!/i });

  act(() => {
    user.click(button); // click on submit without inputing values
  });

  const errorText = screen.getByText("Please add a link");

  expect(errorText).toBeInTheDocument(); // the error message should be rendered
});

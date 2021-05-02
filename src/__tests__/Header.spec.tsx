import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "../components/Header";
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: jest.fn(),
    location: jest.fn(),
  }),
}));

describe("<Header />", () => {
  afterEach(() => cleanup());
  it("render component", () => {
    render(<Header />);
    const title = screen.getByText("The Football App");
    expect(title).toBeInTheDocument();
    userEvent.click(title);
  });
});

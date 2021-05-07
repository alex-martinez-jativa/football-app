import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LeagueItem from "../components/LeagueItem";
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe("<LeagueItem />", () => {
  afterEach(() => cleanup());
  const text = "text-test";
  const logo = "logo-test";
  const id = "id-test";
  it("render component only logo", () => {
    render(<LeagueItem text={text} logo={logo} id={id} />);
    expect(screen.queryByText(text)).not.toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", logo);
  });
  it("render component only text", () => {
    render(<LeagueItem text={text} id={id} />);
    expect(screen.getByText(text)).toBeInTheDocument();
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });

  it("click event", () => {
    render(<LeagueItem text={text} logo={logo} id={id} />);

    const element = screen.getByTestId("card-test");
    userEvent.click(element);
  });
});

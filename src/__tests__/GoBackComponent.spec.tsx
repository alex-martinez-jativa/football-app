import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GoBackComponent from "../components/GoBackComponent";

describe("<GoBackComponent />", () => {
  afterEach(() => cleanup());
  const goBack = jest.fn();
  it("render component", () => {
    render(<GoBackComponent goBack={goBack} />);
    expect(screen.getByText("Go Back")).toBeInTheDocument();
  });

  it("click event", () => {
    render(<GoBackComponent goBack={goBack} />);
    const arrowBack = screen.getByTestId("arrow");
    expect(goBack).not.toHaveBeenCalled();
    userEvent.click(arrowBack);
    expect(goBack).toHaveBeenCalledTimes(1);
  });
});

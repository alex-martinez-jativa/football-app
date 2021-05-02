import { render, screen, cleanup } from "@testing-library/react";
import Title from "../components/Title";

describe("<Title />", () => {
  afterEach(() => cleanup());
  it("render component", () => {
    const title = "test-title";
    render(<Title title={title} />);
    expect(screen.getByText(title)).toBeInTheDocument();
  });
});

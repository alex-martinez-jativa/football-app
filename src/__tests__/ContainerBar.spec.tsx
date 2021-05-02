import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import ContainerBar from "../components/ContainerBar";

describe("<ContainerBar />", () => {
  afterEach(() => cleanup());
  it("render children", () => {
    const Children: React.FC = () => {
      return <h1>Children Component</h1>;
    };
    render(<ContainerBar>{<Children />}</ContainerBar>);
    const element = screen.getByText("Children Component");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe("H1");
  });
});

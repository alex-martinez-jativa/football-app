import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CountryCard from "../components/CountryCard";

const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe("<CountryCard />", () => {
  afterEach(() => cleanup());
  it("render component", () => {
    const handleGetLeaguesByCountry = jest.fn();
    const name = "country-test-name";
    const image = "test-image";
    render(
      <CountryCard
        name={name}
        image={image}
        handleGetLeaguesByCountry={handleGetLeaguesByCountry}
      />
    );

    const testName = screen.getByText(name);
    const testImage = screen.getByRole("img");

    expect(testName).toBeInTheDocument();
    expect(testImage).toBeInTheDocument();
  });

  it("click event", () => {
    const handleGetLeaguesByCountry = jest.fn();
    const name = "country-test-name";
    const image = "test-image";
    render(
      <CountryCard
        name={name}
        image={image}
        handleGetLeaguesByCountry={handleGetLeaguesByCountry}
      />
    );

    const cardTest = screen.getByTestId("card-test");

    expect(handleGetLeaguesByCountry).not.toHaveBeenCalled();

    userEvent.click(cardTest);

    expect(handleGetLeaguesByCountry).toHaveBeenCalledTimes(1);
    expect(handleGetLeaguesByCountry).not.toHaveBeenCalledTimes(2);
    expect(handleGetLeaguesByCountry).toHaveBeenCalledWith(name);
  });
});

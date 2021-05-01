import { render, screen, cleanup } from "@testing-library/react";
import CountryList from "../components/CountryList";

const countrys = [
  {
    id: 1,
    name: "Spain",
    img:
      "https://www.ertheo.com/blog/wp-content/uploads/2017/10/Spain-national-football-team-shirt.jpg",
  },
  {
    id: 2,
    name: "Argentina",
    img:
      "https://www.audalianexia.com/wp-content/uploads/2019/04/flag-of-argentina-vector-illustration-vector.jpg",
  },
  {
    id: 3,
    name: "England",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRrL3cBfiQsqgIPS6n9Wi9f0ZSC9KPxnV5sg&usqp=CAU",
  },
  {
    id: 4,
    name: "Italy",
    img: "https://ak.picdn.net/shutterstock/videos/8962729/thumb/1.jpg",
  },
  {
    id: 5,
    name: "Germany",
    img: "https://wallpapercave.com/wp/wp3109977.jpg",
  },
  {
    id: 6,
    name: "France",
    img:
      "https://whalebets.com/wp-content/uploads/France-National-Football-Team-History-Famous-Teams-Star-Players-and-What-to-Expect.jpg",
  },
];

describe("<CountryList />", () => {
  afterEach(() => cleanup());
  it("render title", async () => {
    render(<CountryList />);

    expect(screen.getByText("Select one Country")).toBeInTheDocument();
  });
  it("render country names", async () => {
    render(<CountryList />);

    expect(screen.getByText("Select one Country")).toBeInTheDocument();

    countrys.forEach((country) => {
      expect(screen.getByText(country.name)).toBeInTheDocument();
    });
  });
  it("render images", async () => {
    render(<CountryList />);

    const images = screen.getAllByRole("img");
    expect(images.length).toBe(countrys.length);
    images.forEach((image, i) => {
      expect(image).toHaveAttribute("src", countrys[i].img);
    });
  });
});

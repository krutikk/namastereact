import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantCard, { withDiscountCard } from "../RestaurantCard";

describe("RestaurantCard", () => {
  it("Should render the RestaurantCard component", () => {
    const restData = {
      name: "Test Restaurant",
      cusine: ["Italian", "Pizza"],
      stars: 4.5,
      deliveryTime: 30,
      image: "test-image.jpg",
    };

    render(<RestaurantCard restData={restData} />);

    const nameElement = screen.getByText("Test Restaurant");
    const cusineElement = screen.getByText("Italian, Pizza");
    const starsElement = screen.getByText("4.5");
    const deliveryTimeElement = screen.getByText("30 mins");

    expect(nameElement).toBeInTheDocument();
    expect(cusineElement).toBeInTheDocument();
    expect(starsElement).toBeInTheDocument();
    expect(deliveryTimeElement).toBeInTheDocument();
    expect(screen.queryByText("20% off")).not.toBeInTheDocument();
  });

  it("Should render the discounted RestaurantCard component", () => {
    const DiscountedCard = withDiscountCard(RestaurantCard);
    const restData = {
      name: "Test Restaurant",
      cusine: ["Italian", "Pizza"],
      stars: 4.5,
      deliveryTime: 30,
      image: "test-image.jpg",
      discount: "20% off",
    };

    render(<DiscountedCard restData={restData} />);

    expect(screen.getByText("Test Restaurant")).toBeInTheDocument();
    expect(screen.getByText("Italian, Pizza")).toBeInTheDocument();
    expect(screen.getByText("4.5")).toBeInTheDocument();
    expect(screen.getByText("30 mins")).toBeInTheDocument();
    expect(screen.getByText("20% off")).toBeInTheDocument();
  });

  it("Should not render discount if discount prop is missing", () => {
    const DiscountedCard = withDiscountCard(RestaurantCard);
    const restData = {
      name: "No Discount Restaurant",
      cusine: ["Mexican"],
      stars: 3.8,
      deliveryTime: 25,
      image: "no-discount.jpg",
    };

    render(<DiscountedCard restData={restData} />);
    expect(screen.getByText("No Discount Restaurant")).toBeInTheDocument();
    expect(screen.queryByText("20% off")).not.toBeInTheDocument();
  });

  it("Should render correct image src", () => {
    const restData = {
      name: "Image Test",
      cusine: ["Thai"],
      stars: 4.0,
      deliveryTime: 40,
      image: "thai-image.jpg",
    };

    render(<RestaurantCard restData={restData} />);
    const img = screen.getByAltText("Logo");
    expect(img).toHaveAttribute(
      "src",
      expect.stringContaining("thai-image.jpg")
    );
  });

  it("Should render multiple cuisines correctly", () => {
    const restData = {
      name: "Multi Cuisine",
      cusine: ["Indian", "Chinese", "Continental"],
      stars: 4.2,
      deliveryTime: 35,
      image: "multi.jpg",
    };

    render(<RestaurantCard restData={restData} />);
    expect(
      screen.getByText("Indian, Chinese, Continental")
    ).toBeInTheDocument();
  });
});

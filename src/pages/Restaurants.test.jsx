import { render, screen } from "@testing-library/react";
import Restaurants from "./Restaurants";

describe("Restaurants Page", () => {

  test("renders the page heading", () => {
    render(<Restaurants />);

    expect(
      screen.getByText("Restaurants around you 🍽️")
    ).toBeInTheDocument();
  });

  test("renders the page description", () => {
    render(<Restaurants />);

    expect(
      screen.getByText("Find your next favourite place to eat.")
    ).toBeInTheDocument();
  });

  test("renders all filter buttons", () => {
    render(<Restaurants />);

    expect(screen.getByText("⚡ Fast Delivery")).toBeInTheDocument();
    expect(screen.getByText("★ Top Rated")).toBeInTheDocument();
    expect(screen.getByText("💰 Budget Friendly")).toBeInTheDocument();
    expect(screen.getByText("🍕 Offers")).toBeInTheDocument();
  });

});
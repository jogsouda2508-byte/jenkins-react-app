describe("Restaurants Page", () => {

  test("heading is correct", () => {
    const heading = "Restaurants around you 🍽️";

    expect(heading).toBe("Restaurants around you 🍽️");
  });

  test("description is correct", () => {
    const description = "Find your next favourite place to eat.";

    expect(description).toBe(
      "Find your next favourite place to eat."
    );
  });

  test("filter buttons are correct", () => {
    const buttons = [
      "⚡ Fast Delivery",
      "★ Top Rated",
      "💰 Budget Friendly",
      "🍕 Offers"
    ];

    expect(buttons).toContain("⚡ Fast Delivery");
    expect(buttons).toContain("★ Top Rated");
    expect(buttons).toContain("💰 Budget Friendly");
    expect(buttons).toContain("🍕 Offers");
  });

});
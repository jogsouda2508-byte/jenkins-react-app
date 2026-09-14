import RestaurantCard from "../components/RestaurantCard";
import { restaurants } from "../data/restaurants";

function Restaurants() {
  return (
    <div className="page">
      <section className="page-header">
        <span>DISCOVER</span>
        <h1>Restaurants around you 🍽️</h1>
        <p>Find your next favourite place to eat.</p>
      </section>

      <div className="filter-bar">
        <button>⚡ Fast Delivery</button>
        <button>★ Top Rated</button>
        <button>💰 Budget Friendly</button>
        <button>🍕 Offers</button>
      </div>

      <div className="restaurant-grid">
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
          />
        ))}
      </div>
    </div>
  );
}

export default Restaurants;
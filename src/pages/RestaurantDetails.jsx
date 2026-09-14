import { useParams } from "react-router-dom";
import { restaurants } from "../data/restaurants";
import { foodItems } from "../data/foodItems";
import FoodCard from "../components/FoodCard";

function RestaurantDetails() {
  const { id } = useParams();

  const restaurant = restaurants.find(
    (item) => item.id === Number(id)
  );

  return (
    <div className="page">
      <section className="restaurant-banner">
        <img src={restaurant?.image} alt={restaurant?.name} />

        <div className="restaurant-banner-overlay">
          <span>⭐ {restaurant?.rating}</span>
          <h1>{restaurant?.name}</h1>
          <p>{restaurant?.cuisine}</p>
          <small>🕐 {restaurant?.time}</small>
        </div>
      </section>

      <section className="menu-section">
        <div className="section-heading">
          <span>MENU</span>
          <h2>Popular dishes</h2>
        </div>

        <div className="food-grid">
          {foodItems.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default RestaurantDetails;
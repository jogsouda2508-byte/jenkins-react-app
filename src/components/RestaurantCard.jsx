import { Link } from "react-router-dom";

function RestaurantCard({ restaurant }) {
  return (
    <div className="restaurant-card">
      <div className="restaurant-image-container">
        <img src={restaurant.image} alt={restaurant.name} />

        <span className="restaurant-tag">
          {restaurant.tag}
        </span>

        <button className="heart-btn">♡</button>
      </div>

      <div className="restaurant-content">
        <div className="restaurant-title-row">
          <h3>{restaurant.name}</h3>

          <span className="rating">
            ★ {restaurant.rating}
          </span>
        </div>

        <p>{restaurant.cuisine}</p>

        <div className="restaurant-info">
          <span>🕐 {restaurant.time}</span>
          <span>{restaurant.price}</span>
        </div>

        <Link
          to={`/restaurant/${restaurant.id}`}
          className="view-menu"
        >
          View Menu →
        </Link>
      </div>
    </div>
  );
}

export default RestaurantCard;
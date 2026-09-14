import { Link } from "react-router-dom";
import RestaurantCard from "../components/RestaurantCard";
import { restaurants } from "../data/restaurants";

function Home() {
  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">
            ✨ Deliciousness is calling
          </span>

          <h1>
            Discover food that
            <span> makes you happy.</span>
          </h1>

          <p>
            Explore the best restaurants, discover amazing dishes
            and satisfy your cravings.
          </p>

          <div className="search-box">
            <span>📍</span>
            <input
              type="text"
              placeholder="Search for restaurants or dishes..."
            />
            <button>Search</button>
          </div>

          <div className="hero-stats">
            <div>
              <strong>10K+</strong>
              <small>Restaurants</small>
            </div>

            <div>
              <strong>50K+</strong>
              <small>Happy Customers</small>
            </div>

            <div>
              <strong>4.8★</strong>
              <small>Average Rating</small>
            </div>
          </div>
        </div>

        <div className="hero-food">
          <div className="floating-food food-one">🍕</div>
          <div className="floating-food food-two">🍔</div>
          <div className="floating-food food-three">🍜</div>
          <div className="floating-food food-four">🍩</div>

          <div className="food-orbit">
            <span>🍛</span>
          </div>
        </div>
      </section>

      <section className="categories">
        <div className="section-heading">
          <span>EXPLORE</span>
          <h2>What are you craving?</h2>
        </div>

        <div className="category-list">
          <div className="category-item">🍕<span>Pizza</span></div>
          <div className="category-item">🍔<span>Burgers</span></div>
          <div className="category-item">🍜<span>Noodles</span></div>
          <div className="category-item">🍛<span>Biryani</span></div>
          <div className="category-item">🥗<span>Healthy</span></div>
          <div className="category-item">🍰<span>Desserts</span></div>
        </div>
      </section>

      <section className="restaurant-section">
        <div className="section-heading-row">
          <div>
            <span>TOP PICKS</span>
            <h2>Popular restaurants</h2>
          </div>

          <Link to="/restaurants" className="see-all">
            View all →
          </Link>
        </div>

        <div className="restaurant-grid">
          {restaurants.slice(0, 6).map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
            />
          ))}
        </div>
      </section>

      <section className="promo-section">
        <div>
          <span>🔥 LIMITED TIME</span>

          <h2>
            Craving something
            <br />
            extraordinary?
          </h2>

          <p>
            Get exciting offers on your favourite restaurants.
          </p>

          <button className="promo-button">
            Explore Offers →
          </button>
        </div>

        <div className="promo-emoji">
          🍕
        </div>
      </section>
    </div>
  );
}

export default Home;
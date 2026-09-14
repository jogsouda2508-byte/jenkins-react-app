function FoodCard({ food }) {
  return (
    <div className="food-card">
      <img src={food.image} alt={food.name} />

      <div className="food-content">
        <div className="food-category">{food.category}</div>

        <h3>{food.name}</h3>

        <p>{food.description}</p>

        <div className="food-bottom">
          <strong>₹{food.price}</strong>

          <button className="add-btn">
            + Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;
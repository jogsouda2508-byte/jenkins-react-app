function Cart() {
  return (
    <div className="page cart-page">
      <div className="cart-container">
        <div>
          <span>YOUR ORDER</span>
          <h1>Your Cart 🛒</h1>

          <div className="cart-item">
            <div className="cart-food">🍛</div>

            <div>
              <h3>Chicken Biryani</h3>
              <p>Spice Symphony</p>
              <strong>₹249</strong>
            </div>

            <div className="quantity">
              − &nbsp; 1 &nbsp; +
            </div>
          </div>

          <div className="cart-item">
            <div className="cart-food">🍕</div>

            <div>
              <h3>Margherita Pizza</h3>
              <p>Pizza District</p>
              <strong>₹229</strong>
            </div>

            <div className="quantity">
              − &nbsp; 1 &nbsp; +
            </div>
          </div>
        </div>

        <div className="bill-card">
          <h2>Bill Summary</h2>

          <div>
            <span>Item total</span>
            <span>₹478</span>
          </div>

          <div>
            <span>Delivery fee</span>
            <span>₹40</span>
          </div>

          <div>
            <span>Platform fee</span>
            <span>₹10</span>
          </div>

          <hr />

          <div className="total">
            <strong>Total</strong>
            <strong>₹528</strong>
          </div>

          <button className="checkout-btn">
            Proceed to Checkout →
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
function Login() {
  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-icon">🍴</div>

        <h1>Welcome back!</h1>

        <p>
          Login to continue your delicious journey.
        </p>

        <input
          type="email"
          placeholder="Email address"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <button className="login-submit">
          Login →
        </button>

        <small>
          New here? <b>Create an account</b>
        </small>
      </div>
    </div>
  );
}

export default Login;
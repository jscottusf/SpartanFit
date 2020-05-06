import React from 'react';

function LoginForm() {
  return (
    <form id="login" action="/login" method="POST">
      <div className="form-group">
        <label for="email">Email:</label>
        <input
          type="email"
          className="form-control"
          name="username"
          id="username"
          required
        />
      </div>
      <div className="form-group">
        <label for="password">Password:</label>
        <input
          type="password"
          className="form-control"
          name="password"
          id="password"
          required
        />
      </div>
      <button type="submit" className="btn btn-info">
        Login
      </button>
      <p>
        Don't have an account?{' '}
        <a className="text-info" href="/register">
          Register
        </a>
      </p>
    </form>
  );
}

export default LoginForm;

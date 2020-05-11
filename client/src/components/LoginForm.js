import React from 'react';

function LoginForm(props) {
  return (
    <form id="login" action="/login" method="POST">
      <div className="form-group">
        <label for="email">Username:</label>
        <input
          type="text"
          className="form-control"
          name="username"
          id="username"
          value={props.username}
          onChange={props.handleChange}
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
          value={props.password}
          onChange={props.handleChange}
          required
        />
      </div>
      <button
        type="submit"
        onClick={props.handleSubmit}
        className="btn btn-info"
      >
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

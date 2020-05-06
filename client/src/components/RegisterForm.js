import React from 'react';

function RegisterForm() {
  return (
    <form id="register" action="/register" method="POST">
      <div className="grid-container">
        <div className="form-group">
          <label for="firstName">First name:</label>
          <input
            type="text"
            className="form-control"
            name="firstName"
            id="firstName"
            required
          />
        </div>
        <div className="form-group">
          <label for="lastName">Last name:</label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            id="lastName"
            required
          />
        </div>
        <div className="form-group">
          <label for="username">Username:</label>
          <input
            type="text"
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
        <div className="form-group">
          <label for="username">Email:</label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            required
          />
        </div>
      </div>
      <button type="submit" className="btn btn-info">
        Register
      </button>
    </form>
  );
}

export default RegisterForm;

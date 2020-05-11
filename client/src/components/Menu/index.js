import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Menu() {
  return (
    <div className="links">
      <Link
        to="/"
        className={
          window.location.pathname === '/' ||
          window.location.pathname === '/home'
            ? 'home-link active'
            : 'home-link'
        }
      >
        About
      </Link>
      <Link
        to="/login"
        className={
          window.location.pathname === '/login'
            ? 'login-link active'
            : 'login-link'
        }
      >
        Login
      </Link>
      <Link
        to="/register"
        className={
          window.location.pathname === '/register'
            ? 'register-link active'
            : 'register-link'
        }
      >
        Register
      </Link>
    </div>
  );
}

export default Menu;

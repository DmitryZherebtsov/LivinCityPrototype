import React from 'react';
import { Link } from 'react-router-dom';
import './AuthPages.css';

const LoginPage: React.FC = () => {
  return (
    <div className="auth-page">
      <div className="auth-form">
        <h1>Login</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

import React from 'react';
import { Link } from 'react-router-dom';
import './AuthPages.css';

const RegisterPage: React.FC = () => {
  return (
    <div className="auth-page">
      <div className="auth-form">
        <h1>Register</h1>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Register</button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;

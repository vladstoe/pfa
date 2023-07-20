import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
    // Add your login logic here

    return (
        <div className="login-page">
            <div className="login-form-container">
                <h1>Login Page</h1>
                <form>
                    <input
                        type="email"
                        className="login-input"
                        placeholder="Email"
                    // Add your username input handling logic here
                    />
                    <input
                        type="password"
                        className="login-input"
                        placeholder="Password"
                    // Add your password input handling logic here
                    />
                    <button type="submit">Login</button>
                </form>
                <p>
                    Don't have an account?{' '}
                    <Link to="/register">Register here</Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;

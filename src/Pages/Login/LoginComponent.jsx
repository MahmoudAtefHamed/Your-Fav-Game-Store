import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthStyles.css'; // Assuming you have the CSS file in place

const LoginComponent = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = React.useState({
        email: '',
        password: ''
    });

    const handleLogin = (e) => {
        e.preventDefault();

        // Check if the email and password match the admin credentials
        if (formData.email === 'admin@gmail.com' && formData.password === 'cr7') {
            alert('Admin logged in successfully! Redirecting to dashboard...');
            navigate('/Dashboard'); // Redirect to the Dashboard page
            return;
        }

        // Retrieve user data from local storage
        const userData = JSON.parse(localStorage.getItem('user'));

        // Validate the login credentials
        if (userData && userData.email === formData.email && userData.password === formData.password) {
            alert('Logged in successfully! Redirecting to home...');
            navigate('/'); // Redirect to Home
        } else {
            alert('Invalid email or password. Please try again.');
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2 className="text-center auth-header">Login</h2>
                <form onSubmit={handleLogin} className="mt-4">
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <br />
                    <button type="submit" className="btn btn-login">Login</button>
                    <div className="text-center mt-3">
                        <a href="/register" className="auth-link">Don't have an account? Register</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginComponent;

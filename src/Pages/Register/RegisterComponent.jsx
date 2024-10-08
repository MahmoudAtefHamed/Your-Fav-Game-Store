import React from 'react';
import { useNavigate } from 'react-router-dom';
// import './AuthStyles.css'; // Import the CSS file

const RegisterComponent = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = React.useState({
        username: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = React.useState({});

    const validate = () => {
        const newErrors = {};

        // Username validation: at least 5 characters
        if (formData.username.length < 5) {
            newErrors.username = 'Username must be at least 5 characters long.';
        }

        // Password validation: at least 5 characters
        if (formData.password.length < 5) {
            newErrors.password = 'Password must be at least 5 characters long.';
        }

        // Confirm password validation: passwords must match
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match.';
        }

        // Phone number validation: must start with 01
        const phoneRegex = /^01\d{9}$/;
        if (!phoneRegex.test(formData.phone)) {
            newErrors.phone = 'Phone number must start with "01" and be 11 digits long.';
        }

        return newErrors;
    };

    const handleRegister = (e) => {
        e.preventDefault();
        const newErrors = validate();

        if (Object.keys(newErrors).length === 0) {
            const userData = {
                username: formData.username,
                email: formData.email,
                phone: formData.phone,
                password: formData.password
            };

            // Store user data in local storage
            localStorage.setItem('user', JSON.stringify(userData));
            alert('Registration successful! Redirecting to login...');

            // Redirect to the login page
            navigate('/login');
        } else {
            setErrors(newErrors); // Set validation errors
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2 className="auth-header text-center">Register</h2>
                <form onSubmit={handleRegister} className="mt-4">
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            name="username"
                            className="form-control"
                            id="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                        {errors.username && <small className="text-danger">{errors.username}</small>}
                    </div>
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
                        <label htmlFor="phone">Phone:</label>
                        <input
                            type="tel"
                            name="phone"
                            className="form-control"
                            id="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                        {errors.phone && <small className="text-danger">{errors.phone}</small>}
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
                        {errors.password && <small className="text-danger">{errors.password}</small>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password:</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            className="form-control"
                            id="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                        {errors.confirmPassword && <small className="text-danger">{errors.confirmPassword}</small>}
                    </div>
                    <button type="submit" className="btn-register">Register</button>
                    <div className="text-center mt-3">
                        <a href="/login" className="auth-link">Already have an account? Login</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterComponent;

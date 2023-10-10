import React, { useState } from "react";
import './LoginSignup.css';

import userIcon from '../Assetes/Sample_User_Icon.png';
import emailIcon from '../Assetes/email-icon-png.webp';
import passwordIcon from '../Assetes/Password.png';

const LoginSignup = () => {
    const [action, setAction] = useState("Login");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleActionChange = () => {
        setAction(action === "Login" ? "Sign Up" : "Login");
        setFormData({ name: "", email: "", password: "" });
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
    }

    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <form className="inputs" onSubmit={handleSubmit}>
                {action === "Sign Up" && (
                    <div className="input">
                        <img src={userIcon} alt="User Icon" />
                        <input
                            type="text"
                            placeholder="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="large-input"
                        />
                    </div>
                )}
                <div className="input">
                    <img src={emailIcon} alt="Email Icon" />
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="large-input"
                    />
                </div>
                <div className="input">
                    <img src={passwordIcon} alt="Password Icon" />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                        className="large-input"
                    />
                </div>
                <div className="forgot-password">
                    {action === "Login" ? (
                        <span onClick={handleActionChange}>Don't have an account? Sign Up</span>
                    ) : (
                        <span onClick={handleActionChange}>Already have an account? Login</span>
                    )}
                </div>
                <div className="submit-container">
                    <button className="submit" type="submit">
                        {action === "Login" ? "Login" : "Sign Up"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginSignup;

import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="form-container">
                <div className="form-body">
                    <h2 className="title">Log in</h2>

                    <form action="" className="the-form">

                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="Enter your email" />

                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="Enter your password" />

                        <input type="submit" value="Log In" />

                    </form>
                    <div className="_or">or</div>
                    <div className="social-login">
                        <ul>
                            <li className="google">
                                <button className='google-link'>Google</button>
                            </li>
                            <li className="fb">
                                <button className='facebook-link'>Facebook</button>
                            </li>
                        </ul>
                    </div>

                    <div className="form-footer">
                        <div>
                            <span>Don't have an account?</span> <Link className='toggle-link' to="/signup">Sign Up</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;
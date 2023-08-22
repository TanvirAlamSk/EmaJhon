import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="form-container">
                <div className="form-body">
                    <h2 className="title">Sign in</h2>

                    <form action="" className="the-form">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" placeholder="Enter your name" />

                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="Enter your email" />

                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="Enter your password" />

                        <input type="submit" value="Sign Up" />

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
                            <span>Already have an account !</span> <Link className='toggle-link' to="/login">Log in</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SignUp;
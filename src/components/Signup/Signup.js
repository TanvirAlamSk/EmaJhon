import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import Navbar from '../Navbar/Navbar';

const Signup = () => {
    const { signupEmailAndPassword, googleSignup } = useContext(AuthContext)
    const handelSignup = (event) => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        signupEmailAndPassword(name, email, password)
        event.target.reset()
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="main-container">
                <div className="form-container">
                    <div className="form-body">
                        <h2 className="title">Sign Up</h2>

                        <form onSubmit={handelSignup} action="" className="the-form">

                            <label htmlFor="email">Name</label>
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
                                    <button onClick={googleSignup} className='google-link'>Google</button>
                                </li>
                            </ul>
                        </div>

                        <div className="form-footer">
                            <div>
                                <span>Already have an account?</span> <Link className='toggle-link' to="/login">Login</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
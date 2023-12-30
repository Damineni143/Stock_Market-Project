import React, { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = () => {
        // Save the signup details to some storage (could be state, context, or a backend)
        // Here, I'm using localStorage for simplicity. You might want to use a secure backend for storing user data.
        localStorage.setItem('userDetails', JSON.stringify({ name, email, password }));

        // Redirect to the login page
        navigate('/');
    };

    return (
        <div>
            <div className='main-login-page'>
                <div>
                    <img className='login-stock-img' src='/images/stock4.png' alt='Stock' />
                </div>
                <h1 className='login-text'>Sign Up</h1>
                <div className='email-login'>
                    <input
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='form-control input-width'
                        placeholder='Enter your name'
                    />
                </div>
                <div className='email-login'>
                    <input
                        type='text'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='form-control input-width'
                        placeholder='Enter the email address'
                    />
                </div>
                <div className='password-login'>
                    <input
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='form-control input-width'
                        placeholder='Enter the password'
                    />
                </div>
                <div>
                    <button onClick={handleSignup} className='login-btnn form-control btn btn-info'>
                        Signup
                    </button>
                </div>
                <p>
                    Already have an account? <Link to="/" className='router-sign-up'>Login</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;

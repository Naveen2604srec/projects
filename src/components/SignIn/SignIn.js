import React, { useState } from 'react';
import './SignIn.css';
import loginBackground from './loginBackground.svg'; 
import logo from './eMedHub.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [uhid, setUhid] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [error, ] = useState('');
    const navigate = useNavigate();

    const handleHomePage = () => {
        navigate('/profile');
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleSignIn = async (e) => {
        
                handleHomePage(); // Redirect to home page upon successful login
           
    };

    return (
        <div className="signin-container">
            <div className="signin-left">
                <img src={loginBackground} alt="background" className="login-background" />
                <div className="signin-info">
                    <p className='pc'>
                        <FontAwesomeIcon icon={faCircleCheck} style={{color: "#f7f7f7", marginRight: '8px'}} />
                        Integrated software solutions
                    </p>
                    <p className='pa'>
                        <FontAwesomeIcon icon={faCircleCheck} style={{color: "#f7f7f7", marginRight: '8px'}} />
                        Track Patient Health Records
                    </p>
                    <p className='pb'>
                        <FontAwesomeIcon icon={faCircleCheck} style={{color: "#f7f7f7", marginRight: '8px'}} />
                        Secured & Protected
                    </p>
                </div>
            </div>
            <div className="signin-right">
                <img src={logo} alt="eMedHub Logo" className="logo" /> 
                <p className='pe'>Having A Problem ? <a href="/signin">Get Help</a></p>
                <div className="signin-box">
                    <h5>Sign In</h5>
                    <h3>Welcome To Patient's Portal!</h3><br/>
                    <form onSubmit={handleSignIn}>
                        <div className="form-group-inline-a">
                            <label htmlFor="uhid">UHID/Mobile Number</label>
                            <input 
                                type="text" 
                                id="uhid" 
                                value={uhid} 
                                onChange={(e) => setUhid(e.target.value)} 
                                placeholder="+91 98765 12345" 
                                required
                            />
                        </div>
                        
                        <div className="form-group-inline-b">
                            <label htmlFor="password">Password</label>
                            <input 
                                type={passwordVisible ? "text" : "password"} 
                                id="password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                placeholder="Type Your Password" 
                                required
                            />
                            <FontAwesomeIcon 
                                icon={passwordVisible ? faEyeSlash : faEye} 
                                className="password-icon"
                                onClick={togglePasswordVisibility} 
                            />
                        </div>
                        <button type="submit">SIGN IN</button>
                    </form>
                    {error && <p className='error-message'>{error}</p>}
                    <p className='text'>Don't have an account? <a href="/signup">SignUp</a></p>
                </div>
                <p className='pd'>Copyrights Reserved by eMedHub @2023</p>
            </div>
        </div>
    );
};

export default SignIn;

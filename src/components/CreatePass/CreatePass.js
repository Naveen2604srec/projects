import React, { useState } from 'react';
import './CreatePass.css';
import loginBackground from './loginBackground.svg'; 
import logo from './eMedHub.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const CreatePass = () => {
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [response, setResponse] = useState('');
    const navigate = useNavigate();

    const handleVerifyPassword = async (e) => {
        e.preventDefault();
        
        if (password !== confirmpassword) {
            setResponse("Passwords do not match.");
            return;
        }

       
        navigate('/signin'); // Redirect to sign in page upon successful password confirmation
               }

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="pass-container">
            <div className="pass-left">
                <img src={loginBackground} alt="background" className="login-background" />
                <div className="pass-info">
                    <p className='pc1'>
                        <FontAwesomeIcon icon={faCircleCheck} style={{color: "#f7f7f7;", marginRight: '8px'}} />Integrated software solutions
                    </p>
                    <p className='pa1'>
                        <FontAwesomeIcon icon={faCircleCheck} style={{color: "#f7f7f7;", marginRight: '8px'}} />Track Patient Health Records
                    </p>
                    <p className='pb1'>
                        <FontAwesomeIcon icon={faCircleCheck} style={{color: "#f7f7f7;", marginRight: '8px'}} />Secured & Protected
                    </p>
                </div>
            </div>
            <div className="pass-right">
                <img src={logo} alt="eMedHub Logo" className="logo" /> 
                <p className='pe1'>Having A Problem ? <a href="/signin">Get Help</a></p>
                <div className="pass-box">
                    <h5>Verify Password</h5>
                    <form onSubmit={handleVerifyPassword}>
                        <div className="form-group-inline-a1">
                            <label htmlFor="password">Password</label>
                            <input 
                                type={passwordVisible ? "text" : "password"} 
                                id="password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                placeholder="Enter Password" 
                                required
                            />
                            <FontAwesomeIcon 
                                icon={passwordVisible ? faEyeSlash : faEye} 
                                className="password-icon"
                                onClick={togglePasswordVisibility} 
                            />
                        </div>
                        <div className="form-group-inline-b1">
                            <label htmlFor="confirmpassword">Confirm Password</label>
                            <input 
                                type="password" 
                                id="confirmpassword" 
                                value={confirmpassword} 
                                onChange={(e) => setConfirmPassword(e.target.value)} 
                                placeholder="Confirm Password" 
                                required
                            />
                        </div>
                        <button className='button-b' type="submit">Confirm Password</button>
                    </form>
                    {response && <p>{response}</p>}
                </div>
                <p className='pd1'>Copyrights Reserved by eMedHub @2023</p>
            </div>
        </div>
    );
};

export default CreatePass;

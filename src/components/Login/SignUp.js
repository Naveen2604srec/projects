import React, { useState } from 'react';
import './SignUp.css';
import loginBackground from './loginBackground.svg'; 
import logo from './eMedHub.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {
    const [uhid, setUhid] = useState('');
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [, setResponse] = useState('');
    const navigate = useNavigate();

    const generateOTP = () => {
        return Math.floor(1000 + Math.random() * 9000).toString();
    };

    const handleGenerateOTP = async (e) => {
        e.preventDefault();
        const generatedOtp = generateOTP();

        try {
            const res = await axios.post('http://localhost:5000/send-sms', {
                to: phoneNumber,
                message: `Your OTP is: ${generatedOtp}`,
            });

            if (res.data && res.data.message) {
                setResponse(`OTP sent: ${res.data.message}`);
                setIsOtpSent(true); // Indicate that OTP has been sent
            } else {
                throw new Error('Unexpected response structure');
            }
        } catch (error) {
            const errorMessage = error.response && error.response.data && error.response.data.error 
                ? error.response.data.error 
                : error.message;
            setResponse(`Error: ${errorMessage}`);
        }
    };

    const handleVerifyOTP = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post('http://localhost:5000/verify-otp', {
                phoneNumber: phoneNumber,
                otp: otp,
            });

            if (res.data && res.data.success) {
                setResponse(res.data.message);
                navigate('/createpass');
            } else {
                throw new Error('OTP verification failed');
            }
        } catch (error) {
            const errorMessage = error.response && error.response.data && error.response.data.message 
                ? error.response.data.message 
                : error.message;
            setResponse(`Error: ${errorMessage}`);
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-left">
                <img src={loginBackground} alt="background" className="login-background" />
                <div className="signup-info">
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
            <div className="signup-right">
                <img src={logo} alt="eMedHub Logo" className="logo" /> 
                <p className='pe1'>Having A Problem? <a href="/signin">Get Help</a></p>
                <div className="signup-box">
                    <h5>Sign Up</h5>
                    <h3 className='h3'>
                        Create Patient's Portal Account!
                    </h3><br/>
                    {!isOtpSent ? (
                        <form>
                            <div className="form-group-inline-a1">
                                <label htmlFor="uhid">UHID</label>
                                <input 
                                    type="text" 
                                    id="uhid" 
                                    value={uhid} 
                                    onChange={(e) => setUhid(e.target.value)} 
                                    placeholder="+91 98765 12345" 
                                />
                            </div>
                            <div className="form-group-inline-b1">
                                <label htmlFor="phoneNumber">Mobile</label>
                                <input 
                                    type="text" 
                                    id="phoneNumber" 
                                    value={phoneNumber} 
                                    onChange={(e) => setPhoneNumber(e.target.value)} 
                                    placeholder="+91 98765 12345" 
                                />
                            </div>
                            <button className='button-a' type="button" onClick={handleGenerateOTP}>Generate OTP</button>
                        </form>
                    ) : (
                        <form onSubmit={handleVerifyOTP}>
                            <div className="form-group-inline-a1">
                                <label htmlFor="otp">Enter OTP</label>
                                <input 
                                    type="text" 
                                    id="otp" 
                                    value={otp} 
                                    onChange={(e) => setOtp(e.target.value)} 
                                    placeholder="Enter OTP" 
                                />
                            </div>
                            <button className='button-a' type="submit">Verify OTP</button>
                        </form>
                    )}
                   
                    <p className='text-a'>Have an account? <a href="/signin">Sign in</a></p>
                </div>
                <p className='pd1'>Copyrights Reserved by eMedHub @2023</p>
            </div>
        </div>
    );
};

export default SignIn;

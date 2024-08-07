import React, { useState } from 'react';
import './GenerateOtp.css';
import loginBackground from './loginBackground.svg';
import logo from './eMedHub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const VerifyOtp = () => {
  const [otp, setOtp] = useState('');
  const [response, setResponse] = useState('');
  const [phoneNumber, ] = useState(''); // You might need to pass this from the previous step

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/verify-otp', {
        phoneNumber: phoneNumber,
        otp: otp,
      });
      setResponse(res.data.message);
    } catch (error) {
      setResponse(`Error: ${error.response.data.message}`);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <img src={loginBackground} alt="background" className="login-background" />
        <div className="signup-info">
          <p className='pc1'>
            <FontAwesomeIcon icon={faCircleCheck} style={{color: "#f7f7f7", marginRight: '8px'}} />Integrated software solutions
          </p>
          <p className='pa1'>
            <FontAwesomeIcon icon={faCircleCheck} style={{color: "#f7f7f7", marginRight: '8px'}} />Track Patient Health Records
          </p>
          <p className='pb1'>
            <FontAwesomeIcon icon={faCircleCheck} style={{color: "#f7f7f7", marginRight: '8px'}} />Secured & Protected
          </p>
        </div>
      </div>
      <div className="signup-right">
        <img src={logo} alt="eMedHub Logo" className="logo" />
        <p className='pe1'>Having A Problem? <a href="/signin">Get Help</a></p>
        <div className="signup-box">
          <h5>Enter OTP</h5>
          <form onSubmit={handleVerifyOtp}>
            <div className="form-group-inline-a1">
              <label htmlFor="otp">OTP</label>
              <input
                type="text"
                id="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                required
              />
            </div>
            <button className='button-a' type="submit">Verify OTP</button>
          </form>
          {response && <p>{response}</p>}
        </div>
        <p className='pd1'>Copyrights Reserved by eMedHub @2023</p>
      </div>
    </div>
  );
};

export default VerifyOtp;

import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/Login/SignUp';
import SignIn from './components/SignIn/SignIn';
import CreatePass from './components/CreatePass/CreatePass';
import Otp from './components/GenerateOtp/GenerateOtp';
import Profile from './components/Profile/Profile';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />     
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/createpass" element={<CreatePass/>} />
        <Route path="/otp" element={<Otp/>} />
        <Route path="/profile" element={<Profile/>} />

        <Route path="*" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
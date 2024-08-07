import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCapsules, faCalendarAlt, faNotesMedical, faVial, faCommentDots, faMoneyCheckAlt, faClock, faHospital, faUser, faCog } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './Profile.css';
import logo from './eMedHub.png';
import doctorPhoto from './doctor.png';
import profilePhoto from './client.png';
import hospitalIcon from './hospital.png';

const Profile = () => (
  <div className="profile-container">
    <aside className="sidebar">
  <img src={logo} alt="eMedHub Logo" className="logo1" />
  <h6 className="menu">MENU </h6>
  <ul>
    <li className="selected"><FontAwesomeIcon icon={faUser} /> Profile</li>
    <li><FontAwesomeIcon icon={faCalendarAlt} /> Appointments</li>
    <li><FontAwesomeIcon icon={faNotesMedical} /> Medical Records</li>
    <li><FontAwesomeIcon icon={faVial} /> Lab & Test Reports</li>
    <li><FontAwesomeIcon icon={faCapsules} /> Medication</li>
    <li><FontAwesomeIcon icon={faCommentDots} /> Chat & Support</li>
    <li><FontAwesomeIcon icon={faMoneyCheckAlt} /> Payments</li>
  </ul>
  <div className="settings">
    <FontAwesomeIcon icon={faCog} />
    <span>Settings</span>
  </div>
  {/* Other sidebar content */}
</aside>

    <div className="profile-main">
      <header className="profile-header">
        <h3>Welcome, Praveen</h3>
        <div className="notification">
          <p><FontAwesomeIcon icon={faBell} /></p>
          <span>You have 3 new messages and 1 Rx request that needs attention</span>
        </div>
        <div className="profile-search">
          <input type="text" placeholder="Search Anything..." />
          <div className="profile-icon-box">
            <img src={profilePhoto} alt="Profile" className="profile-photo" />
            <div>
              <span>Praveen Kelvin M</span><br/>
              <p5>SCH001232</p5>
            </div>
          </div>
        </div>
      </header>
      <div className="profile-content">
        <div className="medication-box">
          <span>
            Current Medication (3)
          </span>
          <ul>
            <li>
              <a href="#medication1">
                <div className="medication-details">
                  <FontAwesomeIcon icon={faCapsules} className="medication-icon" />
                  <div>
                    <p className="medication-name">Paracetamol Dolo 650mg</p>
                    <p className="medication-dosage">2 Tablets Daily | Morning - Night</p>
                  </div>
                </div>
                <FontAwesomeIcon icon={faChevronRight} className="chevron-icon" />
              </a>
            </li>
            <li>
              <a href="#medication2">
                <div className="medication-details">
                  <FontAwesomeIcon icon={faCapsules} className="medication-icon" />
                  <div>
                    <p className="medication-name">Paracetamol Dolo 650mg</p>
                    <p className="medication-dosage">2 Tablets Daily | Morning - Night</p>
                  </div>
                </div>
                <FontAwesomeIcon icon={faChevronRight} className="chevron-icon" />
              </a>
            </li>
            <li>
              <a href="#medication3">
                <div className="medication-details">
                  <FontAwesomeIcon icon={faCapsules} className="medication-icon" />
                  <div>
                    <p className="medication-name">Paracetamol Dolo 650mg</p>
                    <p className="medication-dosage">2 Tablets Daily | Morning - Night</p>
                  </div>
                  <p className="medication-remaining">6 LEFT</p>
                </div>
                <FontAwesomeIcon icon={faChevronRight} className="chevron-icon" />
              </a>
            </li>
          </ul>
        </div>
        <div className="appointment-box">
          <span>Upcoming Appointment</span>
          <div className="appointment-content">
            <div><br></br>
              <q1>Tuesday, 18 June</q1>
            </div>
            <div>
              <q2><FontAwesomeIcon icon={faClock} />10:30 - 11:00 AM - 30 minutes</q2>
            </div>
            <div>
              <q3><FontAwesomeIcon icon={faHospital} />Masonic Medical Centre, Race course Coimbatore, Tamil Nadu</q3>
            </div>
            <div className="doctor-info">
              <img src={doctorPhoto} alt="Dr. Praveen Kumar" className="doctor-photo" />
              <div className="doctor-details">
                <h4>Dr. Praveen Kumar</h4>
                <p>General Physician</p>
              </div>
            </div>
          </div>
        </div>
        <div className="profile-box">
          <span>Patient Profile</span>
          <div className="profile-details">
            <img src={profilePhoto} alt="Profile" className="profile-p" />
            <div className="profile-info">
              <p className="profile-name">Praveen Kelvin M</p>
              <p className="profile-id">SCH001232</p>
            </div>
            <div className="profile-stats-box">
              <div className="profile-stat">
                <p className="profile-stat-title">Blood</p>
                <p className="profile-stat-value">A+</p>
              </div>
              <div className="profile-stat-divider"></div>
              <div className="profile-stat">
                <p className="profile-stat-title">Height</p>
                <p className="profile-stat-value">160 cm</p>
              </div>
              <div className="profile-stat-divider"></div>
              <div className="profile-stat">
                <p className="profile-stat-title">Weight</p>
                <p className="profile-stat-value">54 kg</p>
              </div>
            </div>
          </div>
          <div className="profile-actions">
            <div className="action-box">
              <img src={hospitalIcon} alt="Visits Icon" className="action-icon" /> My Visits
            </div>
            <div className="action-box">
              <img src={hospitalIcon} alt="Personal Info Icon" className="action-icon" /> My Personal Information
            </div>
            <div className="action-box">
              <img src={hospitalIcon} alt="Telemedicine Icon" className="action-icon" /> Telemedicine
            </div>
          </div>
        </div>
        <div className="activity-box">
          <span>My Activity</span>
          <ul className="activity-list">
            <li className="activity-item">
              <div className="doctor-info">
                <img src={doctorPhoto} alt="Dr. Praveen Kumar" className="doctor-photo1" />
                <div className="doctor-details">
                  <h4>Dr. Praveen Kumar</h4>
                  <p>14 Jul, 2024</p>
                </div>
              </div>
              <div className="activity-description">
                <p6>Dr. Praveen Kumar added new medication to your health records during your last visit</p6>
                
              </div>
            </li>
            <li className="activity-item">
              <div className="doctor-info">
                <img src={hospitalIcon} alt="Dr. Praveen Kumar" className="doctor-photo1" />
                <div className="hospital-details">
                  <h4>Masonic Hospital</h4>
                  <p>14 Jul, 2024</p>
                </div>
              </div>
              <div className="activity-description">
                <p6>Masonic Medical Centre updated your medication dosage</p6>
              </div>
            </li>
            <li className="activity-item">
              <div className="doctor-info">
                <img src={doctorPhoto} alt="Dr. Praveen Kumar" className="doctor-photo1" />
                <div className="doctor-details">
                  <h4>Dr. Praveen Kumar</h4>
                  <p>14 Jul, 2024</p>
                </div>
              </div>
              <div className="activity-description">
                <p6>Dr Praveen has scheduled your next appointment</p6>

              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Profile;

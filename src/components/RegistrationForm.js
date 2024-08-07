import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, FormControl } from 'react-bootstrap';
import './RegistrationForm.css';

import headerImage from '../images/header.jpg';
import appStore from '../images/appstore.jpg'; 
import playStore from '../images/playstore.jpg';

const RegistrationForm = () => {
  

  const [formValues, setFormValues] = useState({
    mobileNo: '',
    doctorName: '',
    firstName: '',
    dob: '',
    age: '',
    gender: '',
    address1: '',
    address2: '',
    fatherName: '',
    email: '',
    agreedToTerms: false
  });

  const [showTermsMessage, setShowTermsMessage] = useState(false);

  const handleInputChangeMo = (event) => {
    const { name, value } = event.target;
    const numericValue = value.replace(/\D/g, '');
    setFormValues({
      ...formValues,
      [name]: numericValue,
    });
  };

  const handleInputChange = (event) => {
    const { name, value, checked } = event.target;
    const validFields = ['doctorName', 'firstName', 'fatherName', 'parentsName'];

    if (validFields.includes(name) && !/^[a-zA-Z\s]*$/.test(value)) {
        return;
    }
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: name === 'agreedToTerms' ? checked : value
    }));
  };

  const handleInputFocus = (event) => {
    const label = event.target.nextElementSibling;
    label.classList.add('focused');
  };

  const handleInputBlur = (event) => {
    const { value } = event.target;
    const label = event.target.nextElementSibling;
    if (!value) {
      label.classList.remove('focused');
    }
  };

  const calculateAgeFromBirthdate = (birthdate) => {
    const birthdateDate = new Date(birthdate);
    const today = new Date();
    let calculatedAge = today.getFullYear() - birthdateDate.getFullYear();
    const monthDifference = today.getMonth() - birthdateDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthdateDate.getDate())) {
      calculatedAge--;
    }

    return calculatedAge;
  };

  const calculateBirthdateFromAge = (inputAge) => {
    const today = new Date();
    today.setFullYear(today.getFullYear() - inputAge); // Adjusting year based on age
    return today.toISOString().split('T')[0]; // Returning birthdate as ISO date string
  };

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    const calculatedAge = calculateAgeFromBirthdate(selectedDate);

    if (calculatedAge >= 0 && calculatedAge <= 150 ) {
      setFormValues({
        ...formValues,
        dob: selectedDate,
        age: calculatedAge.toString(),
      });
    } else {
      alert("Age is Incorrect.");
    }
  };

  const handleAgeChange = (event) => {
    let inputAge = event.target.value.replace(/\D/g, '');
    if (inputAge === '') {
      setFormValues({
        ...formValues,
        age: '',
        dob: '',
      });
      return;
    }

    inputAge = parseInt(inputAge, 10);

    if (inputAge >= 0 && inputAge <= 150) {
      const calculatedBirthdate = calculateBirthdateFromAge(inputAge);
      setFormValues({
        ...formValues,
        age: inputAge.toString(),
        dob: calculatedBirthdate,
      });
    } else {
      alert("Age is Incorrect.");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };

  const toggleTermsMessage = () => {
    setShowTermsMessage(!showTermsMessage);
  };

  return (
    <Container className=" form-center">
      <div>
        <img src={headerImage} className="form-header-image" alt="Header" />
      </div>
      <h3 className="mb-4 text-center">Out Patient Registration Information Form</h3>
      
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="formBasicFirstName">
              <div className="floating-container">
                <Form.Control
                  type="text"
                  name="firstName"
                  maxLength={50}
                  value={formValues.firstName}
                  onChange={handleInputChange}
                  required
                  
                />
                <label className={`floating-label ${formValues.firstName ? 'focused' : ''}`}>Patient Name / நோயாளியின் பெயர்</label>
              </div>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formBasicDoctorName">
              <div className="floating-container">
                <Form.Control
                  type="text"
                  name="doctorName"
                  maxLength={50}
                  value={formValues.doctorName}
                  onChange={handleInputChange}
                  required
                  
                />
                <label className={`floating-label ${formValues.doctorName ? 'focused' : ''}`}>Doctor Name / மருத்துவரின் பெயர்</label>
              </div>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="formBasicDOB">
              <div className="floating-container">
                <Form.Control
                  type="date"
                  name="dob"
                  value={formValues.dob}
                  onChange={handleDateChange}
                  required
                  placeholder=" "
                  min="1872-01-01"
                />
                <label className={`floating-label ${formValues.dob ? 'focused' : ''}`}>Date of Birth / பிறந்த தேதி</label>
              </div>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formBasicAge">
              <div className="floating-container">
                <Form.Control
                  type="number"
                  name="age"
                  value={formValues.age}
                  onChange={handleAgeChange}
                  required
                  placeholder=" "
                  inputMode="numeric"
                  pattern="[0-9]*"
                  className="no-spin"
                  max={150}
                  maxLength={3}
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                />
                <label className={`floating-label ${formValues.age ? 'focused' : ''}`}>Age / வயது</label>
              </div>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="formBasicGender">
              <Form.Label>Gender / பாலினம்</Form.Label>
              <div className="gender-radio">
                <Form.Check
                  inline
                  label="Male / ஆண்"
                  type="radio"
                  name="gender"
                  id="gender-male"
                  value="Male"
                  checked={formValues.gender === 'Male'}
                  onChange={handleInputChange}
                  required
                />
                <Form.Check
                  inline
                  label="Female / பெண்"
                  type="radio"
                  name="gender"
                  id="gender-female"
                  value="Female"
                  checked={formValues.gender === 'Female'}
                  onChange={handleInputChange}
                  required
                />
                <Form.Check
                  inline
                  label="Other / மற்றவர் "
                  type="radio"
                  name="gender"
                  id="gender-other"
                  value="Other"
                  checked={formValues.gender === 'Other'}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formBasicFatherName">
              <div className="floating-container">
                <Form.Control
                  type="text"
                  name="fatherName"
                  maxLength={50}
                  value={formValues.fatherName}
                  onChange={handleInputChange}
                  required
                  
                />
                <label className={`floating-label ${formValues.fatherName ? 'focused' : ''}`}>Father/Guardian Name: தந்தை பெயர்</label>
              </div>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="formBasicAddress1">
              <div className="floating-container">
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="address1"
                  max={500}
                  value={formValues.address1}
                  onChange={handleInputChange}
                  required
                  placeholder=" "
                />
                <label className={`floating-label ${formValues.address1 ? 'focused' : ''}`}>Present Address / தற்காலிக முகவரி</label>
              </div>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formBasicAddress2">
              <div className="floating-container">
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="address2"
                  maxLength={500}
                  value={formValues.address2}
                  onChange={handleInputChange}
                  required
                  placeholder=" "
                />
                <label className={`floating-label ${formValues.address2 ? 'focused' : ''}`}>Permanent Address / நிரந்தர முகவரி</label>
              </div>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="formBasicMobileNo">
              <div className="floating-container">
              <span className="static-prefix">+91</span>
                <Form.Control
                  type="tel"
                  name="mobileNo"
                  value={formValues.mobileNo}
                  onChange={handleInputChangeMo}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  onKeyPress={(event) => {
                    if (event.key === 'e' || event.key === '.') {
                      event.preventDefault();
                    }
                  }}

                  required
                  
                  maxLength={10}
                  pattern="[0-9]*"
                  className="with-prefix"
                />
                <label className={`floating-label ${formValues.mobileNo ? 'focused' : ''}`}>Mobile no / கைபேசி எண்</label>
              </div>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formBasicEmail">
              <div className="floating-container">
                <Form.Control
                  type="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleInputChange}
                  required
                 
                />
                <label className={`floating-label ${formValues.email ? 'focused' : ''}`}>Email Id / மின்னஞ்சல் முகவரி</label>
              </div>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Button variant="link" onClick={toggleTermsMessage}>
              {showTermsMessage ? 'Letter Of Undertaking And Consent For Outpatient Treatment ▲' : 'Letter Of Undertaking And Consent For Outpatient Treatment ▼'}
              <i className={`fas fa-chevron-${showTermsMessage ? 'up' : 'down'} ml-2`}></i>
            </Button>
            {showTermsMessage && (
              <p className={`mt-3 text-justify ${showTermsMessage ? 'visible' : 'hidden'}`}>
                <span>I have been appraised of the rules & regulations of the Hospital and also the charges for treatment. I give my consent, to be examined / the patient to be examined by the Doctors. Nurses of the Hospital and to undergo essential test and procedures for diagnosis and take treatment by the Doctor.                         </span>  <br/><br/><br/>
                <span>இம்மருத்துவமனையில் நோயாளிகள் சிகிச்சை பெறுவதற்கான சட்ட திட்டங்களையும் கட்டண விகிதங்களையும் தெளிவுற அறிந்தேன். மேலும் இம்மருத்துவமனையின் மருத்துவர்கள். மருத்துவ ஆலோசகர்கள் மற்றும் செவிலியர்கள், எனது / நோயாளியின் சிகிச்சையின் நிமித்தம் என்னை / நோயாளியை உடற்பரிசோதனை மேற்கொள்ளவும் நோயை கண்டறிய அத்தியாவசிய பரிசோதனைகள் மற்றும் சிகிச்சைகள் எனக்கு / நோயாளிக்கு அளிக்கவும் மனப்பூர்வமான எனது சம்மதத்தை இதன்மூலம் தெரிவித்துக் கொள்கிறேன்.</span>
              </p>
            )}
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="formBasicParentsName">
              <div className="floating-container">
                <Form.Control
                  type="text"
                  name="parentsName"
                  maxLength={50}
                  value={formValues.parentsName}
                  onChange={handleInputChange}
                  required
                  
                />
                <label className={`floating-label ${formValues.parentsName ? 'focused' : ''}`}>Name of Parents: பெற்றோர் பெயர்  </label>
              </div>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                
                name="agreedToTerms"
                checked={formValues.agreedToTerms}
                onChange={handleInputChange}
                label="I agree to the terms and conditions / நான் விதிமுறைகளை ஏற்றுக்கொள்கிறேன்"
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <div class="imagesall">    <div class="emedlogo">
      
        <span class="alreadypat"><p>Download EmedHub </p>To view your reports and bills</span>
        
        
        </div>
            <div class="appstoreandplaystore">
            <a href="https://apps.apple.com/us/app/emedhub/id6475773185?platform=iphone*" target="_blank" rel="nofollow" > <img src={appStore} alt="Header" /></a>
            <a href="https://play.google.com/store/apps/details?id=com.emedhub.clinic&pcampaignid=web_share" target="_blank" rel="nofollow" class="playstore"> <img src={playStore} alt="Header" /></a>
      </div></div>
    </Container>
  );
};

export default RegistrationForm;

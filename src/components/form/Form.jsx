import React, {useState} from 'react';
import styles from './form.css'



const Form = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        email: '',
        selectedOption: '',
        otherOptionValue: ''
    });

    const [errors, setErrors] = useState({
        fullName: '',
        phoneNumber: '',
        email: '',
        selectedOption: '',
        otherOptionValue: ''
      });

      const[formSubmitted, setFormSubmitted] = useState(false);



    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
        setErrors((prevErrors) => ({
            ...prevErrors,
            [id]: '',
          }));
    };
    

    const validateForm = () => {
        const { fullName, phoneNumber, email, selectedOption, otherOptionValue } = formData;
    
        let formIsValid = true;

    // Check if any of the fields is empty
    if (!fullName) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        fullName: 'Full name is required.',
      }));
      formIsValid = false;
    }

    if (!phoneNumber) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: 'Phone number is required.',
      }));
      formIsValid = false;
    }

    if (!email) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Email is required.',
      }));
      formIsValid = false;
    }

    if (selectedOption === 'empty') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        selectedOption: 'Please select an option.',
      }));
      formIsValid = false;
    }

    // Validate phone number format (10 digits)
    const phonePattern = /^\d{10}$/;
    if (phoneNumber && !phonePattern.test(phoneNumber)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: 'Please enter a valid 10-digit phone number.',
      }));
      formIsValid = false;
    }

    // Validate email format using a simple regex
    const emailPattern = /^\S+@\S+\.\S+$/;
    if (email && !emailPattern.test(email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Please enter a valid email address.',
      }));
      formIsValid = false;
    }

        if(selectedOption === 'other'){
            if(!otherOptionValue){
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    otherOptionValue: 'Other option is required.',
                  }));
                formIsValid = false;
            }
        }
    
        // All checks passed, the form is valid
        return formIsValid;
      };

      const sendApplication = () => {
        setFormSubmitted(true);
        if (validateForm()) {
          console.log('Form is valid, sending application...');
          console.log('Full name:', formData.fullName);
          console.log('Phone number:', formData.phoneNumber);
          console.log('Email:', formData.email);
          console.log('Selected option:', formData.selectedOption);
    
          if (formData.selectedOption === 'other') {
            console.log('Other option value:', formData.otherOptionValue);
          }
        }
      };

      const isFieldEmptyOrError = (fieldId) => {
        return formSubmitted && (!formData[fieldId].trim() || errors[fieldId]);
      };



    return (
        <div className="form-wrapper">
            <div className="form-container">
                <div className="form-part"></div>
                <div className="form-content" id="form">
                    <div className="form-title">
                        <p>
                            Contact us
                        </p>
                    </div>
                        <div className="form-field">
                            <ul>
                                <li>
                                    <label className="form-label" htmlFor="fullName">Full name*</label>
                                    <input 
                                    className={`form-input ${isFieldEmptyOrError('fullName') ? 'error-field' : ''}`} 
                                    type="field" id="fullName" 
                                    onChange={handleChange}
                                    />
                                    {errors.fullName && <div className="error-text-div"><p className="error-text">{errors.fullName}</p></div>}
                                </li>
                                <li>
                                    <label className="form-label" htmlFor="fullName">Phone number*</label>
                                    <input                                     
                                    className={`form-input ${isFieldEmptyOrError('phoneNumber') ? 'error-field' : ''}`}
                                    type="field" 
                                    id="phoneNumber" 
                                    onChange={handleChange}
                                    />
                                    {errors.phoneNumber && <div className="error-text-div"><p className="error-text">{errors.phoneNumber}</p></div>}
                                </li>
                                <li>
                                    <label className="form-label" htmlFor="fullName">Email*</label>
                                    <input                             
                                    className={`form-input ${isFieldEmptyOrError('email') ? 'error-field' : ''}`} 
                                    type="field" 
                                    id="email" 
                                    onChange={handleChange}
                                    />
                                    {errors.email && <div className="error-text-div"><p className="error-text">{errors.email}</p></div>}
                                </li>
                                <li>
                                    <label className="form-label" htmlFor="options">Select option*</label>
                                    <select 
                                    className="form-input option-types" 
                                    name="options" 
                                    id="selectedOption" 
                                    onChange={handleChange}
                                    >
                                        <option value="empty"></option>
                                        <option value="upgrade">I would like to upgrade my bicycle to e-bike</option>
                                        <option value="repair">I would like to repair my e-vehicle</option>
                                        <option value="other">Other</option>    
                                    </select>
                                    {errors.selectedOption && <div className="error-text-div"><p className="error-text">{errors.selectedOption}</p></div>}
                                </li>
                                {formData.selectedOption === 'other' && ( // Conditional rendering of the additional input field
                                  <li>
                                    <label className="form-label" htmlFor="otherOptionValue">
                                      Other Option Value
                                    </label>
                                    <input
                                      className={`form-input ${isFieldEmptyOrError('otherOptionValue') ? 'error-field' : ''}`}
                                      type="field"
                                      id="otherOptionValue"
                                      onChange={handleChange}
                                    />
                                    {errors.otherOptionValue && <div className="error-text-div"><p className="error-text">{errors.otherOptionValue}</p></div>}
                                  </li>
                                )}
                                <div className="form-submit">
                                    <button className="form-button" onClick={sendApplication}>
                                        Send application
                                    </button>
                                </div>
                            </ul>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Form;
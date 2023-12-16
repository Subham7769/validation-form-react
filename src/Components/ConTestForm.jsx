import React, { useState,useEffect } from "react";

const ConTestForm = () => {
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [conPasswordError, setConPasswordError] = useState(false);
  const [password, setPassword] = useState(false);

  useEffect(() => {
    // Update border color after state has been updated
    document.getElementsByName("email")[0].style.borderColor = emailError ? 'red' : 'green';
    document.getElementsByName("password")[0].style.borderColor = passwordError ? 'red' : 'green';
    document.getElementsByName("conPassword")[0].style.borderColor = conPasswordError ? 'red' : 'green';
    document.getElementsByName("contestForm")[0].style.borderColor = (conPasswordError||emailError||passwordError) ? 'red' : 'green';
    document.getElementsByName("contestForm")[0].style.backgroundColor = (conPasswordError||emailError||passwordError) ? 'lightpink' : 'lightgreen';
  }, [conPasswordError,emailError,passwordError]);


  const Validations = (e) => {

    let emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    switch (e.target.name) {
      case "email":
        !e.target.value.match(emailRegex)?setEmailError("Invalid email formate"):setEmailError(false);
        break;

      case "password":
        if (!e.target.value.match(passwordRegex)) {
          setPasswordError("Password Must be at least 8 characters");
        } else {
          setPasswordError(false);
          setPassword(e.target.value)
        }
        break;
        
        case "conPassword":
          !(e.target.value==password)?setConPasswordError("Passwords do not match"):setConPasswordError(false);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!emailError && !passwordError && !conPasswordError) {
      alert("form submitted successfully");
    }
    else{
      alert("can't submit the form");
    }
  };



  return (
    <div className="contestFormContainer">
      <form onSubmit={handleSubmit} className="contestForm" name="contestForm">
        <span>
          <p>Email :</p>
          <input type="email" name="email" onChange={Validations} required/>
          {emailError && <p>{emailError}</p>}
        </span>
        <span>
        <p>Password :</p>
          <input type="password" name="password" onChange={Validations} required/>
          {passwordError && <p>{passwordError}</p>}
        </span>
        <span>
        <p>Confirm Password :</p>
          <input type="password" name="conPassword" onChange={Validations} required/>
          {conPasswordError && <p>{conPasswordError}</p>}
        </span>
        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
};

export default ConTestForm;

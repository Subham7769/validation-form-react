import React, { useState } from "react";

const ConTestForm = () => {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [conPasswordError, setConPasswordError] = useState("");
  const [password, setPassword] = useState("");


  const Validations = (e) => {

    let emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    switch (e.target.name) {
      case "email":
        if (!e.target.value.match(emailRegex)) {
          setEmailError("Enter Valid Email");
        } else {
          setEmailError("");
        }
        e.target.style.borderColor = emailError ? 'red' : 'green';
        break;

      case "password":
        if (!e.target.value.match(passwordRegex)) {
          setPasswordError("Enter Valid Password");
        } else {
          setPasswordError("");
          setPassword(e.target.value)
          console.log('Password - ' +e.target.value)
        }
        e.target.style.borderColor = passwordError ? 'red' : 'green';
        
        break;
        
        case "conPassword":
          if (!(e.target.value==password)) {
            setConPasswordError("Password Do not Match");
          } else {
            setConPasswordError("");
            console.log('Confirm Password - ' +e.target.value)
          }
          e.target.style.borderColor = conPasswordError ? 'red' : 'green';
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
      <form action="" onSubmit={handleSubmit} className="contestForm">
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
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ConTestForm;

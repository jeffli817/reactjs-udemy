import { useState, useEffect } from "react";
import useBasicInput from "../hooks/use-basic-input";

const BasicForm = (props) => {
  const[isFormValid, setIsFormValid] = useState(false);
  const {
    value: nameInput,
    isValueValid: isNameValid,
    isInputValid: isNameInputValid,
    changeHandler: enteredNameChangeHandler,
    onBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useBasicInput((value) => value.trim() !== "");

  const {
    value: lastNameInput,
    isValueValid: isLastNameValid,
    isInputValid: isLastNameInputValid,
    changeHandler: enteredLastNameChangeHandler,
    onBlurHandler: lastNameBlurHandler,
    reset: lastNameReset,
  } = useBasicInput((value) => value.trim() !== "");

  const {
    value: emailInput,
    isValueValid: isEmailValid,
    isInputValid: isEmailInputValid,
    changeHandler: enteredEmailChangeHandler,
    onBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useBasicInput((value) => value.trim() !== "" & value.includes('@'));

  useEffect (()=>{
    if (isNameValid && isLastNameValid && isEmailValid){
      setIsFormValid(true);
    }
    else{
      setIsFormValid(false);
    }
  },[isNameValid,isLastNameValid,isEmailValid]);


  const formSubmitHandler=(event)=>{
    event.preventDefault();
    if (!isFormValid){
      return;
    }
    console.log('submitted');
    nameReset();
    lastNameReset();
    emailReset();
  }


  const nameInputClasses = isNameInputValid
  ? "form-control invalid"
  : "form-control";

  const lastNameInputClasses = isLastNameInputValid
  ? "form-control invalid"
  : "form-control";

const emailInputClasses = isEmailInputValid
  ? "form-control invalid"
  : "form-control";



  return (
    <form>
      <div className="control-group" onSubmit={formSubmitHandler}>
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input type="text" id="name" onBlur={nameBlurHandler} onChange={enteredNameChangeHandler}/>
          {isNameInputValid && <p className="error-text">invalid first name</p>}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" onBlur={lastNameBlurHandler} onChange={enteredLastNameChangeHandler}/>
          {isLastNameInputValid && <p className="error-text">invalid last name</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" onBlur={emailBlurHandler} onChange={enteredEmailChangeHandler}/>
        {isEmailInputValid && <p className="error-text">invalid email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;

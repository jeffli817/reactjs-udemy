import { useEffect, useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const {
    values: enteredName,
    enterdValueIsValid: enteredNameIsInvalid,
    inputIsInvalid: nameInputIsInvalid,
    enteredValueChangeHandler: enteredNameChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    values: enteredEmail,
    enterdValueIsValid: enteredEmailIsValid,
    inputIsInvalid: emailInputIsInvalid,
    enteredValueChangeHandler: enteredEmailChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.trim() !== "" && value.includes('@'));

  useEffect(() => {
    if (enteredNameIsInvalid && enteredEmailIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [enteredNameIsInvalid, enteredEmailIsValid]);

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    console.log(enteredName);
    console.log(enteredEmail);
    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          onChange={enteredNameChangeHandler}
          onBlur={nameInputBlurHandler}
          type="text"
          id="name"
        />
      </div>
      {nameInputIsInvalid && (
        <p className="error-text">Name must not be empty.</p>
      )}
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          onChange={enteredEmailChangeHandler}
          onBlur={emailInputBlurHandler}
          type="text"
          id="email"
        />
      </div>
      {emailInputIsInvalid && <p className="error-text">Email is invalid.</p>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

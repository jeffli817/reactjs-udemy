import { useState } from "react";

const useInput =(validateFn)=>{
    const [enteredValue, setEnteredValue] = useState("");
    const [enteredValueTouched, setEnteredValueTouched] = useState(false);
  
    const enterdValueIsValid = validateFn(enteredValue);
    const inputIsInvalid = !enterdValueIsValid && enteredValueTouched;
  
    const enteredValueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
      };
    
      const inputBlurHandler = (event) => {
        setEnteredValueTouched(true);
      };
    
      const reset=()=>{
        setEnteredValue('');
        setEnteredValueTouched(false);
      }

      return {
          values: enteredValue,
          inputIsInvalid: inputIsInvalid,
          enteredValueChangeHandler,
          inputBlurHandler,
          reset
      }
}

export default useInput;
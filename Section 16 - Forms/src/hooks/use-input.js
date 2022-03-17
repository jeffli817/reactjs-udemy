import { useReducer, useState } from "react";

const initialInputState ={
    value:'',
    isTouched: false
}
const inputStateReducer = (state,action)=>{
    if (action.type ==='INPUT'){
        return { value: action.value , isTouched: state.isTouched} 
    }
    if (action.type ==='BLUR'){
        return { isTouched: true, value : state.value}
    }
    if (action.type ==='RESET'){
        return {isTouched: false,value: ''}
    }
    return inputStateReducer;
}

const useInput =(validateFn)=>{
    const[inputState,dispatch] =  useReducer(inputStateReducer,initialInputState);  
    const enterdValueIsValid = validateFn(inputState.value);
    const inputIsInvalid = !enterdValueIsValid && inputState.isTouched;
  
    const enteredValueChangeHandler = (event) => {
        dispatch({type:'INPUT',value:event.target.value})
      };
    
      const inputBlurHandler = (event) => {
        dispatch({type:'BLUR'})
      };
    
      const reset=()=>{
          dispatch({type:'RESET'})
      }

      return {
          values: inputState.value,
          enterdValueIsValid: enterdValueIsValid,
          inputIsInvalid: inputIsInvalid,
          enteredValueChangeHandler,
          inputBlurHandler,
          reset
      }
}

export default useInput;
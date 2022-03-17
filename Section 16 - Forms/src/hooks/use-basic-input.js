import { useState } from "react";

const useBasicInput =(inputFn)=>{
    const [inputValue, setInputValue] = useState('');
    const [isTouch,setIsTouch] = useState(false);

    const isValueValid = inputFn(inputValue);
    const isInputValid = isTouch && !isValueValid


    const changeHandler = (event)=>{
        setInputValue(event.target.value);
    }
    const onBlurHandler = (event)=>{
        setIsTouch(true);
    }

    const reset = () =>{
        setIsTouch(false);
        setInputValue('');
    }


    return {
        value: inputValue,
        isValueValid: isValueValid,
        isInputValid: isInputValid,
        changeHandler: changeHandler,
        onBlurHandler: onBlurHandler,
        reset:reset
    }
}

export default useBasicInput;
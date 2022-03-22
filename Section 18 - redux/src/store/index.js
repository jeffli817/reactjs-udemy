import {createSlice, configureStore} from '@reduxjs/toolkit';

const initialState = { counter:0 , showCounter: true}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increment (state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            console.log(action);
            state.counter = state.counter +action.payload.number;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});
/* 
const counterReducer = (state = initialState,action) =>{
    if (action.type === 'INCREMENT') {
        return{
            counter:state.counter+ 1,
            showCounter: state.showCounter
        }
    }
    else if (action.type === 'INCREASE'){
        return {
            counter: state.counter + action.number,
            showCounter: state.showCounter
        }
    }

    else if (action.type === 'DECREMENT'){
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        }
    }
    else if (action.type ==='TOGGLE'){
        return {
            counter: state.counter,
            showCounter: !state.showCounter
        }
    }
    return state;
} */



const store = configureStore({
    reducer: counterSlice.reducer
});

export const counterAction = counterSlice.actions;

export default store;
import {createSlice, configureStore} from '@reduxjs/toolkit';
import counterSlice from './counter';
import loginSlice from './auth'

const store = configureStore({
    reducer: {counter : counterSlice.reducer,
        login: loginSlice.reducer}
});


export default store;
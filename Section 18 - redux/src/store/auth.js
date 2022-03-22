import {createSlice, configureStore} from '@reduxjs/toolkit';


const initialLoginState = {isAuth: false};

const loginSlice = createSlice({
    name: 'authentication',
    initialState: initialLoginState,
    reducers:{
        login(state){
            state.isAuth = true;
        },

        logout(state){
            state.isAuth = false;
        }
    }
});
export const loginAction = loginSlice.actions;

export default loginSlice;
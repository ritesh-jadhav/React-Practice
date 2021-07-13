import {createSlice,configureStore} from '@reduxjs/toolkit';

const initialCounterState  = { counter: 0,showCounter : true } ;


const counterSlice = createSlice({
    name:'counter',
    initialState: initialCounterState,
    reducers:{
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state,action) {
            state.counter=state.counter+action.payload;
        },
        toggle(state) {
            state.showCounter=!state.showCounter;
        },
    }
});
const initialAuthState = {isAuthnticated:false} ;

const authSlice =  createSlice({
    name: 'authntication',
    initialState:initialAuthState,
    reducers : {
        Login(state) {
             state.isAuthnticated=true;
        },
         LogOut(state) {
            state.isAuthnticated=false;
         },
    }
});



const store = configureStore({
    reducer:{
        counter: counterSlice.reducer,
        auth : authSlice.reducer,
    }
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
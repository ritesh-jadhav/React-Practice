import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './couter';
import authReducer from './auth';

const store = configureStore({
    reducer:{
        counter: counterReducer.reducer,
        auth : authReducer.reducer,
    }
});

export default store;
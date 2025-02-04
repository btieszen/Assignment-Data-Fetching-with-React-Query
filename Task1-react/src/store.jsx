import { configureStore } from '@reduxjs/toolkit';
import postReducer from './features/postSlices';

export const store = configureStore({
    reducer:{
        post:postReducer,
    },
});
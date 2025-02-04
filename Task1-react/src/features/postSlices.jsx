import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    post:[],
};

export const postSlice = createSlice({
    name:'post',
    initialState,
    reducers:{
        AddPost:(state,action)=>{
            state.post.push(action.payload);
        },
        DeletePost:(state,action)=>{
            state.post=state.post.filter(
                (post)=>post.id !== action.payload
            );
        },
    },
});

export const { AddPost,DeletePost,EditPost,ViewPost } = postSlice.actions;

export default postSlice.reducer;